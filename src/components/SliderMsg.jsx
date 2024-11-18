import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const SliderMsg = ({ setSlideMsg }) => {
  useGSAP(() => {
    // Adding a cool animation effect by making the message slide in from the top
    gsap.from(".msg", {
      y: -100,
      duration: 1.5,
      ease: "power2",
      opacity: 0,
    });
    gsap.to(".msg", {
      scale: window.innerWidth < 768 ? 0.7 : 1.1,
      duration: 1.5,
      ease: "power2.in",
      onComplete: () =>
        setTimeout(() => {
          gsap.to(".msg", {
            scale: window.innerWidth < 768 ? 0.6 : 0.9,
            duration: 1.2,
            ease: "power2.Out",
            onComplete: () => setSlideMsg(false),
          });
        }, 2200),
    });
  });
  return (
    <div className="msg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#fafafa] h-40 w-96 z-50 shadow-lg rounded-lg p-4">
      <h2 className="text-3xl text-gray-700 mb-1.5 font-[anzo2]">
        Message Sent! ✉
      </h2>
      <p className="text-gray-600 font-[anzo3]">
        Hey! 👋 <br />
        Your message has been sent to the developer. Thanks for contacting us.
        We will let you know very soon.
      </p>
    </div>
  );
};

export default SliderMsg;
