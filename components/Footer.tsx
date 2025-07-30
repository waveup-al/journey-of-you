'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Facebook, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

// Custom TikTok Icon Component
const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-.1z" />
  </svg>
);

const Footer = () => {
  const quickLinks = [
    { href: '/', label: 'Trang Chủ' },
    { href: '/about', label: 'Về Chúng Tôi' },
    { href: '/services', label: 'Dịch Vụ' },
    { href: '/culture', label: 'Văn Hóa' },
    { href: '/contact', label: 'Liên Hệ' },
    { href: '/careers', label: 'Tuyển Dụng' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: TikTokIcon, href: '#', label: 'TikTok' },
  ];

  return (
    <footer className="text-white bg-gray-900">
      <div className="py-16 container-custom">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Tagline */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-4 space-x-3">
              <div>
                <Image
                  src="/LOGO.png"
                  alt="Company Logo"
                  width={48}
                  height={48}
                  className="object-contain w-12 h-12"
                />
                <p className="text-sm font-bold text-gray-300">
                  Journey of You
                </p>
              </div>
            </Link>
            <p className="mb-4 max-w-md text-gray-300">
              Đồng hành cùng thành công - Chuyên gia thương mại điện tử hàng đầu
              Việt Nam
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    className="flex justify-center items-center w-10 h-10 bg-gray-800 rounded-lg transition-colors duration-300 hover:bg-primary-500"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Liên Kết Nhanh</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 transition-colors duration-300 hover:text-primary-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Liên hệ</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin
                  size={18}
                  className="flex-shrink-0 mt-1 text-primary-400"
                />
                <p className="text-sm text-gray-300">
                  188 Đường 30/4, Tòa nhà Misa
                  <br />
                  Đà Nẵng, Việt Nam
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0 text-primary-400" />
                <a
                  href="mailto:contact@joy-vietnam.com"
                  className="text-sm text-gray-300 transition-colors hover:text-primary-400"
                >
                  anhnt@ecomex.co
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0 text-primary-400" />
                <a
                  href="tel:+84123456789"
                  className="text-sm text-gray-300 transition-colors hover:text-primary-400"
                >
                  +84 123 456 789
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-12 text-center border-t border-gray-800">
          <p className="text-sm text-gray-400">
            © 2025 Joy Vietnam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
