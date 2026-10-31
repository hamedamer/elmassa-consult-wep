import React from 'react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    id: 1,
    title: "National Museum of Saudi Arabia",
    subtitle: "3D Architectural & BIM Modeling",
    category: "Scan to BIM",
    location: "Saudi Arabia",
    description: "Contributed to the development of digital building representations, showcasing capabilities in 3D modeling and architectural documentation.",
    image: `${import.meta.env.BASE_URL}images/CaseStudy/images.png`
  },
  {
    id: 2,
    title: "Northern Borders Region Municipality Building",
    subtitle: "Architectural Modeling & Technical Documentation",
    category: "Scan to BIM",
    location: "Arar, Saudi Arabia",
    description: "Involved architectural modeling and technical documentation focusing on digital layout, façade elements, and building sections.",
    image: `${import.meta.env.BASE_URL}images/CaseStudy/images.png`
  },
  {
    id: 3,
    title: "Al Rajhi Mall",
    subtitle: "As-Built 3D Laser Scan to BIM",
    category: "Scan to BIM",
    location: "Saudi Arabia",
    description: "Combined point cloud data with 3D modeling to develop a precise digital representation of the existing commercial building.",
    image: `${import.meta.env.BASE_URL}images/CaseStudy/images.png`
  },
  {
    id: 4,
    title: "Maaref School",
    subtitle: "Digital Building Representation & 3D Modeling",
    category: "3D Modeling",
    location: "Saudi Arabia",
    description: "Developed a 3D digital model representing architectural configuration and major building components for spatial coordination.",
    image: `${import.meta.env.BASE_URL}images/CaseStudy/images.png`
  },
  {
    id: 5,
    title: "The Palace – Museum Al Murabba",
    subtitle: "Heritage Documentation & Point Cloud Processing",
    category: "Heritage & CAD",
    location: "Riyadh, Saudi Arabia",
    description: "Heritage documentation focusing on traditional palace characteristics using point cloud data to produce technical architectural drawings.",
    image: `${import.meta.env.BASE_URL}images/CaseStudy/images.png`
  },
  {
    id: 6,
    title: "Prince Mishal bin Abdulaziz Al Saud Mosque",
    subtitle: "Digital Documentation & Laser Scanning",
    category: "Scan to CAD",
    location: "Riyadh, Saudi Arabia",
    description: "Digital documentation using laser scanning to capture architectural geometry, distinctive features, and detailed CAD drawings.",
    image: `${import.meta.env.BASE_URL}images/CaseStudy/images.png`
  },
  {
    id: 7,
    title: "Stiftshöfe Braunschweig – Hutfiltern",
    subtitle: "Historic Building Digital Recording",
    category: "Scan to BIM",
    location: "Braunschweig, Germany",
    description: "Heritage documentation and digital recording of a historic building, producing architectural drawings and 3D models of façades.",
    image: `${import.meta.env.BASE_URL}images/CaseStudy/images.png`
  },
  {
    id: 8,
    title: "TRANS HUB Mall",
    subtitle: "Scan-to-BIM Services",
    category: "Scan to BIM",
    location: "New Administrative Capital, Egypt",
    description: "Transformed laser scanning data into a 3D digital representation including geometry, façade, and internal spaces.",
    image: `${import.meta.env.BASE_URL}images/CaseStudy/images.png`
  },
  {
    id: 9,
    title: "Edfu Temple",
    subtitle: "Cultural Heritage 3D Documentation",
    category: "Heritage & GIS",
    location: "Edfu, Aswan, Egypt",
    description: "Cultural heritage project using point cloud data and 3D modeling techniques to document ancient architectural geometry.",
    image: `${import.meta.env.BASE_URL}images/CaseStudy/images.png`
  },
  {
    id: 10,
    title: "EL Max Pipeline Station",
    subtitle: "Industrial Documentation & Piping Modeling",
    category: "Industrial MEP",
    location: "Alexandria, Egypt",
    description: "Provided digital documentation and 3D modeling services representing existing industrial facilities, equipment, and piping.",
    image: `${import.meta.env.BASE_URL}images/CaseStudy/images.png`
  },
  {
    id: 11,
    title: "Khan El-Khalili – Al-Muizz Street",
    subtitle: "Architectural Documentation & Façade Profiling",
    category: "Scan to CAD",
    location: "Historic Cairo, Egypt",
    description: "Architectural documentation producing 2D CAD drawings representing historic building façades, features, and vertical dimensions.",
    image: `${import.meta.env.BASE_URL}images/CaseStudy/images.png`
  },
  {
    id: 12,
    title: "Little Venice Alexandria",
    subtitle: "As-Built CAD & Technical Documentation",
    category: "Scan to CAD",
    location: "Alexandria, Egypt",
    description: "Digital documentation using point cloud data as a reference for developing architectural CAD drawings and detailed geometry.",
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
            Explore our featured Scan to BIM, heritage documentation, point cloud processing, and 3D modeling projects delivered with high accuracy.
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