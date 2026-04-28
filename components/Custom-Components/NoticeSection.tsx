"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Megaphone, AlertCircle, ArrowRight } from "lucide-react";

const notices = [
  "আগামীকাল মহান স্বাধীনতা দিবস উপলক্ষে স্কুল এবং কলেজ বন্ধ থাকবে..",
  "২০২৪ ভর্তি সংক্রান্ত জরুরী বিজ্ঞপ্তি!",
  "সকল শ্রেণির ১ম সেমিস্টার পরীক্ষা রুটিন",
  "বেতন সংক্রান্ত জরুরী বিজ্ঞপ্তি!",
  "পহেলা বৈশাখ উপলক্ষে আগামীকাল স্কুল ও কলেজ বন্ধ থাকবে।",
];

export default function NoticeBoard() {
  return (
    <section className="w-50% py-16 bg-muted/40">
      <div className="max-w-3xl mx-auto px-4">

        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Megaphone className="text-destructive" />
          <h2 className="text-2xl font-bold">নোটিশ বোর্ড</h2>
        </div>

        {/* Notices */}
        <div className="space-y-4">
          {notices.map((notice, i) => (
            <Card
              key={i}
              className="flex items-center justify-between p-4 rounded-xl shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="bg-destructive/10 p-2 rounded-full">
                  <AlertCircle className="text-destructive" size={20} />
                </div>
                <p className="text-sm font-medium">{notice}</p>
              </div>

              <Button variant="secondary" size="sm">
                বিস্তারিত
              </Button>
            </Card>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center mt-6">
          <Button className="gap-2">
            সকল নোটিশ <ArrowRight size={16} />
          </Button>
        </div>

      </div>
    </section>
  );
}