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
    <div className="fixed top-5 right-4 items-end justify-between h-full flex flex-col z-30 p-16">
      <div className="w-full flex items-center justify-end">
        <button
          onClick={() => handleHireMeClick()}
          className="animate-pulse px-12 py-3 border-4 border-gray-100 font-[anzo1] bg-zinc-900 hover:bg-[#d2d2d2] hover:text-zinc-800 hover:underline rounded-full text-sm cursor-pointer transition-colors duration-500"
        >
          Hire me
        </button>
        <i
          onClick={() => handleSidbarClick()}
          className="ri-more-2-fill font-extrabold ml-3 text-zinc-300 text-3xl cursor-pointer"
        ></i>
      </div>
      <div>
        <div id="bannerCircle">
          <img className="mb-4" src="/src/assets/rotateLogo1.webp" alt="" />
          <img src="/src/assets/rotateLogo2.webp" alt="" />
        </div>
      </div>
      {isSidebar && <Sidebar setIsSidebar={setIsSidebar} />}
      {slideMsg && <SliderMsg setSlideMsg={setSlideMsg} />}
    </div>
  );
};

export default Header;
