import React, { useEffect, useState } from "react";

const Footer = () => {
  const [isScreenBig, setIsScreenBig] = useState(window.innerWidth > 760);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenBig(window.innerWidth > 760);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative h-screen w-full p-2 sm:p-4 bg-white text-white overflow-hidden">
      <div className="h-full w-full rounded-2xl sm:rounded-[25px] overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src="/images/footerBg.webp"
          alt="footer"
        />
      </div>
      <div className="footer-texts">
        <h1 className="flex flex-col sm:flex-row absolute top-16 left-5 sm:top-[7%] sm:left-20 text-[40vw] sm:text-[20vw] uppercase leading-[31vw] sm:leading-[20vw] font-[anzo2]">
          Got <br /> <span className="text-[#9B9B9B]">an</span>
        </h1>
        <h1 className="absolute top-[31%] sm:top-[35%] left-5 sm:left-20 text-[42vw] sm:text-[20vw] uppercase leading-[64vw] sm:leading-[24vw] font-[anzo2]">
          Idea
        </h1>
      </div>
      <div className="centerText ml-4 sm:ml-0 w-full sm:w-[37%] absolute top-[70%] left-[60%] -translate-x-[60%] -translate-y-[70%] z-20">
        <div className="content flex items-center sm:justify-between w-full">
          <div id="bannerCircle" className="w-1/5 sm:w-fit ml-4 sm:ml-0">
            <img
              src="/images/footerLogo.webp"
              alt=""
              className="rounded-full h-10 w-10 object-cover sm:h-fit sm:w-fit"
            />
          </div>
          <div className="line h-24 w-0.5 mr-2 sm:mr-0 bg-white"></div>
          <div className="TextArea w-3/4 sm:w-fit ml-1.5 sm:ml-2">
            <h2 className="text-xs sm:text-lg font-[anzo3] font-bold text-[#686868]">
              Global Reach, Local Impact
            </h2>
            <h2 className="text-[7px] sm:text-sm font-[alag anzo] leading-4 sm:leading-6 underline">
              Bringing Solutions to You, No Matter Where You Are.
            </h2>
            <a
              href="tel:+923096448573"
              className="text-xs sm:text-lg font-[anzo3] font-semibold hover:font-normal hover:underline transition-colors duration-500 text-[#686868] cursor-pointer hover:text-[#fafafa] leading-7 tracking-tight"
            >
              +92 322 717 6568
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 py-12 px-20 left-0 flex items-end justify-between w-full">
        {isScreenBig && (
          <div id="headings">
            <h4 className="animate-bounce text-lg font-[anzo3] font-medium text-[#858585] leading-4">
              IT IS NOT JUST ABOUT SOLVING THE PROBLEM
            </h4>
            <h3 className="text-lg font-[anzo1] text-white">
              <span className="font-[anzo3] text-[#858585]">BUT</span> OFFERING
              THE TRANSFORMATION!
            </h3>
          </div>
        )}
        <div className="copyright absolute left-7 bottom-5 sm:bottom-12 sm:left-[85%] sm:transform sm:-translate-x-[85%] font-[anzo1] text-sm sm:text-lg sm:text-center">
          © 2024 Ans.Studio™
        </div>
      </div>
    </div>
  );
};

export default Footer;
