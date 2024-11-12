import React from "react";

const TiltText = ({ tiltRef }) => {
  return (
    <div id="titleDiv" ref={tiltRef} className="mt-24">
      <h1 className="text-[4.8vw] font-[anzo4] leading-[4vw] tracking-tight">
        I AM <span className="text-black">DARK MODE</span>™
      </h1>
      <h1 className="text-[9vw] font-[anzo1] leading-[8vw] font-extrabold tracking-tight">
        DESIGNER
      </h1>
      <h1 className="text-[4.6vw] font-[anzo4] leading-[4vw]">TO HIRE</h1>
    </div>
  );
};

export default TiltText;