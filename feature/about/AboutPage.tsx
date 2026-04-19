import Image from "next/image";
import { sections } from "./sections.data";

const AboutPage = () => {
  return (
    <section className="relative overflow-hidden bg-[#FAF6F0] py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,168,56,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(42,157,143,0.12),transparent_30%)]" />
        <div className="absolute -top-20 right-0 h-[22rem] w-[22rem] rounded-full bg-[#E8A838]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[20rem] w-[20rem] rounded-full bg-[#2A9D8F]/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#0F2137_1px,transparent_1px),linear-gradient(to_bottom,#0F2137_1px,transparent_1px)] [background-size:34px_34px] sm:[background-size:42px_42px]" />
      </div>

      <div className="relative container mx-auto px-4 ">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-[#0F2137] sm:text-5xl lg:text-6xl">
            Building a more inclusive future for the visually impaired
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Technology, empathy, and innovation working together to create
            freedom, confidence, and independence.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-6xl space-y-10 sm:mt-16 sm:space-y-12 lg:mt-20 lg:space-y-16">
          {sections.map((section, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={section.title}
                className="overflow-hidden rounded-[32px] border border-white/70 bg-white/80 shadow-[0_20px_60px_rgba(15,33,55,0.08)]"
              >
                <div className="grid lg:grid-cols-2">
                  <div
                    className={`relative min-h-[280px] sm:min-h-[360px] lg:min-h-full ${
                      isReversed ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2137]/35 via-[#0F2137]/10 to-transparent" />
                  </div>

                  <div
                    className={`flex items-center ${
                      isReversed ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="w-full p-6 sm:p-8 lg:p-10 xl:p-12">
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#E8A838]">
                        {section.label}
                      </p>

                      <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#0F2137] sm:text-3xl lg:text-4xl">
                        {section.title}
                      </h2>

                      <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#E8A838] to-[#2A9D8F]" />

                      <div className="mt-6 space-y-5">
                        {section.paragraphs.map((paragraph, idx) => (
                          <p
                            key={idx}
                            className="text-sm leading-7 text-[#475569] sm:text-base sm:leading-8"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
