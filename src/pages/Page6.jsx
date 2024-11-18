import React from "react";

const Page6 = () => {
  return (
    <div className="h-screen relative p-3 sm:py-2.5 sm:px-6 bg-white z-10">
      <div className="bg-black h-full w-full rounded-3xl sm:rounded-[40px] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="object-cover h-full w-full"
          src="/videos/moon.mp4"
        ></video>
        <h1 className="uppercase font-[anzo2] text-[35vw] leading-[33vw] absolute left-7 bottom-4 sm:left-24 sm:bottom-2">
          ABOUT
        </h1>
      </div>
    </div>
  );
};

export default Page6;
