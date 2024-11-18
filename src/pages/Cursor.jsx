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
      className="hidden fixed top-0 left-0 -translate-x-0 -translate-y-0 sm:flex justify-center items-center bg-white h-20 w-20 rounded-full z-50"
    >
      <h1 className="text-[2.2vw] text-center text-zinc-800 font-semibold font-[anzo2]">
        {/* vS AGENCY. */}
        ans.STUDIO
      </h1>
    </div>
  );
};

export default Cursor;
