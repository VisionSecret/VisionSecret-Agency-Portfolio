import React, { useState } from "react";
import Footer from "../Footer";
import Header from "../../components/Header";
import Social from "../../components/Social";
import Cursor from "../Cursor";
import AboutSection from "../../components/AboutSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);
  const handleMouseMove = (e) => {
    setXVal(e.screenX);
    setYVal(e.screenY);
  };

  useEffect(() => {
    window.location.reload();
  }, []);
  useGSAP(() => {
    gsap.from(".titleDiv", {
      x: -120,
      opacity: 0,
      duration: 2,
      delay: 0.7,
      ease: "power3",
    });
    gsap.from(".image", {
      opacity: 0,
      duration: 1.6,
      delay: 1,
      ease: "power2",
    });
  });
  return (
    <div
      onMouseMove={(e) => handleMouseMove(e)}
      className="h-full w-full bg-white py-2 text-black overflow-x-hidden"
    >
      <Cursor xVal={xVal} yVal={yVal} />
      <Header />
      <Social />
      <div className="relative sm:flex h-[95vh] sm:h-screen bg-zinc-900 mx-3 sm:mx-5 rounded-3xl bg-cover bg-[url(/images/bgHomeImage1.jpg)]">
        <div className="titleDiv w-full sm:w-1/2 pl-10 sm:pl-28 py-20 sm:py-12 flex flex-col items-start justify-center sm:mt-16 z-40">
          {/* About page text on the right side */}
          <h1 className="text-[25vw] sm:text-[14vw] font-[anzo2] font-bold leading-[13vw] mb-6">
            About Us
          </h1>
          <p className="text-[4vw] sm:text-[1.1vw] font-halvetica w-[92%] leading-5 text-zinc-300">
            We are a passionate team of{" "}
            <span className="text-zinc-100 text-[17px] underline font-[anzo4]">
              Frontend Developers
            </span>{" "}
            and{" "}
            <span className="text-zinc-100 text-[17px] underline font-[anzo4]">
              UI/UX Designers{" "}
            </span>
            from Pakistan, dedicated to crafting responsive and user-centric web
            applications. By blending creativity with functionality, we create
            engaging digital experiences that elevate brands, enhance user
            satisfaction, and drive impactful results.
          </p>
          <a
            href="https://github.com/VisionSecret"
            target="_blank"
            class="flex items-center gap-2 px-5 py-3 bg-zinc-800 text-white font-medium rounded-lg shadow-md hover:bg-zinc-700 transition duration-300 ease-in-out mt-8 sm:mt-10 group"
          >
            <i class="ri-github-fill text-xl group-hover:animate-spin"></i>
            <span className="font-[anzo4]">View on GitHub</span>
          </a>
        </div>
        <div className="w-full sm:w-1/2 flex items-center justify-start sm:mt-10 ml-32 sm:ml-52">
          <img
            src="/images/avatarImg.png"
            alt="About Image"
            className="image object-cover bg-center h-96 w-fit"
          />
        </div>
      </div>
      <AboutSection />
      <Footer />
    </div>
  );
};

export default About;
