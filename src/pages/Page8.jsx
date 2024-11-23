import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Page8 = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".faqs h2", {
      opacity: 0.2,
      stagger: 1.2,
      ease: "linear",
      scrollTrigger: {
        trigger: ".WorkPage",
        start: window.innerWidth < 760 ? "top 22%" : "top 25%",
        end: "top -100%",
        scrub: true,
        ease: "none",
      },
    });
    gsap.from(".faqs p", {
      opacity: 0.2,
      stagger: 1.2,
      ease: "linear",
      scrollTrigger: {
        trigger: ".WorkPage",
        start: window.innerWidth < 760 ? "top 20%" : "top 20%",
        end: "top -100%",
        scrub: true,
        ease: "none",
      },
    });
    gsap.to(".svgImage", {
      rotation: window.innerWidth < 760 ? 15 : 20,
      scrollTrigger: {
        trigger: ".WorkPage",
        start: window.innerWidth < 760 ? "top 15%" : "top 5%",
        end: window.innerWidth < 760 ? "top -50%" : "top -100%",
        scrub: true,
        ease: "none",
      },
    });
    gsap.from(".emailText .text1", {
      x: -100,
      duration: 1.3,
      opacity: 0,
      ease: "power2",
      scrollTrigger: {
        trigger: ".WorkPage",
        start: window.innerWidth < 760 ? "top -7%" : "top -20%",
        end: window.innerWidth < 760 ? "top -18%" : "top -30%",
      },
    });
    gsap.from(".emailText .text2", {
      x: -100,
      duration: 1.3,
      delay: 0.7,
      ease: "power2",
      opacity: 0,
      scrollTrigger: {
        trigger: ".WorkPage",
        start: window.innerWidth < 760 ? "top -7%" : "top -20%",
        end: window.innerWidth < 760 ? "top -18%" : "top -30%",
      },
    });
  });

  return (
    <div className="WorkPage min-h-[94vh] w-full p-2 sm:p-4 bg-white text-white overflow-hidden">
      <div className="relative h-full w-full bg-black rounded-2xl sm:rounded-[25px] sm:flex overflow-hidden">
        <div className="sm:flex flex-col justify-between h-fit sm:h-full sm:w-[40%] p-7 sm:px-14 sm:py-8">
          <div className="textDiv relative">
            <h1 className="text-[28vw] sm:text-[20vw] uppercase leading-[32vw] sm:leading-[24vw] font-[anzo2]">
              Right
            </h1>
            <h1 className="text-[28vw] sm:text-[20vw] text-[#9B9B9B] uppercase leading-[10vw] font-[anzo2]">
              Fit
              <div className="svgImage absolute top-[85%] sm:top-[100%] left-36 rotate-[130deg]  sm:-rotate-[130deg] rounded-full invert object-cover bg-white">
                <svg
                className="h-9 w-9 sm:h-fit sm:w-fit"
                  preserveAspectRatio="xMidYMid meet"
                  data-bbox="20 20 160 160"
                  viewBox="20 20 160 160"
                  height="50"
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                  data-type="shape"
                  role="presentation"
                  aria-hidden="true"
                  aria-label=""
                >
                  <g>
                    <path
                      d="M100 20c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80zm35.533 91.251l-30.37 28.03a7.27 7.27 0 0 1-2.264 1.434 7.221 7.221 0 0 1-2.697.515c-.066 0-.135 0-.203-.003-1.836.038-3.688-.587-5.144-1.931L64.468 111.25a7.292 7.292 0 0 1-.413-10.305 7.291 7.291 0 0 1 10.305-.413l18.547 17.118V59.185a7.293 7.293 0 1 1 14.586 0v58.098l18.148-16.749a7.293 7.293 0 0 1 9.892 10.717z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    ></path>
                  </g>
                </svg>
              </div>
            </h1>
          </div>
        </div>
        <div className="faqs w-full sm:w-[70%] px-5 py-2 sm:px-10 sm:py-20">
          <div className="flex flex-col h-full sm:w-[90%]">
            <div className="w-full mb-2 sm:mb-7">
              <h2 className="text-[#959595] text-lg sm:text-lg font-[anzo3]">
                PERSONALITY
              </h2>
              <p className="text-[#ddd] text-xs sm:text-lg leading-4 sm:leading-6 font-[anzo4]">
                Business relationships build on trust and compassion vs how can
                I get more for less +/-
              </p>
            </div>
            <div className="w-full mb-2 sm:mb-7">
              <h2 className="text-[#959595] text-lg sm:text-lg font-[anzo3]">
                APPROACH
              </h2>
              <p className="text-[#ddd] text-xs sm:text-lg leading-4 sm:leading-6 font-[anzo4]">
                Full dive into personality, goals and objectives with
                transparency of worq process vs template and unmanageable office
                routine +/-
              </p>
            </div>
            <div className="w-full mb-2 sm:mb-7">
              <h2 className="text-[#959595] text-lg sm:text-lg font-[anzo3]">
                DESIGN
              </h2>
              <p className="text-[#ddd] text-xs sm:text-lg leading-4 sm:leading-6 font-[anzo4]">
                Design that is actually functional and helps to achieve results
                is design that works +/-
              </p>
            </div>
            <div className="w-full mb-2 sm:mb-7">
              <h2 className="text-[#959595] text-lg sm:text-lg font-[anzo3]">
                FOCUS
              </h2>
              <p className="text-[#ddd] text-xs sm:text-lg leading-4 sm:leading-6 font-[anzo4]">
                How can I help and what can I do solve your problem or objective
                vs how can I sell you more +/-
              </p>
            </div>
            <div className="w-full mb-2 sm:mb-7">
              <h2 className="text-[#959595] text-lg sm:text-lg font-[anzo3]">
                FIT
              </h2>
              <p className="text-[#ddd] text-xs sm:text-lg leading-4 sm:leading-6 font-[anzo4]">
                The perfect suit is the one fits you vs the one you can fit in.
                Choose wisely you are investing in yourself! +/-
              </p>
            </div>
            <div className="w-full mb-2 sm:mb-7">
              <h2 className="text-[#959595] text-lg sm:text-lg font-[anzo3]">
                CORE VALUES
              </h2>
              <p className="text-[#ddd] text-xs sm:text-lg leading-4 sm:leading-6 font-[anzo4]">
                Time, trust and experience are resources we can not buy, yet we
                are sharing them and exchange +/-
              </p>
            </div>
            <div className="w-full mb-2 sm:mb-7">
              <h2 className="text-[#959595] text-lg sm:text-lg font-[anzo3]">
                TO CONSIDER
              </h2>
              <p className="text-[#ddd] text-xs sm:text-lg leading-4 sm:leading-6 font-[anzo4]">
                Your brand, your personal identity is the reflection of your
                passion and goals on your future; your first online impression
                matters +/-
              </p>
            </div>
          </div>
        </div>
        <div className="emailText sm:absolute bottom-5 left-10 ml-5 my-8 sm:m-0">
          <h2 className="text1 text-sm sm:text-lg font-[anzo3] leading-4 sm:leading-4 text-zinc-500">
            SOUNDS GOOD?
          </h2>
          <h2 className="text2 text-sm sm:text-lg font-[anzo3] leading-4 sm:leading-5 text-zinc-500">
            THEN PLEASE &nbsp;
            <a
              className="text-sm sm:text-lg font-[anzo4] hover:underline duration-700 text-white"
              href="mailto:/ansali251@gmail.com"
            >
              EMAIL ME
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Page8;
