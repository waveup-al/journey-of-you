'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = pathname === '/';
  const showSolidNav = !isHomePage || isScrolled;

  const navItems = [
    { href: '/', label: 'Trang Chủ' },
    { href: '/about', label: 'Về Chúng Tôi' },
    { href: '/services', label: 'Dịch Vụ' },
    { href: '/culture', label: 'Văn Hóa' },
    { href: '/contact', label: 'Liên Hệ' },
    { href: '/careers', label: 'Tuyển Dụng' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolidNav ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/LOGO.png"
              alt="Company Logo"
              width={50}
              height={50}
              className="object-contain w-10 h-10 md:w-12 md:h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors duration-300 hover:scale-105 ${
                  pathname === item.href
                    ? showSolidNav
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-yellow-300 border-b-2 border-yellow-300'
                    : showSolidNav
                    ? 'text-gray-700 hover:text-blue-600'
                    : 'text-white hover:text-yellow-300'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              showSolidNav
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="bg-white border-t border-gray-200 shadow-lg md:hidden">
            <nav className="py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-2 font-medium transition-colors duration-300 ${
                    pathname === item.href
                      ? 'text-blue-600 bg-blue-50 border-r-4 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
