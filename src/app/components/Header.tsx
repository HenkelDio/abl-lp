'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import OptionHeader from './OptionHeader';

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
    <motion.header
      className="flex justify-around p-6 font-semibold sticky z-50 top-0 bg-white"
      initial={{ y: 0 }}
      animate={{ y: showHeader ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        Logo
      </div>
      <div className="flex gap-9">
        <OptionHeader link='/' label='Home'/>
        <OptionHeader link='/' label='Gases'/>
        <OptionHeader link='/' label='Pedir Gás'/>
        <OptionHeader link='/' label='Contato'/>
        <OptionHeader link='/' label='Sobre'/>
      </div>
    </motion.header>
  );
}
