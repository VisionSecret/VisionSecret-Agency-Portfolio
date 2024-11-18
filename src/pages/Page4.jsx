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
    <div className="h-screen relative p-2 sm:py-2.5 sm:px-6 bg-white z-10">
      <div className="page4 bg-black h-full w-full rounded-2xl sm:rounded-[40px] overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src="/images/bgEarth.webp"
          alt=""
        />
      </div>
      <div className="absolute top-16 left-5 sm:top-[7%] sm:left-[8%]">
        <h1 className="text-[40vw] leading-[28vw] sm:text-[20vw] sm:leading-[16vw] font-[anzo2] uppercase text-gray-400">
          What
        </h1>
        <h1 className="text-[35vw] leading-[28vw] ml-1.5 sm:ml-0 sm:text-[20vw] sm:leading-[16vw] font-[anzo2] uppercase text-white">
          i do
        </h1>
      </div>
      <div className="bootomText w-full absolute bottom-[3%] sm:bottom-[5%] left-[8%]">
        <h2 className="heading1 text-lg text-white font-[anzo4] leading-tight">
          I DESIGN AND DEVELOP
        </h2>
        <h2 className="heading2 w-56 sm:w-full text-[4vw] sm:text-lg text-gray-400 font-[anzo3] leading-tight">
          MODERN, IMPACTFUL AND LUXURIOUS
        </h2>
        <h2 className="animate-bounce w-48 sm:w-full mt-5 sm:mt-0 text-xs sm:text-sm text-white font-[anzo3] font-light leading-tight">
          websites that seamlessly bridge your goals with needs of your clients.
        </h2>
      </div>
      <div
        id="bannerCircle"
        className="h-[22%] sm:h-[50%] absolute left-1/4 top-[40%] sm:left-3/4 sm:top-1/2 sm:-translate-x-3/4 sm:-translate-y-1/2"
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
