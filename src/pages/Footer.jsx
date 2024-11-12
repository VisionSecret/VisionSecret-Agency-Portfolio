import React from "react";

const Footer = () => {
  return (
    <div className="relative h-screen w-full p-4 bg-white text-white overflow-hidden">
      <div className="h-full w-full rounded-[25px] overflow-hidden">
        <img src="/images/footerBg.webp" alt="footer" />
      </div>
      <div className="footer-texts">
        <h1 className="absolute top-[7%] left-20 text-[20vw] uppercase leading-[20vw] font-[anzo2]">
          Got <span className="text-[#9B9B9B]">an</span>
        </h1>
        <h1 className="absolute top-[35%] left-20 text-[20vw] uppercase leading-[24vw] font-[anzo2]">
          Idea
        </h1>
      </div>
      <div className="centerText w-[37%] absolute top-[70%] left-[60%] -translate-x-[60%] -translate-y-[70%] z-50">
        <div className="content flex items-center justify-between w-full">
          <div id="bannerCircle">
            <img
              src="/images/footerLogo.webp"
              alt=""
              className="rounded-full h-fit w-fit"
            />
          </div>
          <div className="line h-24 w-0.5 bg-white"></div>
          <div>
            <h2 className="text-lg font-[anzo3] font-bold text-[#686868]">
              WORLD SERVICE
            </h2>
            <h2 className="text-lg font-[anzo1] leading-6">
              I CAN COME TO WHEREVER YOU ARE.
            </h2>
            <a
              href="tel:+923096448573"
              className="text-lg font-[anzo3] font-semibold hover:font-normal hover:underline transition-colors duration-500 text-[#686868] cursor-pointer hover:text-[#fafafa] leading-7 tracking-tight"
            >
              +92 322 717 6568
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 py-12 px-20 left-0 flex items-end justify-between w-full">
        <div id="headings">
          <h4 className="animate-bounce text-lg font-[anzo3] font-medium text-[#858585] leading-4">
            IT IS NOT JUST ABOUT SOLVING THE PROBLEM
          </h4>
          <h3 className="text-lg font-[anzo1] text-white">
            <span className="font-[anzo3] text-[#858585]">BUT</span> OFFERING
            THE TRANSFORMATION!
          </h3>
        </div>
        <div className="copyright absolute bottom-12 left-[85%] transform -translate-x-[85%] font-[anzo1] text-lg text-center">
          © 2024 Ans.Studio™
        </div>
      </div>
    </div>
  );
};

export default Footer;
