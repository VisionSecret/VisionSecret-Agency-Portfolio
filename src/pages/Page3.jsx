import React from "react";

const Page3 = () => {
  return (
    <div className="sm:h-screen h-[40vh] relative flex items-center justify-center bg-white z-10 ">
      <img className="absolute z-20" src="/images/screen.webp" alt="" />
      <video
        className="sm:h-[63vh] h-[54%] w-[73vw] sm:w-[48vw] relative object-cover z-10"
        src="/videos/file.mp4"
        autoPlay
        muted
        loop
      ></video>
      <div className="z-0 absolute top-36 sm:top-[35%] h-0.5 w-[85%] bg-black"></div>
      <div className="z-0 absolute top-44 sm:top-[53%] h-0.5 w-[90%] bg-black"></div>
      <div className="z-0 absolute top-52 sm:top-[70%] h-0.5 w-[95%] bg-black"></div>
    </div>
  );
};

export default Page3;