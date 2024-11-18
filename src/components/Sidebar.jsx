import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Sidebar = ({ setIsSidebar }) => {
  useGSAP(() => {
    gsap.to(".sidebar", {
      width: window.innerWidth < 768 ? "100%" : "30%",
      x: 40,
      duration: 1.5,
    });
    gsap.from(".sidebar ul li", {
      x: 80,
      duration: 1.7,
      opacity: 0,
      ease: "power2",
      stagger: 0.8,
    });
    gsap.from(".line", {
      x: 100,
      duration: 1.7,
      opacity: 0,
      ease: "power2",
      stagger: 0.8,
    });
    gsap.to(".copyright", {
      y: -10,
      duration: 1.5,
      ease: "power4",
    });
  });

  const handleSidbarClick = () => {
    gsap.to(".sidebar", {
      width: "0%",
      x: 0,
      duration: 1.5,
      ease: "back.in",
      onComplete: () => {
        setIsSidebar(false);
      },
    });
  };

  return (
    <div className="sidebar fixed top-3 right-0 w-full md:w-0 h-full sm:h-[96%] z-50 px-2 md:px-1 mr-5 overflow-hidden rounded-md bg-[#FAFAFA] shadow-lg transform transition-transform">
      <div className="flex justify-between items-center p-3 md:p-4 border-b text-black mx-3">
        <img className="h-[55px] object-cover" src="/images/desktopLogo.png" />
        <button
          onClick={() => handleSidbarClick()}
          className="close text-2xl md:text-4xl font-bold"
        >
          &times;
        </button>
      </div>
      <ul className="m-8 flex flex-col gap-4 items-start justify-center h-[70%] w-full">
        <li className="mb-4">
          <a
            href="/story"
            className="text-5xl text-gray-700 hover:text-gray-900 transition-all duration-300 font-[anzo3]"
          >
            Home
          </a>
          <div className="line border-b-[3px] border-gray-700"></div>
        </li>
        <li className="mb-4">
          <a
            href="/about"
            className="text-5xl text-gray-700 hover:text-gray-900 transition-all duration-300 font-[anzo3]"
          >
            About
          </a>
          <div className="line border-b-[3px] border-gray-700"></div>
        </li>
        <li className="mb-4">
          <a
            href="/work"
            className="text-5xl text-gray-700 hover:text-gray-900 transition-all duration-300 font-[anzo3]"
          >
            Work
          </a>
          <div className="line border-b-[3px] border-gray-700"></div>
        </li>
        <li className="mb-4">
          <a
            href="/contact"
            className="text-5xl text-gray-700 hover:text-gray-900 transition-all duration-300 font-[anzo3]"
          >
            Contact
          </a>
          <div className="line border-b-[3px] border-gray-700"></div>
        </li>
      </ul>

      <div className="copyright text-black text-[4vw] font-semibold sm:text-[1vw] text-center font-[alag anzo] px-3 pb-6">
        {/* © vS.agency 2024 to 2025 | designed and developed */}
        © Ans.Studio 2024 to 2025 | designed and developed.
      </div>
    </div>
  );
};

export default Sidebar;
