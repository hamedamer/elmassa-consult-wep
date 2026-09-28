import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  // قائمة الروابط لسهولة التكرار والصيانة
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/casestudies' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact Us', path: '/contact' },
  ]

  // دالة للتحقق من الصفحة الحالية لتلوين اللينك النشط
  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.toLowerCase().startsWith(path.toLowerCase())
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <div className="w-12 h-12 bg-brandNavy rounded flex items-center justify-center text-white font-bold text-xl border-b-4 border-brandRed">
            MC
          </div>
          <div>
            <span className="block font-extrabold text-xl text-brandNavy leading-none tracking-tight">EL MASSA</span>
            <span className="block text-xs font-semibold text-brandRed tracking-wider uppercase">CONSULT</span>
            <span className="block text-[9px] text-gray-400 italic leading-tight">A place you trust.</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 font-semibold text-base">
          {navLinks.map((link) => {
            const active = isActive(link.path)
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`transition-colors duration-200 ${
                  active
                    ? 'text-brandRed font-bold border-b-2 border-brandRed pb-1'
                    : 'text-gray-700 hover:text-brandRed'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>

        {/* Action Button (Desktop) */}
        <div className="hidden sm:block">
          <Link
            to="/contact"
            className="bg-brandRed hover:bg-red-600 text-white font-semibold text-sm px-5 py-2.5 rounded-md transition shadow-md hover:shadow-lg"
          >
            Get a Free Quote
          </Link>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-brandNavy hover:text-brandRed focus:outline-none p-2 rounded-md"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              // أيقونة الإغلاق X
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // أيقونة القائمة الهامبرجر ☰
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-3 shadow-lg animate-fadeIn">
          {navLinks.map((link) => {
            const active = isActive(link.path)
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md font-semibold text-base transition ${
                  active
                    ? 'bg-brandRed/10 text-brandRed font-bold'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-brandRed'
                }`}
              >
                {link.name}
              </Link>
            )
          })}

          <div className="pt-2">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-brandRed hover:bg-red-600 text-white font-semibold text-base py-3 rounded-md transition shadow-md"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}