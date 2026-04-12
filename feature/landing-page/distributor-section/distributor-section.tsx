"use client";

import { ArrowRight, Check, MapPin, TrendingUp, Users } from "lucide-react";
import ManchitroMap from "./ManchitroMap";

const stats = [
  { value: "65", label: "Districts", icon: MapPin },
  { value: "500+", label: "Devices Given", icon: TrendingUp },
  { value: "95%", label: "Retention", icon: Users },
];

const benefits = [
  "Competitive commission structure",
  "Full training and certification",
  "Marketing materials provided",
  "Dedicated regional support",
  "Exclusive territory rights",
  "Monthly performance bonuses",
];

export function DistributorSection() {
  return (
    <section className="relative overflow-hidden bg-[#FAF6F0] py-20 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,168,56,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(42,157,143,0.06),transparent_35%)]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(#0F2137 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative mx-auto container px-4 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="w-full">
            {/* TOP CONTENT */}
            <div className="mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left">
              <div className="inline-flex items-center justify-center rounded-full border border-[#E8A838]/25 bg-[#E8A838]/10 px-4 py-2 text-sm font-semibold tracking-wide text-[#E8A838]">
                Join Our Network
              </div>

              <h2 className="mt-5 font-serif text-3xl font-extrabold leading-tight tracking-tight text-[#0F2137] sm:text-4xl lg:text-5xl">
                Become a{" "}
                <span className="bg-gradient-to-r from-[#E8A838] to-[#c78b27] bg-clip-text text-transparent italic">
                  District Ambassador
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#5A6779] sm:text-lg lg:mx-0">
                Join our mission to bring assistive technology across Bangladesh.
                Build a meaningful, profitable career while making a direct impact
                in your own region.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-slate-100 bg-white p-3 text-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-1 sm:p-5"
                  >
                    <stat.icon
                      className="mx-auto mb-2 h-5 w-5 text-[#E8A838] sm:mb-3 sm:h-6 sm:w-6"
                      strokeWidth={2.5}
                    />
                    <p className="text-xl font-bold text-[#0F2137] sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-[#6B7280] sm:text-xs">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* MOBILE MAP */}
            <div className="mx-auto w-full max-w-2xl lg:hidden">
              <ManchitroMap
                className="my-8"
            
              />
            </div>

            {/* BOTTOM CONTENT */}
            <div className="mx-auto w-full max-w-2xl lg:mx-0">
              <div className="mt-10 lg:mt-12">
                <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-[#0F2137] sm:text-sm">
                  Ambassador Benefits
                </h3>

                <div className="grid gap-3 sm:grid-cols-2">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2A9D8F]/15">
                        <Check
                          className="h-3 w-3 text-[#2A9D8F]"
                          strokeWidth={3}
                        />
                      </span>
                      <span className="text-sm font-medium leading-relaxed text-[#4A5568]">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 lg:mt-12">
                <a
                  href="#apply"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0F2137] px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#E8A838] hover:shadow-lg hover:shadow-[#E8A838]/20 sm:w-auto sm:px-8 sm:py-4"
                >
                  Apply for Your District
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          {/* DESKTOP MAP */}
          <div className="hidden w-full lg:block">
            <ManchitroMap
              className="relative ml-auto w-full max-w-[560px]"
              innerClassName="aspect-[4/5] min-h-[520px]"
              mapClassName="max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}