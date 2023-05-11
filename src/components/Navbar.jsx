import React from 'react';

import logo from '../assets/img/logo.png';
import arrow from '../assets/img/arrow.png';

const linkStyle = `w-[96px] h-[24px] flex items-center gap-[12px] font-poppins 
text-white text-base cursor-pointer`;
const arrowStyle = 'w-[12px] h-[16px]';
const buttonStyle = 'font-poppins text-base text-white';

function Navbar() {
  return (
    <nav
      className="sticky top-0 mx-auto max-w-[1200px] h-[100px] flex 
      items-center py-[24px] gap-[88px] bg-transparent border-0 border-solid"
    >
      <a href="/">
        <img src={logo} alt="Logo" className="h-[35px] w-[194px]" />
      </a>
      <div className="w-[561px] max-h-[24px] flex items-start gap-[44px]">
        <a className={linkStyle}>
          <p>Features</p>
          <img src={arrow} alt="Arrow" className={arrowStyle} />
        </a>
        <a className={`${linkStyle} w-[126px]`}>
          <p>How it works</p>
          <img src={arrow} alt="Arrow" className={arrowStyle} />
        </a>
        <a className={`${linkStyle} w-[81px]`}>
          <p>Pricing</p>
          <img src={arrow} alt="Arrow" className={arrowStyle} />
        </a>
      </div>
      <div className="w-[269px] h-[52px] flex items-center gap-[22px]">
        <button className={`${buttonStyle} w-[41px]`}>Docs</button>
        <button className={`${buttonStyle} w-[49px]`}>Demo</button>
        <button
          className={`${buttonStyle} px-[24px] py-[14px] border-2 
        rounded-[12px] hover:bg-white hover:text-black`}
        >
          <p className="w-[87px]">Try for free</p>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
