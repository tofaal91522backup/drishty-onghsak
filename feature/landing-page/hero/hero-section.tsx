import Link from "next/link";
import CaneFeature from "./CaneFeature";
import RightModel from "./RightModel";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#FAF6F0] pt-20 pb-16 lg:min-h-screen lg:pt-24 lg:pb-20">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,168,104,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(35,125,161,0.12),transparent_28%)]" />
        <div className="absolute -top-24 right-0 h-[20rem] w-[20rem] rounded-full bg-[#E8A838]/10 blur-3xl sm:h-[24rem] sm:w-[24rem] lg:h-[28rem] lg:w-[28rem]" />
        <div className="absolute bottom-0 left-0 h-[18rem] w-[18rem] rounded-full bg-[#2A9D8F]/10 blur-3xl sm:h-[20rem] sm:w-[20rem] lg:h-[24rem] lg:w-[24rem]" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#0B1D39_1px,transparent_1px),linear-gradient(to_bottom,#0B1D39_1px,transparent_1px)] [background-size:40px_40px] lg:[background-size:56px_56px]" />
      </div>

      <div className="relative mx-auto container px-4 sm:px-6 lg:min-h-[calc(100vh-6rem)] lg:px-12">
        <div className="relative grid items-center gap-12 lg:min-h-[calc(100vh-6rem)] lg:grid-cols-12 lg:gap-0">
          <div className="relative z-20 pt-6 text-center lg:col-span-4 lg:self-start lg:pt-16 lg:text-left">
            <h1 className="mx-auto mt-6 max-w-[10ch] font-serif text-5xl font-bold leading-[0.98] tracking-tight text-[#0F2137] sm:text-5xl lg:mx-0 lg:mt-7 lg:max-w-[8ch] lg:text-7xl xl:text-[5.3rem]">
              See beyond sight.
            </h1>

            <p className="mx-auto mt-5 max-w-md text-sm leading-[1.8] text-[#3E4A5A] sm:text-base lg:mx-0 lg:mt-7 lg:text-lg">
              Empowering visually impaired people with an intelligent smart cane
              experience designed to improve mobility, awareness, and confidence
              in everyday movement across Bangladesh.
            </p>

            {/* MOBILE MODEL */}
            <div className="mt-8 block lg:hidden">
              <RightModel />
              <CaneFeature />
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4 lg:mt-10 lg:justify-start">
              <Link
                href="/products/abhash-smart-cane"
                className="inline-flex min-h-[50px] w-full items-center justify-center rounded-full bg-[#cfac6e] px-7 py-3.5 text-sm font-semibold text-[#FAF6F0] shadow-[0_12px_30px_rgba(15,33,55,0.18)] transition-all duration-300 hover:-translate-y-0.5 sm:w-auto sm:min-h-[52px] sm:px-8 sm:text-base"
              >
                Pre-order Now
              </Link>

              <Link
                href="/about"
                className="inline-flex min-h-[50px] w-full items-center justify-center rounded-full border border-[#0F2137]/15 bg-white/75 px-7 py-3.5 text-sm font-semibold text-[#0F2137] shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 sm:w-auto sm:min-h-[52px] sm:px-8 sm:text-base"
              >
                Learn More
              </Link>
            </div>
            <div className="hidden lg:block">
              <CaneFeature />
            </div>
          </div>

          {/* DESKTOP MODEL */}
          <div className="hidden lg:col-span-8 lg:flex lg:justify-end">
            <RightModel />
          </div>
        </div>
      </div>
    </section>
  );
}
