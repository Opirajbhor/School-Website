"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail} from "lucide-react";

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
];

export default function TeacherSection() {
  return (
    <section className="w-full py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          স্কুল শিক্ষক মন্ডলী
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {teachers.map((teacher, i) => (
            <Card
              key={i}
              className="flex flex-col md:flex-row items-center gap-4 p-4 rounded-xl shadow-sm"
            >
              {/* Image */}
              <div className="relative w-40 h-40 rounded-xl overflow-hidden">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex-1 space-y-2">
                <h3 className="font-semibold text-lg">
                  {teacher.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  ({teacher.role})
                </p>

                {/* Icons */}
                <div className="flex gap-2 pt-2">
                  <Button size="icon" variant="secondary">
                    <Phone size={16} />
                  </Button>
                  <Button size="icon" variant="secondary">
                    <Mail size={16} />
                  </Button>
                  <Button size="icon" variant="secondary">
                    <Mail size={16} />
                  </Button>
                  <Button size="icon" variant="secondary">
                    <Mail size={16} />
                  </Button>
                </div>

                {/* Button */}
                <Button variant="outline" className="mt-2">
                  বিস্তারিত →
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex justify-center mt-8">
          <Button>
            সকল শিক্ষকবৃন্দ →
          </Button>
        </div>

      </div>
    </section>
  );
}