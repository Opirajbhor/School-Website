import { prisma } from "@/lib/prisma/prisma"
import React from "react"

const NoticeDetails = async (id) => {
  const notice = await prisma.notice-details.id
  return (
    <article className="mx-auto max-w-4xl rounded-lg border p-6">
      {notice?.isImportant && (
        <span className="mb-4 inline-block rounded bg-red-500 px-3 py-1 text-sm text-white">
          Important Notice
        </span>
      )}

      <h1 className="text-3xl font-bold">{notice?.title}</h1>

      <p className="mt-2 text-sm text-muted-foreground">
        Published: {new Date(notice?.createAt).toLocaleDateString()}
      </p>

      <div className="prose mt-6 max-w-none">
        <p>{notice?.description}</p>
      </div>

      {notice.fileUrl && (
        <a
          href={notice.fileUrl}
          target="_blank"
          className="mt-6 inline-block rounded bg-primary px-4 py-2 text-primary-foreground"
        >
          Download Attachment
        </a>
      )}
    </article>
  )
}

export default NoticeDetails
