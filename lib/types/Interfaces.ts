import { Component, JSX } from "react"

export interface heroData {
  src: string
  tittle: string
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

export interface Stuff {
  id: string
  name: string
  slug: string
  dob: Date
  designation: string
  subject?: string
  religion?: string
  mpoIndex: string
  joinDate: Date
  email: string
  phone: string
  gender: "MALE" | "FEMALE"
  image: string
  classTeacher?: string
  nidNo?: string
  address?: string
  lastEducation?: string
  instituteSection: "General" | "Vocational"
  createdAt: Date
  updatedAt: Date
}
