import React, { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';

// بيانات التفاصيل وتوحيد مسارات الصور الأساسية والمعرض
const caseStudiesData = [
  {
    id: 1,
    title: "Industrial Facility Scan to Revit Services",
    subtitle: "LOD 350 Industrial Scan to Revit Modeling",
    category: "Scan to BIM",
    location: "Saudi Arabia",
    client: "Industrial Solutions Co.",
    duration: "3 Weeks",
    software: "Autodesk Revit, CloudCompare, PointCab",
    description: "Converted high-density point cloud data into precise Architectural & Structural Revit BIM models for facility expansion and clash detection.",
    image: "/images/CaseStudy/images.png",
    gallery: [
      "/images/CaseStudy/images.png",
      "/images/service-5.png",
      "/images/service-3.png",
      "/images/service-2.png",
      "/images/service-1.png",
      "/images/scan-data.png",
      "/images/scan-banner.png",
      "/images/scan-data.png",

    ]
  },
  {
    id: 2,
    title: "Urban Utility GIS & Spatial Mapping",
    category: "GIS & Spatial",
    location: "Egypt",
    client: "National Infrastructure Dept.",
    duration: "6 Weeks",
    software: "ArcGIS Pro, Civil 3D, PostGIS",
    description: "Developed comprehensive spatial database schema and network topology for large-scale infrastructure and electrical utilities.",
    image: "/images/CaseStudy/images.png",
    gallery: [
      "/images/CaseStudy/images.png",
      "/images/CaseStudy/images.png",
      "/images/CaseStudy/images.png",
      "/images/CaseStudy/images.png"
    ]
  },
  {
    id: 3,
    title: "Heritage Commercial Building Reconstruction",
    subtitle: "As-Built 3D Laser Scan to BIM",
    category: "3D Modeling",
    location: "UAE",
    client: "Heritage Architectural Group",
    duration: "4 Weeks",
    software: "Autodesk Revit, Leica Cyclone",
    description: "Captured complex architectural details using 3D laser scanning to build an accurate LOD 300 Revit model for restoration.",
    image: "/images/CaseStudy/images.png",
    gallery: [
      "/images/CaseStudy/images.png",
      "/images/CaseStudy/images.png",
      "/images/CaseStudy/images.png"
    ]
  },
  {
    id: 4,
    title: "Point Cloud to CAD Drafting & MEP Modeling",
    subtitle: "Scan to CAD Conversion",
    category: "CAD Conversion",
    location: "Germany",
    client: "Engineering Consultancy",
    duration: "2 Weeks",
    software: "AutoCAD, Revit MEP",
    description: "Processed raw point cloud files to generate detailed 2D CAD architectural drawings and 3D MEP routing models.",
    image: "/images/CaseStudy/images.png",
    gallery: [
      "/images/CaseStudy/images.png",
      "/images/CaseStudy/images.png",
      "/images/CaseStudy/images.png"
    ]
  },
  {
    id: 5,
    title: "Digital Twin Integration for Smart Infrastructure",
    category: "Digital Twin & GIS",
    location: "Saudi Arabia",
    client: "Smart Cities Authority",
    duration: "8 Weeks",
    software: "ArcGIS Online, Revit, Unity",
    description: "Integrated 3D elevation surface models with GIS spatial layers for smart site monitoring and facility management.",
    image: "/images/CaseStudy/images.png",
    gallery: [
      "/images/CaseStudy/images.png",
      "/images/CaseStudy/images.png",
      "/images/CaseStudy/images.png"
    ]
  },
  {
    id: 6,
    title: "Residential Complex Renovation As-Built",
    subtitle: "LOD 300 Architectural BIM",
    category: "Scan to BIM",
    location: "United Kingdom",
    client: "Residential Developers Ltd.",
    duration: "3 Weeks",
    software: "Autodesk Revit, Faro Scene",
    description: "Delivered accurate as-built BIM models from laser scans to help architects eliminate site clashes during renovation.",
    image: "/images/CaseStudy/images.png",
    gallery: [
      "/images/CaseStudy/images.png",
      "/images/CaseStudy/images.png"
    ]
  }
];

export default function CaseStudyDetail() {
  const { id } = useParams();
  const project = caseStudiesData.find((p) => p.id === parseInt(id));

  // التحكم في حالة التكبير والنافذة المفتوحة
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // مرجع للتحكم في التمرير الأفقي للسلايدر
  const sliderRef = useRef(null);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Project Not Found</h2>
        <p className="text-gray-500 text-sm mb-6">The project you are looking for does not exist.</p>
        <Link to="/case-studies" className="bg-brandRed text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-red-700 transition">
          Back to Case Studies
        </Link>
      </div>
    );
  }

  // دوال تمرير معرض الصور السريع في الصفحة
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  // دوال التنقل داخل الـ Lightbox المفتوح
  const handleLightboxPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? project.gallery.length - 1 : prev - 1));
  };

  const handleLightboxNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === project.gallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative bg-brandNavy text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/case-studies" className="text-brandRed text-xs font-bold uppercase tracking-wider mb-4 inline-flex items-center gap-1 hover:underline">
            ← Back to All Case Studies
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">{project.title}</h1>
          <p className="text-gray-300 text-sm font-light">
            {project.subtitle || project.category} • 📍 {project.location}
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 2. PROJECT OVERVIEW & SPECS */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 mb-12">
          {/* الصورة الأساسية الموحدة للمشروع */}
          <div className="w-full h-80 sm:h-96 rounded-xl overflow-hidden mb-8 border border-gray-100 bg-neutral-900">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-gray-50 rounded-xl mb-8 border border-gray-100 text-xs sm:text-sm">
            <div>
              <span className="block text-gray-400 font-medium mb-1">Category</span>
              <span className="font-bold text-brandNavy">{project.category}</span>
            </div>
            <div>
              <span className="block text-gray-400 font-medium mb-1">Location</span>
              <span className="font-bold text-brandNavy">{project.location}</span>
            </div>
            <div>
              <span className="block text-gray-400 font-medium mb-1">Duration</span>
              <span className="font-bold text-brandNavy">{project.duration}</span>
            </div>
            <div>
              <span className="block text-gray-400 font-medium mb-1">Software Used</span>
              <span className="font-bold text-brandNavy">{project.software}</span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Project Description</h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* 3. PROJECT GALLERY SECTION (سلايدر أفقي بالأسهم مثل الفيديو تماماً) */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="mb-12 relative">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
                Project <span className="text-brandRed">Gallery</span>
              </h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">
                Photos and model views from this project. Click any image to view in full screen.
              </p>
            </div>

            {/* حاوي السلايدر مع أسهم التنقل */}
            <div className="relative group/gallery px-4">
              {/* سهم التنقل لليسار */}
              <button 
                onClick={scrollLeft}
                className="absolute -left-2 sm:left-1 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-brandRed hover:text-white text-gray-800 w-11 h-11 rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-lg transition-all"
                aria-label="Previous image"
              >
                ❮
              </button>

              {/* معرض الصور المنساب أفقياً */}
              <div 
                ref={sliderRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-4 px-2"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {project.gallery.map((imgUrl, index) => (
                  <div 
                    key={index}
                    onClick={() => setLightboxIndex(index)}
                    className="flex-none w-72 sm:w-80 h-56 bg-neutral-900 rounded-2xl overflow-hidden shadow-md cursor-pointer border border-gray-200/80 hover:shadow-xl transition-all duration-300 relative group"
                  >
                    <img 
                      src={imgUrl} 
                      alt={`Project view ${index + 1}`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-brandNavy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white/90 backdrop-blur-sm text-brandNavy font-bold text-xs px-4 py-2 rounded-full shadow">
                        🔍 Open View
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* سهم التنقل لليمين */}
              <button 
                onClick={scrollRight}
                className="absolute -right-2 sm:right-1 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-brandRed hover:text-white text-gray-800 w-11 h-11 rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-lg transition-all"
                aria-label="Next image"
              >
                ❯
              </button>
            </div>
          </section>
        )}

        {/* 4. LIGHTBOX MODAL FULLSCREEN (فتح وإغلاق الصورة والتنقل المباشر) */}
        {lightboxIndex !== null && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 select-none"
            onClick={() => setLightboxIndex(null)}
          >
            {/* زر الإغلاق */}
            <button 
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-brandRed text-white w-10 h-10 rounded-full font-bold flex items-center justify-center text-lg transition z-50"
            >
              ✕
            </button>

            {/* مؤشر العداد (مثل 1/5) */}
            <div className="absolute top-4 left-4 text-white/80 text-xs font-semibold bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
              {lightboxIndex + 1} / {project.gallery.length}
            </div>

            {/* سهم السابق داخل النافذة */}
            <button 
              onClick={handleLightboxPrev}
              className="absolute left-4 sm:left-8 bg-white/10 hover:bg-brandRed text-white w-12 h-12 rounded-full flex items-center justify-center text-xl transition border border-white/20 shadow-lg z-50"
            >
              ❮
            </button>

            {/* الصورة المكبرة */}
            <div className="relative max-w-5xl w-full flex flex-col items-center justify-center px-10">
              <img 
                src={project.gallery[lightboxIndex]} 
                alt="Enlarged view" 
                className="max-h-[82vh] w-auto object-contain rounded-xl shadow-2xl border border-white/10"
              />
            </div>

            {/* سهم التالي داخل النافذة */}
            <button 
              onClick={handleLightboxNext}
              className="absolute right-4 sm:right-8 bg-white/10 hover:bg-brandRed text-white w-12 h-12 rounded-full flex items-center justify-center text-xl transition border border-white/20 shadow-lg z-50"
            >
              ❯
            </button>
          </div>
        )}

        {/* 5. CTA SECTION */}
        <div className="bg-brandNavy text-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="relative z-10">
            <h4 className="text-xl font-bold mb-1">Need a similar solution for your site?</h4>
            <p className="text-xs text-gray-300">Submit your point cloud or CAD requirements for an evaluation.</p>
          </div>
          <Link to="/contact" className="relative z-10 bg-brandRed hover:bg-red-600 px-6 py-3 rounded-xl text-sm font-bold whitespace-nowrap transition shadow-md">
            Get a Free Quote
          </Link>
        </div>
      </main>
    </div>
  );
}