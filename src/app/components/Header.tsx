'use client'

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import OptionHeader from './OptionHeader';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import Link from 'next/link';
import { OptionMobileHeader } from './OptionMobileHeader';
import Image from 'next/image';
import logo from '../../../assets/logo.png';
import logoModa from '../../../assets/logo-moda.png';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const pathname = usePathname();

  const controlHeader = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeader);
      return () => {
        window.removeEventListener('scroll', controlHeader);
      };
    }
  }, [lastScrollY]);

  return (
    <div>
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="flex flex-col gap-2 p-7 bg-white z-50">
              <OptionMobileHeader label='ABL STOCK' link='/' setShowMobileMenu={setShowMobileMenu} />
              <OptionMobileHeader label='ABL MODA' link='/moda' setShowMobileMenu={setShowMobileMenu} />
              <OptionMobileHeader label='Produtos' link='/products' setShowMobileMenu={setShowMobileMenu} />
              <OptionMobileHeader label='Contato' link='/contact' setShowMobileMenu={setShowMobileMenu} />
              <OptionMobileHeader label='Sobre' link='/about' setShowMobileMenu={setShowMobileMenu} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.header
        className="flex justify-between items-center px-6 md:px-16 font-semibold sticky z-40 top-0 bg-blueDefault-0 md:justify-between text-white h-[140px]"
        initial={{ y: 0 }}
        animate={{ y: showMobileMenu ? 50 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className='text-2xl cursor-pointer' onClick={() => setShowMobileMenu(prevState => !prevState)}>
          {showMobileMenu ? <IoCloseSharp /> : <GiHamburgerMenu />}
        </div>

        <div>
          <h1 className='text-2xl font-bold md:text-3xl'>
            {
              pathname === '/moda'
              ? 'ABL MODA'
              : 'ABL STOCK'
            }
          </h1>
        </div>

        <div className='md:w-[60px] w-[45px]'>
          <Image src={pathname === '/moda' ? logoModa : logo} alt='logo' />
        </div>
      </motion.header>
    </div>
  );
}
