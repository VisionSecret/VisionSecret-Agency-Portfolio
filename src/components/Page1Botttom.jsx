import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Page1Botttom = () => {
  useGSAP(() => {
    gsap.from("#headings h4", {
      y: 60,
      opacity: 0,
      delay: 1.5,
      duration: 2,
      ease: "power2",
    });
    gsap.from("#headings h3", {
      x: -100,
      opacity: 0,
      delay: 2,
      duration: 2,
      ease: "power2",
    });
  });
  return (
    <div className="absolute bottom-0 sm:py-12 p-3.5 sm:px-20 left-0 flex items-end justify-between w-full">
      <div id="headings">
        <h4 className="text-sm sm:text-lg font-[anzo1]">
          BRAND DESIGNER | WEBSITE DEVEOLPER
        </h4>
        <h3 className="text-sm sm:text-lg font-[anzo3] text-gray-400">
          BESPOKE FREELANCE
        </h3>
      </div>
    </div>
  );
};

export default Page1Botttom;
