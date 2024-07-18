'use client'

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import OptionHeader from './OptionHeader';
import { GiHamburgerMenu } from "react-icons/gi";
import Link from 'next/link';
import { OptionMobileHeader } from './OptionMobileHeader';
import logo from '../../../assets/logo_withot_bg.png';
import Image from 'next/image';

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);



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
       {
        showMobileMenu && 
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
           <div className="flex-col flex gap-2 md:hidden p-7">
            <OptionMobileHeader label='Home' link='/' setShowMobileMenu={setShowMobileMenu}/>
            <OptionMobileHeader label='Pedir Gás' link='/order' setShowMobileMenu={setShowMobileMenu}/>
            <OptionMobileHeader label='Contato' link='/contact' setShowMobileMenu={setShowMobileMenu}/>
            <OptionMobileHeader label='Sobre' link='/about' setShowMobileMenu={setShowMobileMenu}/>
          </div>
        </motion.div>
       }
       </AnimatePresence>

      <motion.header
        className="flex justify-between items-center px-6 md:p-0 font-semibold sticky z-50 top-0 bg-white md:justify-around"
      >

        <div className='w-20 md:w-28'>
          <Image src={logo} alt='logo' />
        </div>
        <div className='text-2xl md:hidden' onClick={() => setShowMobileMenu(prevState => !prevState)}>
          <GiHamburgerMenu />
        </div>
        <div className="md:flex gap-9 hidden">
          <OptionHeader link='/' label='Home' />
          <OptionHeader link='/order' label='Pedir Gás' />
          <OptionHeader link='/contact' label='Contato' />
          <OptionHeader link='/about' label='Sobre' />
        </div>
      </motion.header>
    </div>
  );
}
