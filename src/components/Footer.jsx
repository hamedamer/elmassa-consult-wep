export default function Footer() {
  return (
    <footer className="bg-[#0A1D31] text-gray-300 pt-16 pb-8 border-t-4 border-[#EB4C4C] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">

          <div className="space-y-4">
            <a href="#" className="inline-block bg-white p-2 rounded-lg shadow-sm">
              <img src={`${import.meta.env.BASE_URL}images/images.png`} alt="EL MASSA CONSULT Logo" className="h-16 w-auto object-contain" />
            </a>
            <p className="text-xs text-gray-300 leading-relaxed pt-2">
              Leading provider of 3D Laser Scanning, Scan to BIM, Digital Twin creation, and Multi-Disciplinary Engineering Services globally.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-[#EB4C4C] text-white rounded-full flex items-center justify-center text-sm transition">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-[#EB4C4C] text-white rounded-full flex items-center justify-center text-sm transition">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-[#EB4C4C] text-white rounded-full flex items-center justify-center text-sm transition">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#EB4C4C] pl-2">
              Advanced Services
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#" className="hover:text-white transition">Point Cloud to Revit Modeling</a></li>
              <li><a href="#" className="hover:text-white transition">3D Laser Scanning Services</a></li>
              <li><a href="#" className="hover:text-white transition">Digital Twin & Asset Management</a></li>
              <li><a href="#" className="hover:text-white transition">As-Built Surveying & BIM</a></li>
              <li><a href="#" className="hover:text-white transition">Scan to CAD / Mesh Processing</a></li>
              <li><a href="#" className="hover:text-white transition">GIS & Spatial Data Mapping</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#EB4C4C] pl-2">
              Engineering Solutions
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#" className="hover:text-white transition">Architectural BIM Modeling</a></li>
              <li><a href="#" className="hover:text-white transition">Structural BIM & Analysis</a></li>
              <li><a href="#" className="hover:text-white transition">MEP Design & Coordination</a></li>
              <li><a href="#" className="hover:text-white transition">Clash Detection & Resolution</a></li>
              <li><a href="#" className="hover:text-white transition">Land & Topographic Surveying</a></li>
              <li><a href="#" className="hover:text-white transition">Infrastructure & Utility Survey</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#EB4C4C] pl-2">
              Quick Inquiry
            </h4>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your Name" className="w-full bg-gray-900 border border-gray-800 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#EB4C4C]" />
              <input type="email" placeholder="Your Email" className="w-full bg-gray-900 border border-gray-800 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#EB4C4C]" />
              <textarea rows="2" placeholder="Brief Scope / Question" className="w-full bg-gray-900 border border-gray-800 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#EB4C4C]"></textarea>
              <button type="submit" className="w-full bg-[#EB4C4C] hover:bg-red-600 text-white font-bold py-2 rounded text-xs transition uppercase tracking-wider">
                Send Message
              </button>
            </form>
            <div className="mt-4 pt-3 border-t border-gray-800 text-[11px] text-gray-400 space-y-1">
              <p className="flex items-center gap-2"><i className="fa-solid fa-envelope text-[#EB4C4C]"></i> info@elmassaconsult.com</p>
              <p className="flex items-center gap-2"><i className="fa-solid fa-lock text-[#EB4C4C]"></i> Strict NDA & Data Privacy Guaranteed</p>
            </div>
          </div>

        </div>
        <div className="pt-8 text-center text-xs text-gray-500">
          <p>&copy; 2026 EL MASSA CONSULT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}