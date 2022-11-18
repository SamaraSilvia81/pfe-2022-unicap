import React, { useEffect, useState } from 'react';
import { StarCounter } from "../zustand/StarCounter";
import { Controls } from "../zustand/Controls";

// import components
import Logo from '../../assets/img//logoheader.png';
import Nav from '../layout/navBar/Nav';
import NavMobile from '../layout/navBar/Nav';
import Socials from '../content/Socials';

const Header = () => {

  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? 'bg-tertiary h-20' : 'h-24'
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className='container mx-auto h-full flex items-center justify-between'>
        {/* logo */}
        <a href='/'>
          <img src={Logo} alt='' />
        </a>
        {/* nav */}
        <div className='hidden lg:block'>
          <Nav />
        </div>
        {/* Like */}
        <div className='hidden lg:block pl-12'>
          <StarCounter />
        </div>
        <div className='hidden lg:block'>
          <Controls />
        </div>
        {/* nav mobile*/}
        <div className='lg:hidden'>
          <NavMobile />
        </div>

      </div>
    </header>
  );
};

export default Header;

