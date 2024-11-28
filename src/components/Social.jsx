import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Social = () => {
  useGSAP(() => {
    gsap.to(".socialContainer", {
      x: -3,
      right: window.innerWidth < 760 ? -4 : -0,
      duration: 2,
      ease: "power2",
    });
  });
  return (
    <div className="socialContainer fixed top-[34%] sm:top-[28%] -right-20 flex flex-col items-center justify-center z-50">
      <div className="socials bg-black rounded-md h-fit flex flex-col justify-around gap-2 p-2">
        {/* Linkedin Link */}
        <Link
          to="https://www.linkedin.com/in/vision-secret/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg sm:text-2xl font-light flex items-center"
        >
          <i className="sm:w-10 sm:h-10 h-8 w-8 text-white bg-[#0A66C2] flex items-center justify-center rounded-md mr-2 ri-linkedin-fill"></i>
        </Link>

        {/* Whatsapp Link */}
        <Link
          to="https://wa.me/+923096448573"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg sm:text-2xl font-light flex items-center"
        >
          <i className="sm:w-10 sm:h-10 h-8 w-8 text-white bg-[#25D366] flex items-center justify-center rounded-md mr-2 ri-whatsapp-line"></i>
        </Link>
        {/* Mail Link */}
        <Link
          to="mailto:ansali251@gmail.com?subject=Hire Me&body=I am interested in hiring you for a project. Please let me know how we can proceed."
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg sm:text-2xl font-light flex items-center"
        >
          <i className="sm:w-10 sm:h-10 h-8 w-8 text-white bg-[#D14836] flex items-center justify-center rounded-md mr-2 ri-mail-fill"></i>
        </Link>
        {/* Github Link */}
        <Link
          to="https://github.com/VisionSecret"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg sm:text-2xl font-light flex items-center"
        >
          <i className="sm:w-10 sm:h-10 h-8 w-8 text-white bg-[#2a2a2a] flex items-center justify-center rounded-md mr-2 ri-github-fill"></i>
        </Link>
        {/* Behance Link */}
        <Link
          to="https://www.behance.com/in/ansali251"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg sm:text-2xl font-light flex items-center"
        >
          <i className="sm:w-10 sm:h-10 h-8 w-8 text-white bg-[#1769FF] flex items-center justify-center rounded-md mr-2 ri-behance-fill"></i>
        </Link>
      </div>
    </div>
  );
};

export default Social;
