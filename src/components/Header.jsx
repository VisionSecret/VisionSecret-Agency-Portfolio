import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
import Sidebar from "./Sidebar";
import SliderMsg from "./SliderMsg";

const Header = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  const [slideMsg, setSlideMsg] = useState(false);
  useGSAP(() => {
    gsap.to("#bannerCircle img", {
      rotate: 360,
      duration: 4,
      repeat: -1,
      ease: "linear",
    });
  });

  const handleHireMeClick = () => {
    setSlideMsg(true);
    setTimeout(() => {
      window.location.href =
        "mailto:alihassanr636@gmail.com?subject=Hire Me&body=I am interested in hiring you for a project. Please let me know how we can proceed.";
    }, 3000);
  };

  const handleSidbarClick = () => {
    setIsSidebar(!isSidebar);
  };

  return (
    <div className="fixed top-1 sm:top-5 right-1 sm:right-4 items-end justify-between h-[95%] sm:h-full flex flex-col z-30 px-5 py-12 sm:p-16">
      <div className="w-full flex items-center justify-end">
        <button
          onClick={() => handleHireMeClick()}
          className="shadow-sm shadow-black animate-pulse px-5 py-1.5 sm:px-12 sm:py-3 border-4 border-gray-100 font-[anzo1] bg-zinc-900 hover:bg-[#d2d2d2] hover:text-zinc-800 hover:underline rounded-full text-sm cursor-pointer transition-colors duration-500"
        >
          Hire me
        </button>
        <i
          onClick={() => handleSidbarClick()}
          className="ri-more-2-fill font-extrabold ml-2 sm:ml-3 text-zinc-300 text-xl sm:text-3xl cursor-pointer"
        ></i>
      </div>
      <div className="mt-10 sm:mt-0">
        <div id="bannerCircle">
          <img className="mb-2 sm:mb-4 h-14 w-14 sm:w-full sm:h-full" src="/images/rotateLogo1.webp" alt="" />
          <img className="mb-2 h-14 w-14 sm:w-full sm:h-full" src="/images/rotateLogo2.webp" alt="" />
        </div>
      </div>
      {isSidebar && <Sidebar setIsSidebar={setIsSidebar} />}
      {slideMsg && <SliderMsg setSlideMsg={setSlideMsg} />}
    </div>
  );
};

export default Header;
