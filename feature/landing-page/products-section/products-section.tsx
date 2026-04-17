import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { products } from "./products.data";

export function ProductsSection() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[#FAF6F0] py-16 sm:py-20 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,168,56,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(42,157,143,0.08),transparent_35%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#0F2137 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative mx-auto container px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-20">
          <span className="inline-flex items-center rounded-full border border-[#E8A838]/30 bg-[#E8A838]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#E8A838] shadow-sm backdrop-blur-sm sm:px-5 sm:text-sm">
            Our Solutions
          </span>

          <h2 className="mt-6 font-serif text-3xl font-extrabold tracking-tight text-[#0F2137] sm:mt-8 sm:text-5xl lg:text-6xl">
            Products Built for{" "}
            <span className="bg-gradient-to-br from-[#E8A838] to-[#c78b27] bg-clip-text pr-1 text-transparent italic sm:pr-2">
              Independence
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#5A6779] sm:mt-6 sm:text-lg lg:text-xl">
            Innovative assistive technology thoughtfully designed for safer,
            smarter, and more confident everyday movement.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-6xl gap-8 sm:gap-10 lg:gap-16">
          {products.map((product, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={product.name}
                className={`group overflow-hidden rounded-[1.75rem] border border-slate-100 bg-white shadow-lg shadow-[#0F2137]/5 sm:rounded-[2rem] lg:flex lg:flex-row ${
                  isReverse ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden sm:h-72 lg:h-auto lg:w-[45%] lg:shrink-0">
                  <div
                    className="absolute inset-0 z-10 opacity-20 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-40"
                    style={{ backgroundColor: product.accent }}
                  />
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/35 via-transparent to-transparent lg:bg-gradient-to-r" />
                </div>

                {/* Content */}
                <div className="relative flex flex-1 flex-col p-5 sm:p-8 lg:p-14">
                  <div
                    className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full opacity-20 blur-[70px] transition-opacity duration-500 group-hover:opacity-35"
                    style={{ background: product.accent }}
                  />

                  <div className="mb-4 sm:mb-6">
                    <span
                      className="inline-flex rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] sm:px-4 sm:text-xs"
                      style={{
                        background: `${product.accent}15`,
                        color: product.accent,
                      }}
                    >
                      {product.eyebrow}
                    </span>

                    <h3 className="mt-3 font-serif text-2xl font-bold tracking-tight text-[#0F2137] sm:mt-4 sm:text-3xl lg:text-4xl">
                      {product.name}
                    </h3>
                  </div>

                  <p className="mb-6 text-sm leading-relaxed text-[#5A6779] sm:mb-8 sm:text-base lg:text-lg">
                    {product.description}
                  </p>

                  {/* Tags */}
                  <div className="mb-7 flex flex-wrap gap-2 sm:mb-8 sm:gap-2.5 lg:mb-10">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border px-2.5 py-1 text-xs font-medium sm:px-3 sm:text-sm"
                        style={{
                          borderColor: `${product.accent}30`,
                          color: "#3E4A5A",
                          backgroundColor: `${product.accent}08`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-7 grid gap-3 sm:mb-8 sm:gap-x-6 sm:gap-y-4 md:grid-cols-2 lg:mb-10">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <span
                          className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                          style={{ background: product.accent }}
                        >
                          <Check
                            className="h-3 w-3 text-white"
                            strokeWidth={3}
                          />
                        </span>
                        <span className="text-sm font-medium leading-relaxed text-[#4A5568]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto border-t border-slate-100 pt-6 sm:pt-8">
                    <Link
                      href={product.link}
                      className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0F2137] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:w-auto sm:px-8"
                    >
                      <span>Explore Details</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
