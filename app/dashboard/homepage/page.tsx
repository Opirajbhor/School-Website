import Link from "next/link"

export default function HomepageCustomization() {
  return (
    <div >
      <div>
        <h1 className="mt-5 text-center underline">Homepage Customization</h1>
      </div>

      <div className="flex flex-col">
        <Link href={"/"} className="w-60 rounded-2xl bg-accent p-20">
          {" "}
          Banner
        </Link>
      </div>
    </div>
  )
}
