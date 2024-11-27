import React, { useRef, useState } from "react";
import Page1Botttom from "../components/Page1Botttom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TiltText from "../components/TiltText";
import { Link } from "react-router-dom";

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
      className="h-screen w-full bg-white p-1.5 sm:p-4 overflow-x-hidden z-30"
    >
      <div
        id="page1-in"
        className="shadow-md sm:shadow-lg shadow-gray-600 p-4 sm:p-16 h-full w-full rounded-2xl sm:rounded-[33px] bg-cover bg-[url(/images/bgHomeImage1.jpg)] z-10 overflow-hidden"
      >
        <Link to={"/"}>
          <img
            src="/images/desktopLogo.png"
            alt="brandLogo"
            className="h-[50px] mt-6 sm:m-0 sm:h-[65px] invert"
          />
        </Link>
        <TiltText tiltRef={tiltRef} />
        <Page1Botttom />
      </div>
    </div>
  );
};

export default Page1;