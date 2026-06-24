"use client"
import { Button } from "@/components/ui/button"
import { api } from "@/lib/axios/axios"
import { useRouter } from "next/navigation"
export default function LogoutButton() {
  const router = useRouter()
  async function logout() {
    await api.post("/auth/logout")
    router.push("/auth/login")
  }
  return (
    <Button className="rounded-2xl bg-primary p-2" onClick={logout}>
      Logout
    </Button>
  )
}
