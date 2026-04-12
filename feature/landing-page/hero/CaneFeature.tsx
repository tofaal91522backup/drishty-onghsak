const items = [
  "Obstacle detection",
  "Voice guidance",
  "Built for real streets",
];

const CaneFeature = () => {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:mt-10 lg:justify-start">
      {items.map((item) => (
        <div
          key={item}
          className="rounded-full border border-[#0F2137]/10 bg-white/80 px-4 py-2.5 text-xs font-medium text-[#1F2A37] shadow-[0_8px_20px_rgba(15,33,55,0.06)] backdrop-blur sm:px-5 sm:text-sm"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default CaneFeature;
