import { Button } from "@/components/ui/button"
import StaffCard from "./StuffCard"
import { prisma } from "@/lib/prisma/prisma"

// const teachers = [
//   {
//     name: "আব্দুল্লাহ আল নোমান",
//     slug : "আব্দুল্লাহ-আল-নোমান",
//     role: "সিনিয়র বাংলা শিক্ষক",
//     image: "/t1.jpg",
//   },
//   {
//     name: "মাহবুব সরকার",
//     role: "সিনিয়র ইংরেজি শিক্ষক",
//     image: "/t2.jpg",
//   },
//   {
//     name: "সোনিয়া আক্তার",
//     role: "গণিত শিক্ষিকা",
//     image: "/t3.jpg",
//   },
//   {
//     name: "তাসনিম জারা শাওন",
//     role: "সিনিয়র বিজ্ঞান শিক্ষিকা",
//     image: "/t4.jpg",
//   },
// ];

const teachers = await prisma.staff.findMany({
  orderBy: { createdAt: "desc" },
})
export default function TeacherSection() {
  return (
    <section className="w-full bg-background py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <h2 className="mb-8 text-2xl font-bold md:text-3xl">
          স্কুল শিক্ষক মন্ডলী
        </h2>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {teachers.map((teacher, i) => (
            <StaffCard staff={teacher} key={i} />
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-8 flex justify-center">
          <Button>সকল শিক্ষকবৃন্দ →</Button>
        </div>
      </div>
    </section>
  )
}