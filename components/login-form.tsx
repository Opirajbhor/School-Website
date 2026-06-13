"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { Spinner } from "./ui/spinner"
import { api } from "@/lib/axios/axios"
import toast, { Toaster } from "react-hot-toast"
import { useRouter } from "next/navigation"
import { ArrowRight } from "lucide-react"

type auth = {
  email: string
  password: string
}

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [spin, setSpinner] = useState<boolean>(false)
  const router = useRouter()
  const { register, handleSubmit } = useForm<auth>()

  const onSubmit = async (data: auth) => {
    setSpinner(true)
    console.log(data)
    try {
      const res = await api.post("/auth/login", {
        data: {
          email: data?.email,
          password: data?.password,
        },
      })
      if (res.status === 200) {
        toast.success("Successfully logged in")
        router.push("/dashboard")
      }
    } catch (err) {
      console.error(err)
      toast.error("Email or Password is wrong!")
    } finally {
      setSpinner(false)
    }
  }
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <div className="mx-auto border-b-6">
          <Link
            className="mx-auto flex items-center gap-1 text-xl text-primary"
            href={"/"}
          >
            Go To HomePage <ArrowRight />
          </Link>
        </div>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  {...register("email")}
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto hidden text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>

                <Input
                  {...register("password")}
                  id="password"
                  type="password"
                  required
                />
              </Field>
              <Field>
                <Button disabled={spin} type="submit">
                  {spin && <Spinner />}Login
                </Button>
                <Button className="hidden" variant="outline" type="button">
                  Login with Google
                </Button>
                <FieldDescription className="hidden text-center">
                  Don&apos;t have an account?{" "}
                  <Link href="/auth/signup">Sign up</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <Toaster />
    </div>
  )
}
