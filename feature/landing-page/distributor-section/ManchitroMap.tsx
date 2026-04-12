"use client";

import { Check } from "lucide-react";
import { Manchitro } from "manchitro";

type ManchitroMapProps = {
  className?: string;
  innerClassName?: string;
  mapClassName?: string;
};

const ManchitroMap = ({
  className = "",
  innerClassName = "",
  mapClassName = "",
}: ManchitroMapProps) => {
  return (
    <div className={`relative ${className}`}>
      <div className="relative overflow-hidden rounded-[2rem] border border-white/50 bg-white/50 p-2 shadow-xl shadow-[#0F2137]/10 backdrop-blur-xl lg:rounded-[2.5rem]">
        <div
          className={`relative flex w-full items-center justify-center rounded-[1.5rem] bg-[#FAF6F0] p-3 shadow-inner lg:rounded-[2rem] lg:p-6 ${innerClassName}`}
        >
          <Manchitro
            items={[
              {
                id: "1",
                place: "Sylhet",
              },
              {
                id: "2",
                place: "Khulna",
              },
              {
                id: "3",
                place: "Dhaka",
              },
              {
                id: "4",
                place: "Sylhet",
              },
              {
                id: "5",
                place: "Chittagong",
              },
              {
                id: "6",
                place: "Panchagarh",
              },
              {
                id: "7",
                place: "Rajshahi",
              },
              {
                id: "8",
                place: "Barisal",
              },
              {
                id: "9",
                place: "Rangpur",
              },
              {
                id: "10",
                place: "Mymensingh",
              },
              {
                id: "11",
                place: "Comilla",
              },
              {
                id: "12",
                place: "Noakhali",
              },
              {
                id: "13",
                place: "Feni",
              },
              {
                id: "14",
                place: "Jessore",
              },
              {
                id: "15",
                place: "Bogra",
              },
              {
                id: "16",
                place: "Dinajpur",
              },
              {
                id: "17",
                place: "Pabna",
              },
              {
                id: "18",
                place: "Narayanganj",
              },
              {
                id: "19",
                place: "Gazipur",
              },
              {
                id: "20",
                place: "Narshingdi",
              },
              {
                id: "21",
                place: "Tangail",
              },
            ]}
            className={`mx-auto block h-full w-full object-contain drop-shadow-md ${mapClassName}`}
            colors={{
              base: "#F1E5C9",
              active: "#E8A838",
              selected: "#E8A838",
              stroke: "orange",
              selectedStroke: "#0F2137",
            }}
            renderSelected={(district) => (
              <div className="absolute top-2 right-2  text-[#E8A838]  rounded-lg  font-medium">
                {district}
              </div>
            )}
          />
        </div>
      </div>

      <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-[#E8A838]/20 to-[#2A9D8F]/20 opacity-50 blur-2xl lg:-inset-6 lg:rounded-[3rem]" />
    </div>
  );
};

export default ManchitroMap;
