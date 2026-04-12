const stats = [
  {
    value: "717+",
    label: "Active Users",
  },
  {
    value: "65",
    label: "District Ambassadors",
  },
  {
    value: "1st",
    label: "Patent Filed",
  },
  {
    value: "Robi",
    label: "Strategic Partner",
  },
];

export function StatsBar() {
  return (
    <section className="relative z-20 px-0 pt-10 pb-4 sm:px-6 lg:-mt-16 lg:px-8 lg:pt-0 lg:pb-0">
      <div className="mx-auto w-full max-w-7xl">
        {/* Mobile heading */}
        <div className="px-4 text-center sm:px-6 lg:hidden">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C59B52]">
            Our Impact
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold leading-tight text-[#0F2137]">
            Growing with every step
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#4B5563]">
            Real progress through community, accessibility, and innovation
            across Bangladesh.
          </p>
        </div>

        {/* Card */}
        <div className="mt-6 w-full overflow-hidden border-y border-[#0F2137]/8 bg-white/85 shadow-none backdrop-blur-xl sm:mt-8 sm:rounded-[2rem] sm:border sm:border-white/70 sm:shadow-[0_18px_50px_rgba(15,33,55,0.08)] lg:mt-0 lg:rounded-[2rem] lg:shadow-[0_24px_70px_rgba(15,33,55,0.08)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,168,56,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(42,157,143,0.08),transparent_28%)]" />

          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#E8A838]/70 to-transparent" />

          <div className="relative grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={[
                  "group relative px-4 py-6 text-center sm:px-6 sm:py-7 md:px-8 md:py-9",
                  "transition-all duration-300 hover:bg-white/40",
                  index !== stats.length - 1
                    ? "md:border-r md:border-[#0F2137]/8"
                    : "",
                  index < 2 ? "border-b border-[#0F2137]/8 md:border-b-0" : "",
                ].join(" ")}
              >
                <div className="absolute inset-x-6 bottom-0 h-[2px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-[#E8A838] to-[#2A9D8F] transition-transform duration-300 group-hover:scale-x-100" />

                <p className="font-serif text-[1.9rem] leading-none tracking-[-0.03em] text-[#0F2137] sm:text-[2.1rem] md:text-[2.6rem]">
                  {stat.value}
                </p>

                <p className="mt-2 text-xs font-medium tracking-[0.01em] text-[#4B5563] sm:text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}