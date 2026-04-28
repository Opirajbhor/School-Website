import React from "react";

interface StatisticsData {
  count: number;
  label: string;
  className: string;
}

const studentStats: StatisticsData[] = [
  { count: 120, label: "Total Students", className: "Class Ten" },
  { count: 95, label: "Total Students", className: "Class Nine" },
  { count: 80, label: "Total Students", className: "Class Eight" },
  { count: 160, label: "Total Students", className: "Class Seven" },
  { count: 109, label: "Total Students", className: "Class Six" },
];

const StudentStatistics = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container px-4">
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-bold whitespace-nowrap text-foreground">
            ছাত্র/ছাত্রীদের পরিসংখ্যান
          </h2>
          <div className="h-[1px] w-full bg-border" />
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {studentStats.map((stat, index) => (
            <div
              key={index}
              className="relative group flex flex-col items-center justify-center w-40 h-40 sm:w-48 sm:h-48 rounded-full border border-border transition-all duration-300 hover:border-primary hover:shadow-lg"
            >
              <div className="text-center space-y-1">
                <span className="block text-3xl sm:text-4xl font-extrabold text-primary">
                  {stat.count}
                </span>
                <p className="text-sm font-medium text-foreground leading-tight">
                  {stat.label}
                </p>
                <p className="text-sm text-muted-foreground italic">
                  {stat.className}
                </p>
              </div>
              
              {/* Optional: Subtle decorative rings matching the primary color */}
              <div className="absolute inset-2 rounded-full border border-primary/5 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentStatistics;