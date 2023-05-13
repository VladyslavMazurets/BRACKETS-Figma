import React from 'react';

import logo from '../assets/img/logo.png';
import arrow from '../assets/img/arrow.png';

const linkStyle = `h-[24px] flex items-center gap-[12px] 
font-poppins text-white text-base cursor-pointer`;
const arrowStyle = 'max-w-[12px] h-[16px] object-cover';
const buttonStyle = 'font-poppins text-base text-white';

function Navbar() {
  return (
    <nav
      className="sticky z-50 top-0 mx-auto max-w-[1200px] h-[100px] flex 
      items-center py-[24px] gap-[88px] bg-transparent border-0 border-solid"
    >
      <a href="/">
        <img src={logo} alt="Logo" className="h-[35px] w-[194px]" />
      </a>
      <div className="w-[561px] max-h-[24px] flex items-start gap-[44px]">
        <a href="/" className={linkStyle}>
          <p>Features</p>
          <img src={arrow} alt="Arrow" className={arrowStyle} />
        </a>
        <a href="/" className={`${linkStyle} max-w-[126px]`}>
          <p>How it works</p>
          <img src={arrow} alt="Arrow" className={arrowStyle} />
        </a>
        <a href="/" className={`${linkStyle} max-w-[81px]`}>
          <p>Pricing</p>
          <img src={arrow} alt="Arrow" className={arrowStyle} />
        </a>
      </div>
      <div className="max-w-[269px] h-[52px] flex items-center gap-[22px]">
        <button className={`${buttonStyle} max-w-[41px]`}>Docs</button>
        <button className={`${buttonStyle} max-w-[49px]`}>Demo</button>
        <button
          className={`${buttonStyle} px-[24px] py-[14px] border-2 
        rounded-xl hover:bg-white hover:text-black`}
        >
          <p className="w-[87px]">Try for free</p>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
