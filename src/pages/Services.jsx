import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const servicesData = [
    {
        id: '3d-scanning',
        
        name: '3D Scanning',
        badge: 'Field Capture',
        title: 'High-Precision 3D Laser Scanning & LiDAR Field Capture',
        description: 'Capture real-world environments with millimeter accuracy using advanced terrestrial scanners and mobile LiDAR systems.',
        bullets: ['Terrestrial & Mobile LiDAR', 'High-Density Point Clouds', 'Millimeter Accuracy', 'Rapid Site Mobilization'],
        ctaText: 'Request 3D Scanning',
        overviewText: 'Our 3D Scanning services utilize state-of-the-art laser scanners and LiDAR technology to capture complex physical environments, industrial plants, and historical structures. We generate high-density point cloud data that serves as the precise digital foundation for all subsequent engineering, modeling, and architectural workflows.',
        overviewImage: `${import.meta.env.BASE_URL}images/Services/Point.webp`,
        deliverables: {
            models: ['Raw & Registered Point Clouds', 'High-Density 3D Mesh Models', 'Panoramic Site Walkthroughs', 'Topographic & Surface Data'],
            docs: ['Scan Coverage Maps', 'Control Network Reports', 'Site Calibration Schematics', 'Field Log Documentation'],
            coordination: ['Point Cloud Registration Reports', 'Target Alignment Verification', 'GNSS / Survey Integration', 'As-Built Deviation Checks'],
            formats: ['RCP', 'RCS', 'E57', 'PTS', 'LAS', 'PDF']
        },
        benefits: [
            { id: '01', title: 'Complete Site Capture', desc: 'Record every physical detail and complex geometry without missing blind spots.' },
            { id: '02', title: 'Eliminate Manual Measuring Errors', desc: 'Replace traditional tape measurements with laser-precise spatial capture.' },
            { id: '03', title: 'Accelerated Field Work', desc: 'Scan large facilities and structures in a fraction of the time required manually.' },
            { id: '04', title: 'Safe Access to Hazardous Areas', desc: 'Capture dangerous or hard-to-reach industrial zones remotely.' },
            { id: '05', title: 'Reliable Engineering Baseline', desc: 'Provide a flawless reality capture foundation for BIM and CAD conversion.' },
            { id: '06', title: 'Reduced Project Costs', desc: 'Prevent costly return visits to the site by capturing everything in one go.' }
        ]
    },
    {
        id: 'scan-to-bim',
        name: 'Scan to BIM',
        badge: 'Core Service',
        title: 'Precision Scan to BIM Services for Existing Condition Documentation',
        description: 'Transform high-density point cloud data into accurate, rich 3D BIM models for renovations, retrofits, and facility management.',
        bullets: ['LOD 100–500', 'Revit Models', 'Millimeter Accuracy', 'Fast Project Turnaround', 'MEB'],
        ctaText: 'Upload Point Cloud Data',
        overviewText: 'Our Scan to BIM services convert point cloud data captured via 3D laser scanners and LiDAR into intelligent, parametric Revit BIM models. We help architects, engineers, contractors, and facility managers digitize physical assets with geometric precision, facilitating seamless design coordination and eliminating costly on-site surprises.',
        overviewImage: `${import.meta.env.BASE_URL}images/Services/Architectural.webp`,
        deliverables: {
            models: ['Architectural BIM Models', 'Structural BIM Models', 'MEP BIM Models', 'As-Built Revit Models'],
            docs: ['Floor Plans & Section Drawings', 'Reflected Ceiling Plans (RCP)', 'Building Elevations', 'Site & Topographic Plans'],
            coordination: ['Clash Detection Reports', 'Navisworks Federated Models', 'Phased Renovation Models', 'COBie / Asset Data Integration'],
            formats: ['RVT', 'IFC', 'NWC', 'DWG', 'RCP / RCS', 'PDF']
        },
        benefits: [
            { id: '01', title: 'Eliminate On-Site Errors', desc: 'Reduce expensive rework during construction by using laser-accurate as-built models.' },
            { id: '02', title: 'Seamless Team Collaboration', desc: 'Centralize spatial data for seamless coordination between architects, engineers, and contractors.' },
            { id: '03', title: 'Accelerate Project Timelines', desc: 'Fast-track design development and planning phases with CAD/BIM-ready digital assets.' },
            { id: '04', title: 'Flexible Level of Detail (LOD)', desc: 'Customized model density ranging from LOD 100 conceptual to LOD 500 operational assets.' },
            { id: '05', title: 'Clash-Free Design Support', desc: 'Identify spatial conflicts early in the virtual environment before site execution.' },
            { id: '06', title: 'Long-Term Facility Management', desc: 'Generate digital twins enriched with BIM data for lifecycle asset maintenance.' }
        ]
    },
    {
        id: 'structural-bim',
        name: 'Structural BIM',
        badge: 'Engineering & Frame',
        title: 'Convert Point Cloud Data into Precise Structural BIM Models',
        description: 'Transform scanned data into intelligent structural BIM models for renovations, structural assessments, documentation, and multidisciplinary coordination.',
        bullets: ['LOD 100–500', 'Concrete & Steel Models', 'As-Built Documentation', 'Coordination Ready'],
        ctaText: 'Upload Structural Point Clouds',
        overviewText: 'We specialize in converting point cloud data into detailed 3D structural BIM models. From concrete frames and foundation piles to complex structural steelwork, our models allow structural engineers and contractors to perform accurate structural analysis, retrofitting, and clash detection.',
        overviewImage: `${import.meta.env.BASE_URL}images/Services/Structural.webp`,
        deliverables: {
            models: ['Concrete Structural BIM Models', 'Structural Steelwork Models', 'Foundation & Substructure Models', 'As-Built Structural Models'],
            docs: ['Structural Floor & Framing Plans', 'Foundation Plans & Schedules', 'Structural Elevation Drawings', 'Section & Detail Drawings'],
            coordination: ['Structural Clash Detection Models', 'Navisworks Coordination Files', 'Federated BIM Integration', 'Demolition & Phase Mapping'],
            formats: ['RVT', 'IFC', 'NWC', 'DWG', 'PDF']
        },
        benefits: [
            { id: '01', title: 'Accurate Structural Representation', desc: 'Develop BIM models that precisely reflect existing structural member conditions and deformations.' },
            { id: '02', title: 'Improved Structural Coordination', desc: 'Facilitate seamless collaboration between architectural, structural, and MEP teams.' },
            { id: '03', title: 'Simplified Retrofit Planning', desc: 'Supports structural rehabilitation, load re-evaluation, and seismic upgrades.' },
            { id: '04', title: 'Reduced Design Uncertainty', desc: 'Eliminates structural assumptions with reliable laser scan information.' },
            { id: '05', title: 'Better Construction Phasing', desc: 'Enables informed decision-making during demolition, underpinning, and modification.' },
            { id: '06', title: 'Long-Term Asset Records', desc: 'Maintains comprehensive digital records for future structural inspections and alterations.' }
        ]
    },
    {
        id: 'architectural-bim',
        name: 'Architectural BIM',
        badge: 'Design & Space',
        title: 'Detailed Architectural BIM Modeling for Existing and New Assets',
        description: 'Develop comprehensive architectural BIM models focusing on interior layouts, facades, finishes, and complex spatial configurations.',
        bullets: ['LOD 100–500', 'Interior & Exterior Detailing', 'Façade Modeling', 'Renovation Ready'],
        ctaText: 'Upload Architectural Data',
        overviewText: 'Our Architectural BIM services focus on translating point cloud data and architectural surveys into intelligent, parametric Revit models. We capture intricate facade elements, interior partitions, wall finishes, and spatial arrangements with high fidelity to support architectural design, restoration, and space planning.',
        overviewImage: `${import.meta.env.BASE_URL}images/Services/Architectural.webp`,
        deliverables: {
            models: ['Architectural Revit Models', 'Façade & Cladding BIM', 'Interior Partition Models', 'Renovation & Phasing Models'],
            docs: ['Detailed Floor Plans', 'Building Elevations & Sections', 'Reflected Ceiling Plans (RCP)', 'Finishes & Door/Window Schedules'],
            coordination: ['Architectural Clash Check', 'Navisworks Review Files', 'Space Audit Schedules', 'Design Coordination Reports'],
            formats: ['RVT', 'IFC', 'DWG', 'NWC', 'PDF']
        },
        benefits: [
            { id: '01', title: 'Precise Spatial Documentation', desc: 'Accurately capture room dimensions, ceiling heights, and partition layouts.' },
            { id: '02', title: 'Enhanced Historic & Modern Design', desc: 'Seamlessly integrate historic preservation or modern architectural renovations.' },
            { id: '03', title: 'Comprehensive Schedules', desc: 'Automate material takeoffs, door/window schedules, and finish quantities.' },
            { id: '04', title: 'Improved Visualization', desc: 'Provide realistic 3D architectural representations for stakeholders and clients.' },
            { id: '05', title: 'Streamlined Approvals', desc: 'Generate precise permit and municipal drawings directly from the BIM model.' },
            { id: '06', title: 'Lifecycle Asset Control', desc: 'Maintain structured data for interior space management and facility operations.' }
        ]
    },
    {
        id: 'as-built-scan-to-cad',
        name: 'As-Built & Scan to CAD',
        badge: '2D & Verification',
        title: 'Comprehensive As-Built Services & Accurate Scan to CAD Conversion',
        description: 'Convert point cloud data into verified as-built records and standards-compliant 2D CAD drawings, floor plans, and elevations.',
        bullets: ['CAD & As-Built Verification', 'Layered DWG Deliverables', '±3-5mm Accuracy', 'Facility Management Ready'],
        ctaText: 'Upload As-Built / CAD Data',
        overviewText: 'We combine As-Built verification with Scan to CAD conversion to transform complex point cloud data into clean, layered, and fully edited 2D CAD drawings and verified baseline records. We produce architectural floor plans, elevations, sections, and utility layouts tailored to your exact drafting standards.',
        overviewImage: `${import.meta.env.BASE_URL}images/Services/CAD.webp`,
        deliverables: {
            models: ['2D Vectorized CAD Drawings', '3D Wireframe CAD Models', 'As-Built Verification Layouts', 'Topographic Contour Vectors'],
            docs: ['As-Built Floor Plans & Sections', 'Exterior Building Elevations', 'Reflected Ceiling Plans (RCP)', 'Technical As-Built Reports'],
            coordination: ['Layer Standard Mapping (AIA/ISO)', 'Tolerance & Deviation Analysis', 'Area & Boundary Audits', 'DWG Block Libraries'],
            formats: ['DWG', 'DXF', 'DGN', 'PDF']
        },
        benefits: [
            { id: '01', title: '100% Verified Conditions', desc: 'Replace unverified historical paper drawings with precise digital records.' },
            { id: '02', title: 'High Drafting Accuracy', desc: 'Generate clean CAD drawings directly traced from high-density point clouds.' },
            { id: '03', title: 'Faster Renovation Planning', desc: 'Speed up design development using well-structured, layered DWG deliverables.' },
            { id: '04', title: 'Reduced Site Visits', desc: 'Eliminate manual hand measurements with complete 2D digital extractions.' },
            { id: '05', title: 'Standardized Compliance', desc: 'Files delivered in strict accordance with your organizational layering standards.' },
            { id: '06', title: 'Cost-Effective Documentation', desc: 'Outsource technical drafting to reduce internal labor overhead.' }
        ]
    },
    {
        id: 'bim-to-digital-twin',
        name: 'BIM to Digital Twin',
        badge: 'Smart Infrastructure',
        title: 'Advanced BIM to Digital Twin Integration for Smart Asset Management',
        description: 'Bridge physical infrastructure and digital data by integrating BIM models and GIS layers into dynamic, interactive digital twins.',
        bullets: ['Digital Twin Integration', 'GIS & Spatial Layers', 'Lifecycle Asset Tracking', 'Smart Monitoring Ready'],
        ctaText: 'Explore Digital Twin Solutions',
        overviewText: 'Our BIM to Digital Twin services bridge the gap between static design models and dynamic operational environments. By integrating 3D BIM models, point cloud data, and GIS spatial layers, we build interactive digital twins that empower smart facility management, real-time monitoring, and optimized infrastructure operations.',
        overviewImage: `${import.meta.env.BASE_URL}images/Services/As-Built.webp`,
        deliverables: {
            models: ['Digital Twin Base Models', 'GIS-Integrated Spatial Layers', 'Federated Asset Databases', 'Interactive 3D Web Visualizations'],
            docs: ['Digital Twin Architecture Specs', 'Data Integration Protocols', 'Asset Hierarchy Schedules', 'Operational Maintenance Guides'],
            coordination: ['IoT Sensor Data Mapping', 'Cloud Platform Synchronization', 'Facility Management Dashboards', 'Lifecycle Tracking Reports'],
            formats: ['RVT', 'IFC', 'GIS / GeoJSON', 'NWC', 'JSON / API']
        },
        benefits: [
            { id: '01', title: 'Real-Time Operational Visibility', desc: 'Monitor facility status and asset performance through an interactive digital replica.' },
            { id: '02', title: 'Enhanced Facility Management', desc: 'Centralize maintenance records, warranties, and equipment specs within the twin.' },
            { id: '03', title: 'Seamless GIS Integration', desc: 'Connect indoor BIM details with outdoor geospatial and utility networks.' },
            { id: '04', title: 'Data-Driven Decision Making', desc: 'Optimize energy consumption, space utilization, and routine maintenance schedules.' },
            { id: '05', title: 'Future-Proof Infrastructure', desc: 'Scale operational workflows easily with cloud-ready digital asset architectures.' },
            { id: '06', title: 'Reduced Operational Overhead', desc: 'Minimize downtime and streamline repairs with instant access to asset history.' }
        ]
    }
];

export default function Services() {
    const [activeTab, setActiveTab] = useState('3d-scanning');

    const currentService = servicesData.find((s) => s.id === activeTab) || servicesData[0];

    return (
        <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
            <section className="relative bg-brandNavy text-white py-16 sm:py-20 overflow-hidden">
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <span className="inline-block bg-brandRed/20 text-brandRed border border-brandRed/30 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                        Our Expertise
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
                        Engineering <span className="text-brandRed">Services</span>
                    </h1>
                    <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
                        End-to-end 3D Scanning, Scan to BIM, Structural & Architectural modeling, As-Built & CAD conversion, and BIM to Digital Twin integration with millimeter precision.
                    </p>
                </div>
            </section>

            <div className="bg-white border-b-4 border-brandRed sticky top-20 z-40 shadow-md transition-all">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">

                    <div className="block md:hidden">
                        <label htmlFor="services-select" className="sr-only">Select Service</label>
                        <select
                            id="services-select"
                            value={activeTab}
                            onChange={(e) => setActiveTab(e.target.value)}
                            className="w-full bg-gray-50 border border-gray-300 text-brandNavy font-bold text-sm rounded-xl p-3 focus:ring-brandRed focus:border-brandRed block outline-none shadow-sm"
                        >
                            {servicesData.map((service) => (
                                <option key={service.id} value={service.id}>
                                    {service.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="hidden md:flex flex-wrap justify-center gap-2 lg:gap-3">
                        {servicesData.map((service) => {
                            const isActive = activeTab === service.id;
                            return (
                                <button
                                    key={service.id}
                                    onClick={() => setActiveTab(service.id)}
                                    className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 ${
                                        isActive
                                            ? 'bg-brandNavy text-white shadow-md'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-brandNavy'
                                    }`}
                                >
                                    <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-brandRed' : 'bg-gray-400'}`}></span>
                                    {service.name}
                                </button>
                            );
                        })}
                    </div>

                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

                <section className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-xs relative overflow-hidden">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                        <div className="max-w-3xl">
                            <span className="inline-block text-xs font-bold text-brandRed bg-red-50 border border-brandRed/20 px-3 py-1 rounded-full mb-3">
                                • {currentService.badge}
                            </span>
                            <h2 className="text-2xl sm:text-4xl font-extrabold text-brandNavy mb-4 leading-tight">
                                {currentService.title}
                            </h2>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                                {currentService.description}
                            </p>

                            <div className="flex flex-wrap gap-2.5 mb-8">
                                {currentService.bullets.map((bullet, idx) => (
                                    <span
                                        key={idx}
                                        className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 text-brandNavy text-xs font-semibold px-3.5 py-1.5 rounded-lg"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-brandRed"></span>
                                        {bullet}
                                    </span>
                                ))}
                            </div>

                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center bg-brandRed hover:bg-red-600 text-white text-xs sm:text-sm font-bold px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95"
                            >
                                {currentService.ctaText} &rarr;
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-4">
                        <span className="text-xs font-bold text-brandRed uppercase tracking-widest block">Detailed Overview</span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-brandNavy">
                            Precise Engineering & Reality Capture Conversion
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {currentService.overviewText}
                        </p>
                        <div className="pt-4 flex items-center gap-6 text-xs font-semibold text-gray-500">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> ISO Standard Compliant
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-brandRed"></span> High Geometric Precision
                            </div>
                        </div>
                    </div>

                    <div className="bg-neutral-900 rounded-2xl overflow-hidden border border-gray-200 shadow-lg relative h-72 sm:h-80 group">
                        <img
                            src={currentService.overviewImage}
                            alt={currentService.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brandNavy/80 via-transparent to-transparent flex items-end p-6">
                            <p className="text-white text-xs font-mono">
                                [Reality Capture & {currentService.name} Visualization]
                            </p>
                        </div>
                    </div>
                </section>

                <section className="space-y-8">
                    <div className="text-center max-w-2xl mx-auto">
                        <span className="text-xs font-bold text-brandRed uppercase tracking-widest block mb-2">Scope of Work</span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-brandNavy">
                            Our Service Deliverables
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500 mt-2">
                            Structured documentation and models delivered in industry-standard formats.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs hover:border-brandRed/40 transition-all">
                            <div className="w-10 h-10 rounded-xl bg-brandRed/10 text-brandRed font-black flex items-center justify-center mb-4 text-base">
                                01
                            </div>
                            <h4 className="font-bold text-base text-brandNavy mb-4">3D Models</h4>
                            <ul className="space-y-2.5 text-xs text-gray-600">
                                {currentService.deliverables.models.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-brandRed font-bold">•</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs hover:border-brandRed/40 transition-all">
                            <div className="w-10 h-10 rounded-xl bg-brandRed/10 text-brandRed font-black flex items-center justify-center mb-4 text-base">
                                02
                            </div>
                            <h4 className="font-bold text-base text-brandNavy mb-4">Documentation</h4>
                            <ul className="space-y-2.5 text-xs text-gray-600">
                                {currentService.deliverables.docs.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-brandRed font-bold">•</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs hover:border-brandRed/40 transition-all">
                            <div className="w-10 h-10 rounded-xl bg-brandRed/10 text-brandRed font-black flex items-center justify-center mb-4 text-base">
                                03
                            </div>
                            <h4 className="font-bold text-base text-brandNavy mb-4">Coordination</h4>
                            <ul className="space-y-2.5 text-xs text-gray-600">
                                {currentService.deliverables.coordination.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-brandRed font-bold">•</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs hover:border-brandRed/40 transition-all flex flex-col justify-between">
                            <div>
                                <div className="w-10 h-10 rounded-xl bg-brandRed/10 text-brandRed font-black flex items-center justify-center mb-4 text-base">
                                    04
                                </div>
                                <h4 className="font-bold text-base text-brandNavy mb-4">File Formats</h4>
                                <div className="flex flex-wrap gap-2">
                                    {currentService.deliverables.formats.map((fmt, i) => (
                                        <span
                                            key={i}
                                            className="bg-gray-100 text-brandNavy text-xs font-mono font-bold px-3 py-1.5 rounded-lg border border-gray-200"
                                        >
                                            {fmt}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <p className="text-[11px] text-gray-400 mt-6 font-mono">
                                * Other formats available upon request.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="space-y-8 pt-6">
                    <div className="text-center max-w-2xl mx-auto">
                        <span className="text-xs font-bold text-brandRed uppercase tracking-widest block mb-2">Value Add</span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-brandNavy">
                            Benefits of Our {currentService.name} Service
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentService.benefits.map((benefit) => (
                            <div
                                key={benefit.id}
                                className="group bg-white p-8 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 hover:border-brandRed/50 transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <span className="text-xs font-mono font-bold text-brandRed block mb-3">
                                        [{benefit.id}]
                                    </span>
                                    <h4 className="font-bold text-lg text-brandNavy mb-3 group-hover:text-brandRed transition-colors">
                                        {benefit.title}
                                    </h4>
                                    <p className="text-xs text-gray-600 leading-relaxed">
                                        {benefit.desc}
                                    </p>
                                </div>
                                <div className="mt-6 w-full h-1 bg-gray-100 group-hover:bg-brandRed transition-colors rounded-full"></div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-brandNavy text-white rounded-3xl p-8 sm:p-12 text-center flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-xl">
                    <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

                    <div className="text-left relative z-10 max-w-xl">
                        <h3 className="text-2xl font-extrabold mb-2">Ready to Start Your {currentService.name} Project?</h3>
                        <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
                            Send us your point cloud data, laser scans, or project specifications to receive a custom quote within 24 hours.
                        </p>
                    </div>
                    <Link
                        to="/contact"
                        className="relative z-10 bg-brandRed hover:bg-red-600 text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg whitespace-nowrap active:scale-95"
                    >
                        Get a Free Proposal
                    </Link>
                </section>

            </main>
        </div>
    );
}