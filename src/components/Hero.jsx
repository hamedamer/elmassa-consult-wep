export default function Hero() {
  return (
    <section id="home" className="relative bg-brandNavy text-white py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block bg-brandRed/20 text-brandRed border border-brandRed/30 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
            Next-Gen Spatial & Engineering Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Engineering Precision Meets <span className="text-brandRed">Digital Transformation</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
            From 3D Laser Scanning and Digital Twins to Multi-Disciplinary BIM & Land Surveying Solutions — We bridge physical assets with digital reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="\services" className="bg-brandRed hover:bg-red-600 text-white font-bold px-8 py-3.5 rounded-md text-center transition shadow-lg">
              Explore Our Services
            </a>
            <a href="\contact" className="border border-gray-400 hover:border-white text-white font-semibold px-8 py-3.5 rounded-md text-center transition">
              Request Proposal
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
