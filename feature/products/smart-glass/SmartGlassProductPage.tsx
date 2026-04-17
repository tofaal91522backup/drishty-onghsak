import ProductSmartGlass from "./ProductSmartGlass";

const SmartGlassProductPage = () => {
  return (
    <section className="relative overflow-hidden bg-[#FAF6F0] py-16 sm:py-20 lg:py-24 ">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,168,56,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(42,157,143,0.12),transparent_30%)]" />
        <div className="absolute -top-20 right-0 h-[22rem] w-[22rem] rounded-full bg-[#E8A838]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[20rem] w-[20rem] rounded-full bg-[#2A9D8F]/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#0F2137_1px,transparent_1px),linear-gradient(to_bottom,#0F2137_1px,transparent_1px)] [background-size:34px_34px] sm:[background-size:42px_42px]" />
      </div>
      <div className="z-10 relative">
        <ProductSmartGlass/>
      </div>
    </section>
  );
};

export default SmartGlassProductPage;
