import React, { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TiltText = ({ tiltRef }) => {

    useGSAP(() => {
      gsap.from("#titleDiv", {
        opacity: 0,
        duration: 2,
        delay: 2,
        ease: "power2.in",
      });
    });
  return (
    <div id="titleDiv" ref={tiltRef} className="mt-20 sm:mt-24">
      <h1 className="text-[23vw] sm:text-[4.8vw] font-[anzo2] sm:font-[anzo4] leading-[25vw] sm:leading-[4vw]">
        I AM <span className="text-[#373737] sm:text-[#060606]">DARK MODE</span>
        ™
      </h1>
      <h1 className="text-[40vw] sm:text-[9vw] font-[anzo2] sm:font-[anzo1] leading-[25vw] sm:leading-[8vw] font-extrabold sm:tracking-tight">
        DESIGNER
      </h1>
      <h1 className="text-[25vw] sm:text-[4.6vw] font-[anzo2] sm:font-[anzo4] leading-[25vw] sm:leading-[4vw]">
        TO HIRE
      </h1>
    </div>
  );
};

export default TiltText;
