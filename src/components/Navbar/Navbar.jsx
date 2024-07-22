'use client';
import LanguageSwitch from './_components/LanguageSwitch';
import Link from 'next/link';
import ThemeSwitch from './_components/ThemeSwitch';
import NavSvg from '../../../public/icons/nav.svg';

import { useState } from 'react';

const pages = [
  'Kampaniyalar',
  'Xidmetler',
  'Magazalar',
  'Ayliq odenis',
  ' Diger',
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] =useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#F5F5F5] dark:bg-[#2B2B2B] dark:text-[#F5F5F5]   rounded-2xl shadow-none">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center md:hidden">
            <NavSvg
              onClick={handleToggle}
              className="text-gray-500 dark:text-[#F5F5F5]"
            />
            {isOpen && (
              <div className="absolute z-20 top-16 left-0 bg-white dark:bg-[#2B2B2B] dark:text-[#F5F5F5]   shadow-md rounded-md">
                {pages.map((page) => (
                  <div key={page} className="px-4 py-2">
                    <button onClick={handleToggle} className="w-full text-left">
                      {page}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="hidden md:flex space-x-4">
            {pages.map((page) => (
              <button
                key={page}
                onClick={handleCloseNavMenu}
                className="text-gray-500 hover:text-gray-600 focus:text-gray-600"
              >
                {page}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-500 underline">
              Evvelki versiyaya kecid
            </Link>
            <LanguageSwitch />
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
}
export default ResponsiveAppBar;
