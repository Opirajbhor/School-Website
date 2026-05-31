import Footer from "@/Custom-Components/Footer"
import Header from "@/Custom-Components/Header"
import Navbar from "@/Custom-Components/Navbar"
import { ReactNode } from "react"
type Props = {
  children: ReactNode
}
export default function MainLayout({ children }: Props) {
  return (
    <>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
