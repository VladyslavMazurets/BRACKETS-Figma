import React from 'react';

import group from '../assets/img/group.png';
import arrow from '../assets/img/arrow.png';
import homeBg from '../assets/img/home-bg.png';
import vector from '../assets/img/Vector.png';
import patern from '../assets/img/pattern.png';
import section from '../assets/img/section.png';

function Home() {
  return (
    <div className="-mt-[100px]">
      <div className="relative z-40 h-screen bg-gradient">
        <div
          className="relativ z-50 w-[689px] flex flex-col 
          items-center mx-auto gap-[44px] pt-[159px]"
        >
          <p
            className="h-[176px] w-[628px] flex flex-col items-center mt-[8px]
              text-center font-poppins font-bold text-[70px] text-white 
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
              hover:bg-indigo-600 hover:text-white"
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
            className="absolute right-[640px] 
                  object-cover"
          />
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
          className="absolute z-20 right-[400px] top-[120px] w-[256px] 
          h-[540px]"
        />

        <img
          src={patern}
          alt="Patern_Img"
          className="absolute z-10 right-0 top-[191px] w-[895px] h-[864.43px]
          object-cover"
        />
      </div>

      <div
        className="absolute z-40 top-[613px] left-[328px] w-[1353px]
       h-[658px]"
      >
        <img src={section} alt="Section_Img" />
      </div>
    </div>
  );
}

export default Home;
