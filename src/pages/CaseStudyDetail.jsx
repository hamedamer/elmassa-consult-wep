import React, { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';

const caseStudiesData = [
  {
    id: 1,
    title: "National Museum of Saudi Arabia",
    subtitle: "3D Architectural & BIM Modeling",
    category: "Scan to BIM",
    location: "Saudi Arabia",
    client: "Saudi Heritage Authority",
    duration: "4 Weeks",
    software: "Autodesk Revit, AutoCAD",
    description: "El Massa Consult contributed to the development of digital building representations for the National Museum of Saudi Arabia.",
    overview: "El Massa Consult contributed to the development of digital building representations for the National Museum of Saudi Arabia. The project showcases the company’s capabilities in 3D modeling, architectural documentation, and translating building information into detailed digital models.",
    scopeOfWork: [
      "3D Architectural Modeling",
      "BIM Model Development",
      "Architectural Floor Plans",
      "Building Sections and Elevations",
      "Technical Documentation"
    ],
    image: `${import.meta.env.BASE_URL}images/CaseStudy/images.png`,
    gallery: [
      `${import.meta.env.BASE_URL}images/CaseStudy/images.png`,
      `${import.meta.env.BASE_URL}images/service-5.png`,
      `${import.meta.env.BASE_URL}images/service-3.png`
    ]
  },
  {
    id: 2,
    title: "Northern Borders Region Municipality Building",
    subtitle: "Architectural Modeling & Technical Documentation",
    category: "Scan to BIM",
    location: "Arar, Saudi Arabia",
    client: "Northern Borders Municipality",
    duration: "3 Weeks",
    software: "Autodesk Revit, AutoCAD",
    description: "This project involved architectural modeling and technical documentation for the Northern Borders Region Municipality Building in Arar, Saudi Arabia.",
    overview: "This project involved architectural modeling and technical documentation for the Northern Borders Region Municipality Building in Arar, Saudi Arabia. The work focused on developing a digital representation of the building, including its architectural layout, façade elements, and building sections.",
    scopeOfWork: [
      "3D Architectural Modeling",
      "Architectural Floor Plans",
      "Building Sections and Elevations",
      "Façade Documentation",
      "Technical Drawings"
    ],
    image: `${import.meta.env.BASE_URL}images/CaseStudy/images.png`,
    gallery: [
      `${import.meta.env.BASE_URL}images/CaseStudy/images.png`,
      `${import.meta.env.BASE_URL}images/CaseStudy/images.png`
    ]
  },
  {
    id: 3,
    title: "Al Rajhi Mall",
    subtitle: "As-Built 3D Laser Scan to BIM",
    category: "Scan to BIM",
    location: "Saudi Arabia",
    client: "Al Rajhi Developments",
    duration: "5 Weeks",
    software: "Autodesk Revit, Leica Cyclone",
    description: "El Massa Consult worked on a Scan-to-BIM project for Al Rajhi Mall, combining point cloud data with 3D modeling.",
    overview: "El Massa Consult worked on a Scan-to-BIM project for Al Rajhi Mall, combining point cloud data with 3D modeling to develop a digital representation of the existing building. The project demonstrates the company’s ability to capture and translate complex architectural spaces into structured digital models.",
    scopeOfWork: [
      "Point Cloud Processing",
      "Scan-to-BIM",
      "3D Architectural Modeling",
      "Building Sections",
      "Digital Model Development"
    ],
    image: `${import.meta.env.BASE_URL}images/CaseStudy/images.png`,
    gallery: [
      `${import.meta.env.BASE_URL}images/CaseStudy/images.png`,
      `${import.meta.env.BASE_URL}images/CaseStudy/images.png`
    ]
  },
  {
    id: 4,
    title: "Maaref School",
    subtitle: "Digital Building Representation & 3D Modeling",
    category: "3D Modeling",
    location: "Saudi Arabia",
    client: "Maaref Education Group",
    duration: "3 Weeks",
    software: "Autodesk Revit, AutoCAD",
    description: "This project involved the development of a 3D digital model of Maaref School, representing its architectural configuration.",
    overview: "This project involved the development of a 3D digital model of Maaref School, representing its architectural configuration and major building components. The model provides a visual representation of the facility and supports architectural coordination and documentation.",
    scopeOfWork: [
      "3D Architectural Modeling",
      "Digital Building Representation",
      "Architectural Visualization",
      "Model Documentation"
    ],
    image: `${import.meta.env.BASE_URL}images/CaseStudy/images.png`,
    gallery: [
      `${import.meta.env.BASE_URL}images/CaseStudy/images.png`,
      `${import.meta.env.BASE_URL}images/CaseStudy/images.png`
    ]
  },
  {
    id: 5,
    title: "The Palace – Museum Al Murabba",
    subtitle: "Heritage Documentation & Point Cloud Processing",
    category: "Heritage & CAD",
    location: "Riyadh, Saudi Arabia",
    client: "Ministry of Culture, Saudi Arabia",
    duration: "4 Weeks",
    software: "AutoCAD, PointCab",
    description: "This heritage documentation project focused on the architectural characteristics of a traditional Saudi palace.",
    overview: "This heritage documentation project focused on the architectural characteristics of a traditional Saudi palace. Point cloud data was used as a reference for producing technical architectural drawings that record the building’s geometry and distinctive features, supporting its digital documentation.",
    scopeOfWork: [
      "Point Cloud Processing",
      "Scan-to-CAD",
      "Architectural Documentation",
      "Elevations and Sections",
      "Detailed 2D Drawings"
    ],
    image: `${import.meta.env.BASE_URL}images/CaseStudy/images.png`,
    gallery: [
      `${import.meta.env.BASE_URL}images/CaseStudy/images.png`,
      `${import.meta.env.BASE_URL}images/CaseStudy/images.png`
    ]
  },
  {
    id: 6,
    title: "Prince Mishal bin Abdulaziz Al Saud Mosque",
    subtitle: "Digital Documentation & Laser Scanning",
    category: "Scan to CAD",
    location: "Riyadh, Saudi Arabia",
    client: "Awqaf Directorate",
    duration: "3 Weeks",
    software: "AutoCAD, Leica Cyclone",
    description: "El Massa Consult undertook digital documentation of Prince Mishal bin Abdulaziz Al Saud Mosque using point cloud data.",
    overview: "El Massa Consult undertook digital documentation of Prince Mishal bin Abdulaziz Al Saud Mosque using point cloud data to capture its architectural geometry and distinctive features. The captured data was used to develop detailed CAD drawings representing the mosque’s architectural elements, elevations, and sections.",
    scopeOfWork: [
      "3D Laser Scanning Documentation",
      "Point Cloud Processing",
      "Scan-to-CAD",
      "Architectural Elevations",
      "Building Sections and Details"
    ],
    image: `${import.meta.env.BASE_URL}images/CaseStudy/images.png`,
    gallery: [
      `${import.meta.env.BASE_URL}images/CaseStudy/images.png`,
      `${import.meta.env.BASE_URL}images/CaseStudy/images.png`
    ]
  },
  {
    id: 7,
    title: "Stiftshöfe Braunschweig – Hutfiltern",
    subtitle: "Historic Building Digital Recording",
    category: "Scan to BIM",
    location: "Braunschweig, Germany",
    client: "European Heritage Group",
    duration: "4 Weeks",
    software: "Autodesk Revit, Faro Scene",
    description: "This heritage documentation project involved the digital recording of a historic building in Braunschweig, Germany.",
    overview: "This heritage documentation project involved the digital recording of a historic building in Braunschweig, Germany. Point cloud data served as the reference for producing architectural drawings and a 3D model, documenting the building’s façade, decorative elements, and architectural features.",
    scopeOfWork: [
      "Point Cloud Processing",
      "Scan-to-CAD",
      "Scan-to-BIM",
      "3D Architectural Modeling",
      "Façade Modeling",
      "Architectural Elevations and Documentation"
    ],
    image: `${import.meta.env.BASE_URL}images/CaseStudy/images.png`,
    gallery: [
      `${import.meta.env.BASE_URL}images/CaseStudy/images.png`,
      `${import.meta.env.BASE_URL}images/CaseStudy/images.png`
    ]
  },
  {
    id: 8,
    title: "TRANS HUB Mall",
    subtitle: "Scan-to-BIM Services",
    category: "Scan to BIM",
    location: "New Administrative Capital, Egypt",
    client: "Capital Real Estate Development",
    duration: "4 Weeks",
    software: "Autodesk Revit, Navisworks",
    description: "El Massa Consult delivered Scan-to-BIM services for TRANS HUB Mall, transforming laser scanning data into a 3D digital representation.",
    overview: "El Massa Consult delivered Scan-to-BIM services for TRANS HUB Mall, transforming laser scanning data into a 3D digital representation of the building. The work involved processing point cloud data and developing architectural models to represent the building’s geometry, façade, and internal spaces.",
    scopeOfWork: [
      "3D Laser Scanning",
      "Point Cloud Registration and Processing",
      "Scan-to-BIM",
      "3D Architectural Modeling",
      "Architectural Documentation"
    ],
    image: `${import.meta.env.BASE_URL}images/CaseStudy/images.png`,
    gallery: [
      `${import.meta.env.BASE_URL}images/CaseStudy/images.png`,
      `${import.meta.env.BASE_URL}images/CaseStudy/images.png`
    ]
  },
  {
    id: 9,
    title: "Edfu Temple",
    subtitle: "Cultural Heritage 3D Documentation",
    category: "Heritage & GIS",
    location: "Edfu, Aswan, Egypt",
    client: "Ministry of Tourism and Antiquities",
    duration: "6 Weeks",
    software: "AutoCAD, Revit, Cyclone",
    description: "This cultural heritage project focused on the digital representation of Edfu Temple, one of Egypt’s significant ancient monuments.",
    overview: "This cultural heritage project focused on the digital representation of Edfu Temple, one of Egypt’s significant ancient monuments. Point cloud data and 3D modeling techniques were used to document the existing architectural geometry and create digital representations of the temple complex.",
    scopeOfWork: [
      "3D Laser Scanning",
      "Point Cloud Processing",
      "Heritage 3D Modeling",
      "Scan-to-CAD",
      "Architectural Plans and Documentation",
      "3D Visualization"
    ],
    image: `${import.meta.env.BASE_URL}images/CaseStudy/images.png`,
    gallery: [
      `${import.meta.env.BASE_URL}images/CaseStudy/images.png`,
      `${import.meta.env.BASE_URL}images/CaseStudy/images.png`
    ]
  },
  {
    id: 10,
    title: "EL Max Pipeline Station",
    subtitle: "Industrial Documentation & Piping Modeling",
    category: "Industrial MEP",
    location: "Alexandria, Egypt",
    client: "Petroleum Infrastructure Co.",
    duration: "5 Weeks",
    software: "Revit MEP, AutoCAD Plant 3D",
    description: "El Massa Consult provided digital documentation and 3D modeling services for EL Max Pipeline Station.",
    overview: "El Massa Consult provided digital documentation and 3D modeling services for EL Max Pipeline Station. The project involved using point cloud data to represent the existing industrial facility, including visible equipment, structural elements, and piping arrangements.",
    scopeOfWork: [
      "Point Cloud Processing",
      "Industrial 3D Modeling",
      "Scan-to-CAD",
      "Equipment and Piping Documentation",
      "Technical Drawings"
    ],
    image: `${import.meta.env.BASE_URL}images/CaseStudy/images.png`,
    gallery: [
      `${import.meta.env.BASE_URL}images/CaseStudy/images.png`,
      `${import.meta.env.BASE_URL}images/CaseStudy/images.png`
    ]
  },
  {
    id: 11,
    title: "Khan El-Khalili – Al-Muizz Street",
    subtitle: "Architectural Documentation & Façade Profiling",
    category: "Scan to CAD",
    location: "Historic Cairo, Egypt",
    client: "Urban Restoration Agency",
    duration: "4 Weeks",
    software: "AutoCAD, Adobe Illustrator",
    description: "This architectural documentation project focused on buildings located along the historic Khan El-Khalili and Al-Muizz Street area in Cairo.",
    overview: "This architectural documentation project focused on buildings located along the historic Khan El-Khalili and Al-Muizz Street area in Cairo. The work involved producing architectural drawings that represent existing building façades, architectural features, and vertical dimensions.",
    scopeOfWork: [
      "Architectural Documentation",
      "Façade Elevations",
      "Building Sections",
      "Architectural Detailing",
      "2D CAD Drawings"
    ],
    image: `${import.meta.env.BASE_URL}images/CaseStudy/images.png`,
    gallery: [
      `${import.meta.env.BASE_URL}images/CaseStudy/images.png`,
      `${import.meta.env.BASE_URL}images/CaseStudy/images.png`
    ]
  },
  {
    id: 12,
    title: "Little Venice Alexandria",
    subtitle: "As-Built CAD & Technical Documentation",
    category: "Scan to CAD",
    location: "Alexandria, Egypt",
    client: "Alexandria Real Estate Group",
    duration: "3 Weeks",
    software: "AutoCAD, Faro Scene",
    description: "El Massa Consult carried out digital documentation work for the Little Venice project in Alexandria.",
    overview: "El Massa Consult carried out digital documentation work for the Little Venice project in Alexandria. Point cloud data was used as a reference for developing architectural CAD drawings and detailed representations of the existing building geometry.",
    scopeOfWork: [
      "Point Cloud Processing",
      "Scan-to-CAD",
      "Architectural Drawings",
      "Building Detailing",
      "Technical Documentation"
    ],
    image: `${import.meta.env.BASE_URL}images/CaseStudy/images.png`,
    gallery: [
      `${import.meta.env.BASE_URL}images/CaseStudy/images.png`,
      `${import.meta.env.BASE_URL}images/CaseStudy/images.png`
    ]
  }
];

export default function CaseStudyDetail() {
  const { id } = useParams();
  const project = caseStudiesData.find((p) => p.id === parseInt(id));

  const [lightboxIndex, setLightboxIndex] = useState(null);
  const sliderRef = useRef(null);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Project Not Found</h2>
        <p className="text-gray-500 text-sm mb-6">The project you are looking for does not exist.</p>
        <Link to="/casestudies" className="bg-brandRed text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-red-700 transition">
          Back to Case Studies
        </Link>
      </div>
    );
  }

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
      <section className="relative bg-brandNavy text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/casestudies" className="text-brandRed text-xs font-bold uppercase tracking-wider mb-4 inline-flex items-center gap-1 hover:underline">
            ← Back to All Case Studies
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">{project.title}</h1>
          <p className="text-gray-300 text-sm font-light">
            {project.subtitle || project.category} • 📍 {project.location}
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 mb-12">
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
              <span className="block text-gray-400 font-medium mb-1">Client</span>
              <span className="font-bold text-brandNavy">{project.client}</span>
            </div>
            <div>
              <span className="block text-gray-400 font-medium mb-1">Duration & Software</span>
              <span className="font-bold text-brandNavy">{project.duration} / {project.software}</span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Project Overview</h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
            {project.overview || project.description}
          </p>

          {project.scopeOfWork && project.scopeOfWork.length > 0 && (
            <div className="mt-6 pt-6 border-t border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Scope of Work</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.scopeOfWork.map((scope, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 bg-gray-50 border border-gray-200/60 p-3 rounded-xl text-xs sm:text-sm font-medium text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-brandRed"></span>
                    {scope}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

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

            <div className="relative group/gallery px-4">
              <button 
                onClick={scrollLeft}
                className="absolute -left-2 sm:left-1 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-brandRed hover:text-white text-gray-800 w-11 h-11 rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-lg transition-all"
                aria-label="Previous image"
              >
                ❮
              </button>

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

        {lightboxIndex !== null && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 select-none"
            onClick={() => setLightboxIndex(null)}
          >
            <button 
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-brandRed text-white w-10 h-10 rounded-full font-bold flex items-center justify-center text-lg transition z-50"
            >
              ✕
            </button>

            <div className="absolute top-4 left-4 text-white/80 text-xs font-semibold bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
              {lightboxIndex + 1} / {project.gallery.length}
            </div>

            <button 
              onClick={handleLightboxPrev}
              className="absolute left-4 sm:left-8 bg-white/10 hover:bg-brandRed text-white w-12 h-12 rounded-full flex items-center justify-center text-xl transition border border-white/20 shadow-lg z-50"
            >
              ❮
            </button>

            <div className="relative max-w-5xl w-full flex flex-col items-center justify-center px-10">
              <img 
                src={project.gallery[lightboxIndex]} 
                alt="Enlarged view" 
                className="max-h-[82vh] w-auto object-contain rounded-xl shadow-2xl border border-white/10"
              />
            </div>

            <button 
              onClick={handleLightboxNext}
              className="absolute right-4 sm:right-8 bg-white/10 hover:bg-brandRed text-white w-12 h-12 rounded-full flex items-center justify-center text-xl transition border border-white/20 shadow-lg z-50"
            >
              ❯
            </button>
          </div>
        )}

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