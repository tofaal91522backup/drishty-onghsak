import ModelViewer from "./ModelViewer";

const RightModel = () => {
  return (
    <div className="relative z-10 mx-auto flex aspect-square w-full max-w-[340px] items-center justify-center sm:max-w-[440px] lg:max-w-[680px] cursor-grab">
      <div className="absolute inset-0 scale-95 rounded-full bg-gradient-to-tr from-[#E8A838]/15 via-transparent to-[#2A9D8F]/15 blur-3xl" />

      <div className="absolute inset-1 rounded-full border-[3px] border-transparent border-t-[#E8A838] border-r-[#2A9D8F] border-b-[#0F2137] border-l-[#cfac6e] opacity-75 sm:inset-2 sm:border-[4px]" />

      <div className="absolute inset-4 rounded-full border border-[#0F2137]/10 border-dashed animate-[spin_40s_linear_infinite_reverse] sm:inset-6" />
      <div className="absolute inset-10 rounded-full border-[8px] border-white/60 shadow-[0_8px_32px_rgba(15,33,55,0.05)] sm:inset-14 sm:border-[10px]" />
      <div className="absolute inset-[2.9rem] rounded-full border border-[#0F2137]/5 sm:inset-[4.25rem]" />

      <div className="absolute inset-10 overflow-hidden rounded-full bg-[linear-gradient(135deg,#f8f2e8_0%,#f4ede2_52%,#edf4f3_100%)] shadow-inner sm:inset-14">
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_bottom,#0F2137_1px,transparent_1px)] [background-size:100%_4px]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(232,168,56,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(42,157,143,0.10),transparent_28%)]" />
      </div>

      <ModelViewer
        url="./hero-model/smartCane.glb"
        width="100%"
        height="100%"
        modelXOffset={0}
        modelYOffset={0}
        autoFrame
        enableMouseParallax
        enableHoverRotation
        environmentPreset="forest"
        fadeIn
        autoRotate
        autoRotateSpeed={0.3}
        showScreenshotButton={false}
      />

      <div className="absolute bottom-1 right-1 z-30 w-[180px] rounded-2xl border border-white/80 bg-white/85 px-4 py-3 shadow-xl backdrop-blur sm:bottom-3 sm:right-2 sm:w-[220px] sm:px-5 sm:py-4 lg:bottom-8 lg:right-2 lg:w-[250px] hidden lg:block">
        <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#0F2137]/45 sm:text-xs">
          Smart Feature
        </p>
        <p className="text-xs font-semibold text-[#0F2137] sm:text-sm lg:text-base">
          Real-time obstacle alert
        </p>
        <p className="mt-2 text-[11px] leading-5 text-[#3E4A5A] sm:text-xs sm:leading-6">
          Instant feedback helps users react faster and move more safely.
        </p>
      </div>
    </div>
  );
};

export default RightModel;
