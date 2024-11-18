import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Page5 = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(function () {
    gsap.from("#nextText", {
      transform: "rotateX(-70deg)",
      opacity: 0,
      duration: 2,
      stagger: 1,
      scrollTrigger: {
        trigger: "#nextText",
        start: window.innerWidth < 760 ? "top 65%" : "top 65%",
        end: window.innerWidth < 760 ? "top 10%" : "top -370%",
        scrub: 1, // Adjusted scrub value for smoother animation
      },
    });
  });

  return (
    <div
      id="section3"
      className="bg-[#FAFAFA] overflow-hidden text-black p-0 z-10"
    >
      <div id="nextText" className="mt-10">
        <h1 className="uppercase text-black text-center text-[36vw] leading-[35vw] font-[anzo2]">
          HELPING
        </h1>
      </div>
      <div id="nextText">
        <h1 className="uppercase text-black text-center text-[36vw] leading-[35vw] font-[anzo2]">
          MY
        </h1>
      </div>
      <div id="nextText">
        <h1 className="uppercase text-black text-center text-[36vw] leading-[35vw] font-[anzo2]">
          CLIENTS
        </h1>
      </div>
      <div id="nextText">
        <h1 className="uppercase text-black text-center text-[36vw] leading-[35vw] font-[anzo2]">
          TO ACHIEVE
        </h1>
      </div>
      <div id="nextText">
        <h1 className="uppercase text-black text-center text-[36vw] leading-[35vw] font-[anzo2]">
          THEIR
        </h1>
      </div>
      <div id="nextText">
        <h1 className="uppercase text-black text-center text-[36vw] leading-[35vw] font-[anzo2]">
          Dreams!
        </h1>
      </div>
    </div>
  );
};

export default Page5;
