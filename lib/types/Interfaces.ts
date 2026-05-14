export interface heroData {
  src: string
  tittle: string
}

export interface dashboardLinks {
  name: string
  src: string
  icon: string
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
  dob: Date

  designation: string
  subject?: string

  religion?: string

  mpoIndex?: string

  joinDate?: Date

  email?: string
  phone: string

  gender?: "MALE" | "FEMALE" | "OTHER"

  eiin?: string

  photo?: string

  classTeacher: boolean

  nidNo?: string

  address?: string

  lastEducation?: string

  instituteSection?: string

  createdAt: Date
  updatedAt: Date
}
