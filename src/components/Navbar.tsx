import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Our Projects', href: '/projects' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP BAR */}
        <div className="flex justify-between items-center h-16 md:h-20">

          {/* LOGO */}
          <a href="#home" className="flex-shrink-0">
            <img
              src={logo}
              alt="logo"
              className="h-10 md:h-14 w-auto"
            />
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA BUTTON - DESKTOP */}
          <a
            href="#contact"
            className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Get Started
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-blue-600"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg w-full max-h-[calc(100vh-64px)] overflow-y-auto">
          <div className="px-4 py-4 space-y-3">

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                className="block text-gray-700 py-3 px-4 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={handleNavClick}
              className="block bg-blue-600 text-white text-center py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition mt-4 w-full"
            >
              Get Started
            </a>

          </div>
        </div>
      )}

    </nav>
  );
};