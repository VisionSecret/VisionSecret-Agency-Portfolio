import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Cursor = ({ xVal, yVal }) => {
  const cursorRef = useRef(null);

  useGSAP(
    function () {
      gsap.to(cursorRef.current, {
        x: xVal,
        y: yVal,
        duration: 2.3,
        ease: "power4",
      });
    },
    [xVal, yVal]
  );

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 -translate-x-0 -translate-y-0 flex justify-center items-center bg-white h-20 w-20 rounded-full z-50"
    >
      <h1 className="text-[2vw] text-center text-zinc-800 font-bold font-[anzo2]">
        vS AGENCY.
      </h1>
    </div>
  );
};

export default Cursor;
