import StuffCard from "@/components/Custom-Components/Stuff-Section/StuffCard"
import React from "react"

const Teachers = () => {
  const teachers = [
    {
      name: "আব্দুল্লাহ আল নোমান",
      role: "সিনিয়র বাংলা শিক্ষক",
      image: "/t1.jpg",
    },
    {
      name: "মাহবুব সরকার",
      role: "সিনিয়র ইংরেজি শিক্ষক",
      image: "/t2.jpg",
    },
    {
      name: "সোনিয়া আক্তার",
      role: "গণিত শিক্ষিকা",
      image: "/t3.jpg",
    },
    {
      name: "তাসনিম জারা শাওন",
      role: "সিনিয়র বিজ্ঞান শিক্ষিকা",
      image: "/t4.jpg",
    },
    {
      name: "সোনিয়া আক্তার",
      role: "গণিত শিক্ষিকা",
      image: "/t3.jpg",
    },
    {
      name: "তাসনিম জারা শাওন",
      role: "সিনিয়র বিজ্ঞান শিক্ষিকা",
      image: "/t4.jpg",
    },
    {
      name: "সোনিয়া আক্তার",
      role: "গণিত শিক্ষিকা",
      image: "/t3.jpg",
    },
    {
      name: "তাসনিম জারা শাওন",
      role: "সিনিয়র বিজ্ঞান শিক্ষিকা",
      image: "/t4.jpg",
    },
    {
      name: "সোনিয়া আক্তার",
      role: "গণিত শিক্ষিকা",
      image: "/t3.jpg",
    },
    {
      name: "তাসনিম জারা শাওন",
      role: "সিনিয়র বিজ্ঞান শিক্ষিকা",
      image: "/t4.jpg",
    },
    {
      name: "সোনিয়া আক্তার",
      role: "গণিত শিক্ষিকা",
      image: "/t3.jpg",
    },
    {
      name: "তাসনিম জারা শাওন",
      role: "সিনিয়র বিজ্ঞান শিক্ষিকা",
      image: "/t4.jpg",
    },
    {
      name: "সোনিয়া আক্তার",
      role: "গণিত শিক্ষিকা",
      image: "/t3.jpg",
    },
    {
      name: "তাসনিম জারা শাওন",
      role: "সিনিয়র বিজ্ঞান শিক্ষিকা",
      image: "/t4.jpg",
    },
    {
      name: "সোনিয়া আক্তার",
      role: "গণিত শিক্ষিকা",
      image: "/t3.jpg",
    },
    {
      name: "তাসনিম জারা শাওন",
      role: "সিনিয়র বিজ্ঞান শিক্ষিকা",
      image: "/t4.jpg",
    },
    {
      name: "সোনিয়া আক্তার",
      role: "গণিত শিক্ষিকা",
      image: "/t3.jpg",
    },
    {
      name: "তাসনিম জারা শাওন",
      role: "সিনিয়র বিজ্ঞান শিক্ষিকা",
      image: "/t4.jpg",
    },
    {
      name: "সোনিয়া আক্তার",
      role: "গণিত শিক্ষিকা",
      image: "/t3.jpg",
    },
    {
      name: "তাসনিম জারা শাওন",
      role: "সিনিয়র বিজ্ঞান শিক্ষিকা",
      image: "/t4.jpg",
    },
    {
      name: "সোনিয়া আক্তার",
      role: "গণিত শিক্ষিকা",
      image: "/t3.jpg",
    },
    {
      name: "তাসনিম জারা শাওন",
      role: "সিনিয়র বিজ্ঞান শিক্ষিকা",
      image: "/t4.jpg",
    },
  ]
  return (
    <div>
      {/* Header */}
      <h2 className="my-8 text-center text-2xl font-bold md:text-3xl">
        স্কুল শিক্ষক মন্ডলী
      </h2>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {teachers.map((teacher, i) => (
          <StuffCard stuff={teacher} key={i} />
        ))}
      </div>
    </div>
  )
}

export default Teachers
