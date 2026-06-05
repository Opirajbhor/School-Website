"use client"

import LoadingSpinner from "@/Custom-Components/Dashboard-Compo/LoadingSpinner"
import { api } from "@/lib/axios/axios"
import { notices } from "@/lib/types/type"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function Notice() {
  const { id } = useParams()
  const [notice, setNotice] = useState<notices | null>(null)
  //   fetch data
  useEffect(() => {
    async function load() {
      const res = await api.get(`notice-details/${id}`)
      setNotice(res.data)
    }

    load()
  }, [id])
  console.log(notice)

  if (!notice) {
    return <LoadingSpinner />
  }

  return (
    <article className="mx-auto my-6 max-w-4xl rounded-lg border p-6">
      {/* {notice?.isImportant && (
        <span className="mb-4 inline-block rounded bg-red-500 px-3 py-1 text-sm text-white">
          Important Notice
        </span>
      )} */}

      <h1 className="text-3xl font-bold">{notice?.title}</h1>

      <p className="mt-2 text-sm text-muted-foreground">
        Published: {new Date(notice.createdAt).toLocaleDateString()}
      </p>

      <div className="prose mt-6 max-w-none">
        <p>{notice?.description}</p>
      </div>

      {/* {notice.fileUrl && (
        <a
          href={notice.fileUrl}
          target="_blank"
          className="mt-6 inline-block rounded bg-primary px-4 py-2 text-primary-foreground"
        >
          Download Attachment
        </a>
      )} */}
    </article>
  )
}
