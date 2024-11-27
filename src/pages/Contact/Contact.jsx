import { Label, Textarea, TextInput } from "flowbite-react";
import Header from "../../components/Header";
import Footer from "../Footer";
import Page1 from "../Page1";
import Testimonial from "../../components/Testimonial";
import Social from "../../components/Social";
import Cursor from "../Cursor";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useState } from "react";

export default function Contact() {
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);
  const handleMouseMove = (e) => {
    setXVal(e.screenX);
    setYVal(e.screenY);
  };
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".formDets .text", {
      opacity: 0,
      duration: 1.5,
      ease: "power2",
      scrollTrigger: {
        trigger: ".formDets",
        start: "top 60%",
        end: "top 40%",
        scrub: 1,
      },
    });
    gsap.from(".formData", {
      y: 200,
      opacity: 0,
      duration: 1.5,
      ease: "power2",
      scrollTrigger: {
        trigger: ".formDets",
        start: "top 60%",
        end: "top 40%",
        scrub: 1,
      },
    });
  });
  return (
    <>
      <div
        onMouseMove={(e) => handleMouseMove(e)}
        className="h-screen w-full bg-white"
      >
        <Cursor xVal={xVal} yVal={yVal} />
        <Header />
        <Social />
        <Page1 />
        <Testimonial />
        <form
          method="POST"
          action="https://formsubmit.co/alihassanr636@gmail.com"
          className="formDets w-full h-full flex flex-col justify-center items-center "
        >
          <h1 className="text text-[12vw] sm:text-[6vw] font-[anzo2] leading-[10vw] mt-12">
            Get in Touch
          </h1>
          <div className="formData h-full w-full flex flex-col justify-center items-center gap-4">
            <div className="w-3/4 sm:w-1/3">
              <div className="mb-2 block">
                <Label
                  htmlFor="name"
                  className="text-white font-[anzo4]"
                  value="Your Name"
                />
              </div>
              <TextInput
                id="name"
                type="text"
                className="placeholder:text-zinc-400"
                placeholder="name"
                required
                shadow
              />
            </div>
            <div className="w-3/4 sm:w-1/3">
              <div className="mb-2 block">
                <Label
                  htmlFor="subject"
                  className="text-white font-[anzo4]"
                  value="Subject"
                />
              </div>
              <TextInput
                id="subject"
                type="text"
                className="placeholder:text-zinc-400"
                placeholder="Ui/Ux Project"
                required
                shadow
              />
            </div>
            <div className="w-3/4 sm:w-1/3">
              <div className="mb-2 block">
                <Label
                  htmlFor="description"
                  className="text-white font-[anzo4]"
                  value="Description"
                />
              </div>
              <Textarea
                id="description"
                className="placeholder:text-zinc-400"
                placeholder="I am interested in hiring you for a project. Please let me know how we can proceed..."
                required
                rows={6}
                resize="vertical"
                shadow
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-between space-x-4 bg-[#155E75] rounded-lg px-4 py-2.5 group text-gray-400 hover:text-white cursor-pointer"
            >
              <i className="ri-briefcase-line text-xl group-hover:animate-bounce"></i>
              <span className="inline-block font-[anzo4]"> Hire now</span>
            </button>
          </div>
        </form>

        <Footer />
      </div>
    </>
  );
}
