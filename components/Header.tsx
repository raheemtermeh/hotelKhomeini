
import React, { useState, useRef, useEffect } from 'react';
import { LogoIcon, ChevronDownIcon } from './Icons';

interface HeaderProps {
  activePage: string;
  navigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activePage, navigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const mainNavLinks = ["خانه", "اتاق ها", "گالری", "تماس"];
  const dropdownLinks = ["درباره ما", "خدمات", "وبلاگ", "پیشنهادها", "رویدادها", "باشگاه مشتریان", "تجربیات محلی", "توسعه پایدار"];

  const NavLink: React.FC<{ pageName: string }> = ({ pageName }) => (
    <button
      onClick={() => navigate(pageName)}
      className={`relative text-white hover:text-gray-200 transition-colors duration-300 pb-1 ${activePage === pageName ? 'font-bold' : ''}`}
    >
      {pageName}
      {activePage === pageName && (
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full" />
      )}
    </button>
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 p-4 bg-slate-50/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <nav className="bg-[#C6A577] rounded-full px-6 py-3 flex items-center justify-between shadow-md">
          <button onClick={() => navigate('خانه')} className="flex items-center gap-2">
            <LogoIcon className="h-8 w-8 text-white" />
            <span className="text-xl font-bold text-white hidden sm:inline">هتل رویایی</span>
          </button>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6 space-x-reverse">
            {mainNavLinks.map((link) => (
              <NavLink key={link} pageName={link} />
            ))}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-1 text-white hover:text-gray-200 transition-colors duration-300 pb-1"
              >
                بیشتر
                <ChevronDownIcon className={`h-4 w-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-4 w-48 bg-white rounded-lg shadow-xl py-2 z-50">
                  {dropdownLinks.map(link => (
                    <button
                      key={link}
                      onClick={() => { navigate(link); setIsDropdownOpen(false); }}
                      className={`block w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-slate-100 ${activePage === link ? 'font-bold text-[#C6A577]' : ''}`}
                    >
                      {link}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-2 bg-[#C6A577] rounded-lg p-4">
            {[...mainNavLinks, ...dropdownLinks].map((link) => (
              <button key={link} onClick={() => { navigate(link); setIsMenuOpen(false); }} className="block w-full text-white text-center py-2 hover:bg-[#b99a6f] rounded-md transition-colors duration-300">
                {link}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
