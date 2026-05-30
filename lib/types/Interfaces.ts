import { JSX } from "react"

export interface heroData {
  imageUrl: string
  key: string
  title: string
  image: FileList
}

export interface dashboardLinks {
  name: string
  src: string
  icon?: JSX.Element
}

export interface messageHead {
  title: string
  name: string
  image: string
  desc: string
}

export interface aboutSchool {
  key: string
  title: string
  description: string
  imageUrl: string
  image?: FileList
}
