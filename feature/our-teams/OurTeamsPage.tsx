import TeamCard from "./TeamCard";
import { teamMembers } from "./teamMembers.data";

export default function OurTeamsPage() {
  return (
    <section className="relative overflow-hidden bg-[#FAF6F0] py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,168,56,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(42,157,143,0.12),transparent_30%)]" />
        <div className="absolute -top-20 right-0 h-[22rem] w-[22rem] rounded-full bg-[#E8A838]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[20rem] w-[20rem] rounded-full bg-[#2A9D8F]/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#0F2137_1px,transparent_1px),linear-gradient(to_bottom,#0F2137_1px,transparent_1px)] [background-size:34px_34px] sm:[background-size:42px_42px]" />
      </div>

      <div className="relative mx-auto container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0F2137] sm:text-4xl lg:text-5xl">
            Meet the Visionaries Behind Drishti
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            A mission-driven team blending empathy, engineering, design, and
            research to build assistive technology that feels thoughtful,
            trustworthy, and empowering.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={`${member.name}-${index}`}
              {...member}
              right={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
