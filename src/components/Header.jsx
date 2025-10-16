import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoImg from "../assets/logoImg.jpeg";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navLinkClass = ({ isActive }) =>
    `block px-3 py-2 rounded-lg transition ${
      isActive ? "text-blue-700 bg-blue-50" : "text-gray-700 hover:text-blue-700"
    }`;

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="w-full md:w-4/5 mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <img
              src={logoImg}
              alt="Brisit Logo"
              className="h-10 w-10 rounded-full border shadow-sm object-cover"
            />
            <span className="font-extrabold text-lg md:text-xl text-blue-800 tracking-wide">
              Brisit Technologies
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2 font-medium">
            <NavLink to="/" className={navLinkClass} end>
              Home
            </NavLink>
            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          {/* Mobile menu button */}
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
            open ? "max-h-64" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-1 pb-4 font-medium">
            <NavLink to="/" className={navLinkClass} end onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink to="/services" className={navLinkClass} onClick={closeMenu}>
              Services
            </NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={closeMenu}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}