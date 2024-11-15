import React, { useRef, useState } from "react";
import Page1Botttom from "../components/Page1Botttom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TiltText from "../components/TiltText";

const Page1 = () => {
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);
  const tiltRef = useRef(null);
  const handleMouseMove = (e) => {
    setXVal(
      (e.clientX -
        tiltRef.current.getBoundingClientRect().x -
        tiltRef.current.getBoundingClientRect().width / 2) /
        30
    );
    setYVal(
      -(
        e.clientY -
        tiltRef.current.getBoundingClientRect().y -
        tiltRef.current.getBoundingClientRect().height / 2
      ) / 10
    );
  };

  useGSAP(
    function () {
      gsap.to(tiltRef.current, {
        transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
        duration: 3.4,
        ease: "power4.out",
      });
    },
    [xVal, yVal]
  );
  return (
    <div
      onMouseMove={(e) => handleMouseMove(e)}
      className="h-screen w-full bg-white p-4 overflow-x-hidden z-30"
    >
      <div
        id="page1-in"
        className="shadow-lg shadow-gray-600 p-16 h-full w-full rounded-[33px] bg-cover bg-[url(/images/bgHomeImage3.jpg)] z-10"
      >
        <img
          src="/images/desktopLogo.png"
          alt="brandLogo"
          className="h-[65px] invert"
        />
        <TiltText tiltRef={tiltRef} />
        <Page1Botttom />
      </div>
    </div>
  );
};

export default Page1;
