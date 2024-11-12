import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Page4 = () => {
  useGSAP(() => {
    gsap.from(".heading1", {
      y: 60,
      opacity: 0,
      delay: 1.5,
      duration: 4,
      ease: "power2",
      scrollTrigger: {
        trigger: ".page4",
        start: "top 5%",
        end: "top -0%",
        scrub: 4,
      },
    });
    gsap.from(".heading2", {
      x: -100,
      opacity: 0,
      delay: 2,
      duration: 4,
      ease: "power2",
      scrollTrigger: {
        trigger: ".page4",
        start: "top 5%",
        end: "top -0%",
        scrub: 4,
      },
    });
  });
  return (
    <div className="h-screen relative py-2.5 px-6 bg-white z-10">
      <div className="page4 bg-black h-full w-full rounded-[40px] overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src="/images/bgEarth.webp"
          alt=""
        />
      </div>
      <div className="absolute top-[7%] left-[8%]">
        <h1 className="text-[20vw] leading-[16vw] font-[anzo2] uppercase text-gray-400">
          What
        </h1>
        <h1 className="text-[20vw] leading-[16vw] font-[anzo2] uppercase text-white">
          i do
        </h1>
      </div>
      <div className="bootomText absolute bottom-[5%] left-[8%]">
        <h2 className="heading1 text-lg text-white font-[anzo4 leading-tight]">
          I DESIGN AND DEVELOP
        </h2>
        <h2 className="heading2 text-lg text-gray-400 font-[anzo3] leading-tight">
          MODERN, IMPACTFUL AND LUXURIOUS
        </h2>
        <h2 className="animate-bounce text-lg text-white font-[anzo3] font-light leading-tight tracking-tight">
          websites that seamlessly bridge your goals with needs of your clients.
        </h2>
      </div>
      <div
        id="bannerCircle"
        className="h-[50%] absolute left-3/4 top-1/2 -translate-x-3/4 -translate-y-1/2"
      >
        <img
          className="object-cover w-full h-full"
          src="/images/earth.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default Page4;
