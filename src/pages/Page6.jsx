import React from "react";

const Page6 = () => {
  return (
    <div className="h-screen  relative py-2.5 px-6 bg-white z-10">
      <div className="bg-black h-full w-full rounded-[40px] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="object-cover h-full w-full"
          src="/videos/moon.mp4"
        ></video>
        <h1 className="uppercase font-[anzo2] text-[35vw] leading-[33vw] absolute left-24 bottom-2">
          ABOUT
        </h1>
      </div>
    </div>
  );
};

export default Page6;
