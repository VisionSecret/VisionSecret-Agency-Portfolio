import React from "react";

const Page3 = () => {
  return (
    <div className="h-screen relative flex items-center justify-center bg-white z-10">
      <img
        className="absolute z-20"
        src="/images/screen.webp"
        alt=""
      />
      <video
        className="h-[63vh] w-[48vw] relative object-cover z-10"
        src="/videos/file.mp4"
        autoPlay
        muted
        loop
      ></video>
      <div className="z-0 absolute top-[35%] h-0.5 w-[60%] bg-black"></div>
      <div className="z-0 absolute top-[53%] h-0.5 w-[74%] bg-black"></div>
      <div className="z-0 absolute top-[70%] h-0.5 w-[90%] bg-black"></div>
    </div>
  );
};

export default Page3;