import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// مكون العداد المتحرك للتحكم بالسرعة لكل رقم منفصل
const AnimatedCounter = ({ targetNumber, suffix = '+', duration = 4000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(targetNumber, 10);
    const incrementTime = 50;
    const totalSteps = duration / incrementTime;
    const stepValue = end / totalSteps;

    const timer = setInterval(() => {
      start += stepValue;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [targetNumber, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

export default function About() {
  const coreValues = [
    {
      icon: 'fa-bullseye',
      title: 'Precision First',
      desc: 'Accuracy is the foundation of every model we create. We believe reliable data leads to confident decisions.'
    },
    {
      icon: 'fa-handshake',
      title: 'Customer Success',
      desc: 'Every engagement is built around understanding client objectives, project timelines, and long-term value.'
    },
    {
      icon: 'fa-award',
      title: 'Technical Excellence',
      desc: 'We continuously invest in advanced software, automation, and spatial GIS workflows to improve project outcomes.'
    },
    {
      icon: 'fa-shield-halved',
      title: 'Integrity',
      desc: 'Transparency, accountability, and ethical business practices guide every client relationship.'
    },
    {
      icon: 'fa-lightbulb',
      title: 'Innovation & Efficiency',
      desc: 'Leveraging AI-assisted workflows and smart automation to speed up delivery without sacrificing quality.'
    },
    {
      icon: 'fa-arrows-spin',
      title: 'Continuous Improvement',
      desc: 'Constantly refining our processes, adopting global standards, and upskilling our engineering talent.'
    }
  ];

  return (
    <div className="font-sans text-gray-800">

      {/* 1. HERO SECTION - خلفية كحلي منقطة */}
      <section className="relative bg-brandNavy text-white py-16 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            ABOUT <span className="text-brandRed">US</span>
          </h1>

          <p className="text-lg sm:text-xl font-medium text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
            Bridging Physical Assets and Digital Intelligence Through Millimeter Precision
          </p>

          <div className="flex justify-center items-center gap-6 text-xs sm:text-sm font-semibold text-gray-300">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brandRed"></span> Comprehensive
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brandRed"></span> Accurate
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brandRed"></span> Intuitive
            </span>
          </div>
        </div>
      </section>

      {/* 2. MAIN INTRO SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-brandNavy leading-tight mb-8">
            Trusted Global Experts in Scan to BIM, Point Cloud Modeling and Digital Building Documentation
          </h2>
          <div className="space-y-6 text-gray-600 text-sm sm:text-base leading-relaxed">
            <p>
              For over 10 years, we have helped AEC professionals and facility managers around the world convert complex reality capture data into precise BIM models that support renovations, retrofits, spatial management, and digital transformation initiatives.
            </p>
            <p>
              Our <strong className="text-brandNavy">Scan to BIM</strong> team specializes in converting point cloud data collected through terrestrial laser scanning, mobile LiDAR, and photogrammetry into highly detailed BIM models.
            </p>
            <p>
              Serving clients across the Middle East, Europe, and worldwide, we have successfully delivered over 100+ Scan to BIM projects ranging from residential buildings and commercial complexes to airports, infrastructure networks, and heritage structures.
            </p>
          </div>
        </div>
      </section>

      {/* 3. STATS SECTION */}
      <section className="relative bg-brandNavy text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">

            {/* 10+ Years */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-brandRed/50 transition-all duration-300">
              <div className="text-4xl sm:text-5xl font-black text-brandRed mb-2 font-mono">
                <AnimatedCounter targetNumber={10} suffix="+" duration={6000} />
              </div>
              <h3 className="text-lg font-bold mb-2">Years of Proven Experience</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Delivering engineering excellence and digital transformation solutions to global AEC teams.
              </p>
            </div>

            {/* 5+ Continents */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-brandRed/50 transition-all duration-300">
              <div className="text-4xl sm:text-5xl font-black text-brandRed mb-2 font-mono">
                <AnimatedCounter targetNumber={5} suffix="+" duration={6000} />
              </div>
              <h3 className="text-lg font-bold mb-2">Continents Served</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Supporting projects across Middle East, Europe, Asia, and worldwide.
              </p>
            </div>

            {/* 100+ Projects */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-brandRed/50 transition-all duration-300">
              <div className="text-4xl sm:text-5xl font-black text-brandRed mb-2 font-mono">
                <AnimatedCounter targetNumber={100} suffix="+" duration={4000} />
              </div>
              <h3 className="text-lg font-bold mb-2">Projects Delivered</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Successfully executing projects across residential, commercial, healthcare, industrial, and infrastructure sectors.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SPECIALIZED SERVICES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold text-brandRed uppercase tracking-widest block mb-2">
            WHAT WE OFFER
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brandNavy mb-4">
            Specialized Services Under Our Roof
          </h2>
          <p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-600 mb-12">
            Together, our specialized divisions create an integrated ecosystem that supports every stage of the building lifecycle—from concept and design to construction and facility management.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 'scan-to-bim',
                icon: 'fa-cubes',
                title: 'Scan to BIM',
                desc: 'Focused exclusively on Building Information Modeling, delivering Architectural, Structural, MEP BIM, Clash Detection, and Revit Modeling.'
              },
              {
                id: 'scan-to-cad',
                icon: 'fa-drafting-compass',
                title: 'Scan to CAD',
                desc: 'A leading provider of CAD drafting, conversion, architectural drafting, section generation, and engineering support.'
              },
              {
                id: 'gis-digital-twin',
                icon: 'fa-network-wired',
                title: 'GIS & Digital Twin',
                desc: 'Integrating BIM models into spatial GIS databases, utility tracing, and underground infrastructure digital twin environments.'
              },
              {
                id: '3d-laser-scanning',
                icon: 'fa-vector-square',
                title: '3D Laser Scanning',
                desc: 'Capturing high-density point cloud data with millimeter accuracy for heritage, industrial, and commercial structures.'
              },
              {
                id: 'mep-coordination',
                icon: 'fa-gears',
                title: 'MEP Coordination & Modeling',
                desc: 'Detailed Mechanical, Electrical, and Plumbing modeling with automated clash detection and spatial resolution.'
              },
              {
                id: 'as-built-documentation',
                icon: 'fa-file-contract',
                title: 'As-Built Documentation',
                desc: 'Comprehensive floor plans, elevations, cross-sections, and spatial database asset records for facility management.'
              }
            ].map((service) => (
              <div
                key={service.id}
                className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 text-left flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brandRed/10 text-brandRed group-hover:bg-brandRed group-hover:text-white flex items-center justify-center font-black text-xl mb-6 transition-all duration-300 transform group-hover:scale-110">
                    <i className={`fa-solid ${service.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-brandNavy mb-3 group-hover:text-brandRed transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                <Link
                  to={`/services`}
                  onClick={() => {
                    // السكرول للسيرفس المحددة عند الضغط إذا كنا في نفس الصفحة أو بعد الانتقال
                    setTimeout(() => {
                      const element = document.getElementById(service.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                  className="inline-flex items-center gap-2 text-xs font-bold text-brandRed uppercase tracking-wider hover:gap-3 transition-all duration-300 pt-4 border-t border-gray-100"
                >
                  <span>Learn More</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VISION & MISSION SECTION - فاصل بالمنحنيات المعمارية */}
      <section className="relative py-20 bg-white">

        {/* خط فاصل علوي رفيع مميز بلون البراند */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-transparent via-brandRed to-transparent opacity-80"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Our Vision Card */}
            <div className="relative bg-brandNavy text-white p-8 sm:p-10 rounded-3xl overflow-hidden shadow-2xl border border-brandNavy flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-brandRed/10 rounded-full blur-2xl group-hover:bg-brandRed/20 transition-all"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full border border-white/10 mb-8 backdrop-blur-sm">
                  <div className="w-8 h-8 rounded-full bg-brandRed text-white flex items-center justify-center text-sm">
                    <i className="fa-solid fa-eye"></i>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brandRed">Our Vision</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 leading-snug">
                  Leading the Global Reality-to-Digital Revolution
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  To become the most trusted Scan to BIM and Spatial Data partner worldwide by enabling smarter design, efficient construction, and intelligent asset management through accurate digital building documentation.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We envision a future where every existing structure is transformed into an intelligent digital asset that supports informed decision-making throughout its lifecycle.
                </p>
              </div>

              <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 font-mono">
                <span>GOAL 2030</span>
                <span className="text-brandRed">★ WORLDWIDE IMPACT</span>
              </div>
            </div>

            {/* Our Mission Card */}
            <div className="relative bg-white text-brandNavy p-8 sm:p-10 rounded-3xl shadow-2xl border-2 border-brandNavy/10 border-t-8 border-brandRed flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="inline-flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full border border-gray-200 mb-8">
                  <div className="w-8 h-8 rounded-full bg-brandNavy text-white flex items-center justify-center text-sm">
                    <i className="fa-solid fa-bullseye"></i>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brandNavy">Our Mission</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold mb-6 leading-snug text-brandNavy">
                  Delivering Millimeter Precision in Every Model
                </h3>

                <ul className="space-y-4 text-gray-700 text-sm leading-relaxed">
                  <li className="flex items-start gap-3 bg-gray-50 p-3.5 rounded-xl border border-gray-200/60 shadow-xs">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs shrink-0 mt-0.5">✓</span>
                    <span>Deliver highly accurate, reliable and standards-compliant Scan to BIM solutions to AEC professionals.</span>
                  </li>
                  <li className="flex items-start gap-3 bg-gray-50 p-3.5 rounded-xl border border-gray-200/60 shadow-xs">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs shrink-0 mt-0.5">✓</span>
                    <span>Transform complex point cloud data into intuitive and detailed BIM models with precision.</span>
                  </li>
                  <li className="flex items-start gap-3 bg-gray-50 p-3.5 rounded-xl border border-gray-200/60 shadow-xs">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs shrink-0 mt-0.5">✓</span>
                    <span>Accelerate renovation and retrofit project management through efficient digital workflows.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500 font-mono">
                <span>COMMITMENT</span>
                <span className="text-brandNavy font-bold">100% QUALITY GUARANTEED</span>
              </div>
            </div>

          </div>
        </div>

        {/* خط فاصل سفلي رفيع */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-transparent via-brandRed to-transparent opacity-80"></div>
      </section>

      {/* 6. CORE VALUES SECTION - تم تحويل الخلفية للون الفاتح وتنسيق الكروت بأسلوب متناسق مع الفوتر */}
      <section className="py-20 bg-gray-50 border-t border-gray-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold text-brandRed uppercase tracking-widest block mb-2">Our Foundation</span>
          <h2 className="text-3xl font-extrabold text-brandNavy mb-2">Our Core Values</h2>
          <p className="text-gray-600 text-sm mb-12">The principles that guide our decision-making, quality standards, and client partnerships.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {coreValues.map((value, idx) => (
              <div
                key={idx}
                className="group relative bg-white border border-gray-200/80 p-8 rounded-2xl shadow-xs transition-all duration-300 hover:-translate-y-2 hover:border-brandRed/50 hover:shadow-xl cursor-pointer overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brandRed/10 text-brandRed group-hover:bg-brandRed group-hover:text-white flex items-center justify-center text-xl mb-6 transition-all duration-300 transform group-hover:scale-110">
                    <i className={`fa-solid ${value.icon}`}></i>
                  </div>

                  <h4 className="font-bold text-lg mb-3 text-brandNavy group-hover:text-brandRed transition-colors duration-300">
                    {value.title}
                  </h4>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {value.desc}
                  </p>
                </div>

                <div className="mt-6 w-full h-1 bg-gray-100 group-hover:bg-brandRed transition-all duration-300 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}