import React, { useEffect, useState } from 'react';

import logo from '../assets/img/logo.png';
import activeLogo from '../assets/img/active-logo.png';
import arrow from '../assets/img/arrow.png';
import activeArrow from '../assets/img/active-arrow.png';

const arrowStyle = 'max-w-[12px] h-[16px] object-cover';
const navStyle = 'bg-transparent';
const navActiveStyle = `bg-navBg border-b-[1px] border-navBorder 
shadow-navSchadow backdrop-blur-[25px]`;

function Navbar() {
  const [isScroll, setIsScroll] = useState(false);

  const linkStyle = `h-[24px] flex items-center gap-[12px] 
font-poppins ${
    isScroll ? 'text-navActive' : 'text-white'
  } text-base cursor-pointer`;
  const buttonStyle = `font-poppins text-base ${
    isScroll ? 'text-navActive' : 'text-white'
  }`;

  useEffect(() => {
    const handleScroll = () => {
      if (document.documentElement.scrollTop == 0) {
        setIsScroll(false);
      } else {
        setIsScroll(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky z-50 top-0 border-0 border-solid ${
        isScroll ? navActiveStyle : navStyle
      }`}
    >
      <div
        className=" mx-auto max-w-[1200px] max-h-[100px] flex 
      items-center py-[24px] gap-[88px]"
      >
        <a href="/">
          <img
            src={isScroll ? activeLogo : logo}
            alt="Logo"
            className="h-[35px] w-[194px]"
          />
        </a>
        <div className="w-[561px] max-h-[24px] flex items-start gap-[44px]">
          <a href="/" className={linkStyle}>
            <p>Features</p>
            <img
              src={isScroll ? activeArrow : arrow}
              alt="Arrow"
              className={arrowStyle}
            />
          </a>
          <a href="/" className={`${linkStyle} max-w-[126px]`}>
            <p>How it works</p>
            <img
              src={isScroll ? activeArrow : arrow}
              alt="Arrow"
              className={arrowStyle}
            />
          </a>
          <a href="/" className={`${linkStyle} max-w-[81px]`}>
            <p>Pricing</p>
            <img
              src={isScroll ? activeArrow : arrow}
              alt="Arrow"
              className={arrowStyle}
            />
          </a>
        </div>
        <div className=" h-[52px] flex items-center gap-[22px]">
          <button className={`${buttonStyle} max-w-[41px]`}>Docs</button>
          <button className={`${buttonStyle}`}>Demo</button>
          <button
            className={`${buttonStyle} px-[24px] py-[14px] rounded-xl 
            transition delay-100 ease-linear 
            ${
              isScroll
                ? 'bg-buttonBg hover:bg-indigo-600 hover:text-white'
                : 'border-2 hover:bg-white hover:text-black'
            }`}
          >
            <p className="w-[97px]">
              {isScroll ? 'Get started' : 'Try for free'}
            </p>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
