import { Linkedin } from "lucide-react";
import Image from "next/image";
import { TeamCardProps } from "./teamMembers.data";
import Link from "next/link";

type Props = TeamCardProps & {
  index?: number;
};

const TeamCard = ({
  motto,
  name,
  designation,
  description,
  image,
  linkedin,
  right = false,
  index = 0,
}: Props) => {
  return (
    <article className="group relative overflow-hidden rounded-[32px] border border-[#E8A838]/20 bg-[#f0faff] p-[1px] shadow-[0_20px_60px_rgba(15,33,55,0.08)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:shadow-[0_25px_80px_rgba(15,33,55,0.12)]">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative rounded-[31px]  p-5 sm:p-7 lg:p-8">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
          <div
            className={`relative lg:col-span-5 ${
              right ? "lg:order-2" : "lg:order-1"
            }`}
          >
            

            <div className="relative aspect-[4/4.6] overflow-hidden rounded-[28px]">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover "
                sizes="(max-width: 1024px) 100vw, 340px"
              />
            </div>

            <div className="pointer-events-none absolute inset-x-6 bottom-4 h-20 rounded-full bg-[#E8A838]/20 blur-2xl" />
          </div>

          <div
            className={`relative lg:col-span-7 ${
              right ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <div className="space-y-5">
              <h3 className="max-w-2xl text-lg font-semibold leading-[1.7] text-[#334155] sm:text-xl">
                “{motto}”
              </h3>

              <div className="space-y-3">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-[#0F2137] sm:text-3xl lg:text-4xl">
                    {name}
                  </h2>
                  <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-[#E8A838] to-[#2A9D8F]" />
                </div>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm sm:text-base">
                  <span className="font-semibold text-[#E8A838]">
                    {designation}
                  </span>

                  {linkedin && (
                    <Link
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[#0F2137]/10 bg-white/80 px-3 py-1.5 text-sm font-medium text-[#475569] transition hover:border-[#0F2137]/20 hover:text-[#0F2137]"
                    >
                      <Linkedin size={15} />
                      LinkedIn
                    </Link>
                  )}
                </div>
              </div>

              <p className="max-w-2xl text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TeamCard;
