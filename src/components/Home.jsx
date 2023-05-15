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
      <div className="relative z-30 h-[757px] bg-gradient pt-[159px]">
        <div
          className="relative z-30 max-w-[689px] flex flex-col
          items-center mx-auto gap-[44px]"
        >
          <p
            className="h-[176px] min-w-[628.5px] flex flex-col items-center 
            mt-[8px] text-center font-poppins font-bold text-[70px] text-white 
            leading-[87.5px]"
          >
            New generation
            <br />
            of administration
          </p>
          <p
            className="min-w-[628.5px] font-hind text-white text-[22px] 
            leading-[150%]"
          >
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

          <img
            src={group}
            alt="Group_img"
            className="absolute top-0 
           left-[634px]"
          />

          <img
            src={homeBg}
            alt="HomeBg"
            className="absolute z-[-100] right-1 top-[40px] w-[492px] 
         h-[507px] blur-[10px]"
          />

          <img
            src={vector}
            alt="Vector_Img"
            className="absolute z-10 right-[-180px] top-[-38px] w-[256px] 
          h-[540px]"
          />
        </div>

        <img
          src={dotPattern}
          alt="Patern_Img"
          className="absolute z-10 right-0 top-[191px] w-[895px] h-[864.43px]"
        />
      </div>

      <div className="flex items-center justify-center">
        <div
          className="absolute z-30 top-[613px] w-[1000px] h-[488px]
       flex items-start justify-center backdrop-blur-[6.5px] xl:w-[1353px]
       xl:h-[688px]"
        >
          <img
            src={section}
            alt="Section_Img"
            className={`w-[768px] h-[453px] block object-cover rounded-[22px] 
            cursor-pointer shadow-navSchadow border-[1px] border-navBorder
            xl:w-[1120px] xl:h-[658px]`}
          />
          <img
            src={leftArrow}
            alt="Left_Arrow"
            className="absolute left-[45px] top-[200px] block cursor-pointer 
            xl:top-[307px]"
          />
          <img
            src={rightArrow}
            alt="Right_Arrow"
            className="absolute right-[32px] top-[188px] block cursor-pointer
            xl:top-[297px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
