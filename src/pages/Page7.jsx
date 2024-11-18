import React, { useEffect, useState } from "react";

const Page7 = () => {
  const [isScreenBig, setIsScreenBig] = useState(window.innerWidth > 760);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenBig(window.innerWidth > 760);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isScreenBig) {
    return (
      <>
        <div className="relative bg-[url(/images/roketImage.webp)] bg-no-repeat bg-top">
          <img
            className="h-[120vh] w-full object-cover"
            src="/images/bgStar.webp"
            alt=""
          />
          <h1 className="z-20 absolute top-[60%] font-[anzo2] left-[75%] text-[12vw] text-black">
            HARD
          </h1>
        </div>
      </>
    );
  }

  return null;
};

export default Page7;
