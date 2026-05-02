import Navbar from "@/components/Custom-Components/Navbar"
import { ReactNode } from "react"
type Props = {
  children: ReactNode
}
export default function MainLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
