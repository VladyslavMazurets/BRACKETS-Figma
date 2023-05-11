import React from 'react';

import group from '../assets/img/group.png';

function Home() {
  return (
    <div className="-mt-[100px]">
      <div
        className="h-screen bg-gradient-to-b 
        from-indigo-800 to-purple-600"
      >
        <div
          className="w-[689px] h-[425px] flex flex-col items-center 
         mx-auto gap-[44px] pt-[159px]"
        >
          <p
            className="h-[176px] w-[628px] flex flex-col items-center mt-[8px]
              text-center font-poppins font-bold text-[70px] text-white"
          >
            <span className="flex">
              New generation
              <img
                src={group}
                alt="Group_img"
                className="absolute left-[1265px] w-[32px] h-[40px] 
                  object-contain"
              />
            </span>
            of administration
          </p>
          <p>
            Create beautiful admin panel, CRM or CMS for your laravel
            application.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
