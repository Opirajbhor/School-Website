"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section className="w-full py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 relative">

        {/* Image */}
        <div className="relative w-full md:w-[60%] h-[450px] rounded-xl overflow-hidden">
          <Image
            src="/school.jpg"
            alt="school"
            fill
            className="object-cover"
          />

          {/* dark overlay bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Card */}
        <div className="relative md:absolute md:top-12 md:right-0 w-full md:w-[55%] mt-6 md:mt-0">
          <div className="bg-card text-card-foreground rounded-xl shadow-lg p-6 md:p-8 space-y-4">

            <h2 className="text-2xl md:text-3xl font-bold">
              প্রতিষ্ঠান সম্পর্কে
            </h2>

            <div className="w-16 h-1 bg-primary rounded-full" />

            <p className="text-muted-foreground text-sm leading-relaxed">
              এক্সওয়াইজেড স্কুল এবং কলেজ এর অতীত গৌরবোজ্জ্বল বর্তমান প্রশাসন।
              ২০২৩ ইংরেজির ২০ জানুয়ারি এক্সওয়াইজেড স্কুল এবং কলেজ এর স্থানীয়
              ম্যানেজিং কমিটির তত্ত্বাবধানে পরিচালিত হয়। এক্সওয়াইজেড কর্তৃক
              প্রতিষ্ঠিত হওয়ার পর এটি একটি গভর্নমেন্ট স্কুল নামে পরিচিতি লাভ করে।
              ৩ জন বাংলাদেশী, ৩ জন ইংরেজ এবং ৩ জন মিশনারির উদ্যোগে একটি কমিটির
              অধীনে পরিচালিত হয়।
            </p>

            <Button>বিস্তারিত পড়ুন</Button>

          </div>
        </div>

      </div>
    </section>
  );
}