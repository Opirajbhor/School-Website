import LoadingSpinner from "@/components/Custom-Components/Dashboard-Compo/LoadingSpinner"
import Link from "next/link"

export default function HomepageCustomization() {
  const tabs = [
    {
      link: "/dashboard/homepage/banner",
      name: "Banner",
      icon: "",
    },
    {
      link: "/dashboard/homepage/statistics",
      name: "Statistics",
      icon: "",
    },
    {
      link: "/dashboard/homepage/message",
      name: "Message",
      icon: "",
    },
  ]
  setTimeout(() => <LoadingSpinner />, 1000)
  return (
    <div>
      <div>
        <h1 className="my-5 text-center underline">Homepage Customization</h1>
      </div>
      <div className="flex gap-5">
        {tabs.map((tab, index) => (
          <Link
            key={index}
            href={tab.link}
            className="w-60 rounded-2xl bg-accent p-20"
          >
            {tab.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
