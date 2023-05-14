import React from 'react';

import group from '../assets/img/group.png';
import arrow from '../assets/img/arrow.png';
import homeBg from '../assets/img/home-bg.png';
import vector from '../assets/img/Vector.png';
import dotPattern from '../assets/img/dot-pattern.svg';
import section from '../assets/img/section.png';
import leftArrow from '../assets/img/left-arrow.png';
import rightArrow from '../assets/img/right-arrow.png';

function Home() {
  return (
    <div className="-mt-[100px]">
      <div className="relative z-40 h-[757px] bg-gradient">
        <div
          className="relativ z-50 max-w-[689px] flex flex-col 
          items-center mx-auto gap-[44px] pt-[159px]"
        >
          <p
            className="h-[176px] max-w-[628px] flex flex-col items-center 
            mt-[8px] text-center font-poppins font-bold text-[70px] text-white 
            leading-[125%]"
          >
            New generation
            <br />
            of administration
          </p>
          <p className="font-hind text-white text-[22px] leading-[150%]">
            Create beautiful <strong>admin panel, CRM or CMS </strong> for your
            <strong> laravel application.</strong>
          </p>

          <div
            className="w-[251px] h-[128px] flex flex-col items-center 
          gap-[24px]"
          >
            <button
              className="w-[180px] h-[52px] font-poppins text-base
              leading-[150%] px-[44px] py-[14px] bg-buttonBg rounded-xl
              transition delay-100 ease-linear hover:bg-indigo-600 
              hover:text-white"
            >
              Get started
            </button>
            <a
              href="/"
              className="flex items-center py-[14px] px-[24px] font-poppins
            gap-[12px] text-base text-white cursor-pointer"
            >
              <p>Explore more features</p>
              <img
                src={arrow}
                alt="Arrow"
                className="w-[12px] h-[16px] 
              object-cover"
              />
            </a>
          </div>

          <img src={group} alt="Group_img" className="absolute right-[635px]" />
        </div>

        <img
          src={homeBg}
          alt="HomeBg"
          className="absolute z-[-100] left-[800px] top-[191px] w-[492px] 
        h-[507px] blur-[10px]"
        />

        <img
          src={vector}
          alt="Vector_Img"
          className="absolute z-20 right-[400px] top-[121px] w-[256px] 
          h-[540px]"
        />

        <img
          src={dotPattern}
          alt="Patern_Img"
          className="absolute z-10 right-0 top-[191px] w-[895px] h-[864.43px]"
        />
      </div>

      <div
        className="absolute z-40 top-[613px] left-[283.5px] w-[1353px] h-[658px]
       flex items-center justify-center backdrop-blur"
      >
        <img
          src={section}
          alt="Section_Img"
          className={`w-[1120px] h-[658px] block object-cover rounded-xl 
          cursor-pointer`}
        />
        <img
          src={leftArrow}
          alt="Left_Arrow"
          className="absolute left-[45px] top-[307px] block cursor-pointer"
        />
        <img
          src={rightArrow}
          alt="Right_Arrow"
          className="absolute right-[32px] top-[297px] block cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Home;
