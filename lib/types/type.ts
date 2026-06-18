export type PraisePoint = {
  title: string
  description: string
}

export type staffDataType = {
  id?: string
  name: string
  designation: string
  subject: string
  mpoIndex: string | null
  joiningDate: string
  comment: string
  imageUrl: string
  phone: string
  image?: FileList
}

export type galleryType = {
  id?: string
  tittle: string
  image?: FileList
  imageUrl: string
}

export type logoName = {
  id?: string
  name?: string
  slogan?: string
  image?: FileList
  imageUrl?: string
}
export type notices = {
  id?: string
  title: string
  fileUrl: string
  file: FileList
  description?: string
  createdAt: Date
}
export type notice = {
  id?: string
  title: string
  fileUrl: string
  description?: string
  createdAt: Date
}

export type footerAddress = {
  id: string
  key: string
  eiin?: string
  mpoCode?: string
  address: string
  phone01: string
  phone02?: string
  email: string
}

export type StatsForm = {
  students: string
  teachers: string
  stuff: string
  totalRoom: string
  building: string
}
