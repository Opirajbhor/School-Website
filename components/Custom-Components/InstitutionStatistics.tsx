import React from "react";

interface InstitutionStat {
  value: string;
  label: string;
}

const stats: InstitutionStat[] = [
  { value: "৫২০", label: "সর্বোমোট শিক্ষার্থী" },
  { value: "২০", label: "শিক্ষক/শিক্ষিকা" },
  { value: "৪", label: "অফিশ কর্মচারী" },
  { value: "১৫", label: "সর্বোমোট কক্ষ" },
  { value: "২", label: "বিদ্যালয় ভবন" },
];

const InstitutionStatistics = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container px-4">
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-bold whitespace-nowrap text-foreground">
            প্রতিষ্ঠানের পরিসংখ্যান
          </h2>
          <div className="h-[1px] w-full bg-border" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center aspect-square rounded-full border border-border bg-card transition-all hover:border-primary hover:shadow-md p-6"
            >
              <span className="text-4xl font-bold text-primary mb-2">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-foreground text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstitutionStatistics;