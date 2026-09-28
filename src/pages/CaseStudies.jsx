import React from 'react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    id: 1,
    title: "Industrial Facility Scan to Revit Services",
    subtitle: "LOD 350 Industrial Scan to Revit Modeling",
    category: "Scan to BIM",
    location: "Saudi Arabia",
    description: "Converted high-density point cloud data into precise Architectural & Structural Revit BIM models for facility expansion.",
    image: `${import.meta.env.BASE_URL}images/CaseStudy/images.png`
  },
  {
    id: 2,
    title: "Urban Utility GIS & Spatial Mapping",
    category: "GIS & Spatial",
    location: "Egypt",
    description: "Developed comprehensive spatial database schema and network topology for large-scale infrastructure and electrical utilities.",
    image: `${import.meta.env.BASE_URL}images/CaseStudy/images.png`
  },
  {
    id: 3,
    title: "Heritage Commercial Building Reconstruction",
    subtitle: "As-Built 3D Laser Scan to BIM",
    category: "3D Modeling",
    location: "UAE",
    description: "Captured complex architectural details using 3D laser scanning to build an accurate LOD 300 Revit model for restoration.",
    image: `${import.meta.env.BASE_URL}images/CaseStudy/images.png`
  },
  {
    id: 4,
    title: "Point Cloud to CAD Drafting & MEP Modeling",
    subtitle: "Scan to CAD Conversion",
    category: "CAD Conversion",
    location: "Germany",
    description: "Processed raw point cloud files to generate detailed 2D CAD architectural drawings and 3D MEP routing models.",
    image: `${import.meta.env.BASE_URL}images/CaseStudy/images.png`
  },
  {
    id: 5,
    title: "Digital Twin Integration for Smart Infrastructure",
    category: "Digital Twin & GIS",
    location: "Saudi Arabia",
    description: "Integrated 3D elevation surface models with GIS spatial layers for smart site monitoring and facility management.",
    image: `${import.meta.env.BASE_URL}images/CaseStudy/images.png`
  },
  {
    id: 6,
    title: "Residential Complex Renovation As-Built",
    subtitle: "LOD 300 Architectural BIM",
    category: "Scan to BIM",
    location: "United Kingdom",
    description: "Delivered accurate as-built BIM models from laser scans to help architects eliminate site clashes during renovation.",
    image: `${import.meta.env.BASE_URL}images/CaseStudy/images.png`
  }
];

export default function CaseStudies() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="relative bg-brandNavy text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block bg-brandRed/20 text-brandRed border border-brandRed/30 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Our Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
            Case <span className="text-brandRed">Studies</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Explore our featured Scan to BIM, GIS mapping, Point Cloud processing, and 3D modeling projects delivered with high accuracy.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col group"
            >
              <div className="h-52 w-full bg-neutral-900 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                
                <span className="absolute top-3 left-3 bg-brandNavy/90 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full border border-white/10">
                  {project.category}
                </span>

                <span className="absolute top-3 right-3 bg-neutral-900/80 backdrop-blur-md text-gray-300 text-[10px] font-medium px-2.5 py-1 rounded-md border border-white/10">
                  📍 {project.location}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brandRed transition-colors">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-xs font-semibold text-brandRed mb-3 uppercase tracking-wider">
                      {project.subtitle}
                    </p>
                  )}
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <Link 
                  to={`/CaseStudyDetail/${project.id}`} 
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-gray-100 text-xs font-bold text-brandNavy hover:text-brandRed transition-colors"
                >
                  <span>View Project Details</span>
                  <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-16 bg-brandNavy text-white rounded-3xl p-8 sm:p-12 text-center flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          <div className="text-left relative z-10 max-w-xl">
            <h3 className="text-2xl font-extrabold mb-2">Have a Similar Engineering Project?</h3>
            <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
              Send us your point cloud data, CAD drawings, or project specifications to receive a detailed cost proposal.
            </p>
          </div>
          <Link 
            to="/contact" 
            className="relative z-10 bg-brandRed hover:bg-red-600 text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg whitespace-nowrap active:scale-95"
          >
            Get a Free Quote
          </Link>
        </section>
      </main>
    </div>
  );
}