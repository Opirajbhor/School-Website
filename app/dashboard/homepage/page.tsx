import Link from "next/link"

export default function HomepageCustomization() {
  return (
    <div>
      <div>
        <h1 className="mt-5 text-center underline">Homepage Customization</h1>
      </div>

      <div className="flex gap-5">
        <Link
          href={"/dashboard/homepage/banner"}
          className="w-60 rounded-2xl bg-accent p-20"
        >
          Banner
        </Link>
        <Link
          href={"/dashboard/homepage/statistics"}
          className="w-60 rounded-2xl bg-accent p-20"
        >
          statistics
        </Link>
      </div>
    </div>
  )
}
