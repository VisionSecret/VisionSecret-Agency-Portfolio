import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Testimonial = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".testimonials .text", {
      opacity: 0,
      duration: 1.5,
      ease: "circ.in",
      scrollTrigger: {
        trigger: ".testimonials",
        start: "top 60%",
        end: "top 40%",
        scrub: 1,
      },
    });
    gsap.from(".testimonial1", {
      x: -120,
      opacity: 0,
      duration: 1.5,
      ease: "circ.in",
      scrollTrigger: {
        trigger: ".testimonials",
        start: "top 60%",
        end: "top 40%",
        scrub: 1,
      },
    });
    gsap.from(".testimonial2", {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "circ.in",
      scrollTrigger: {
        trigger: ".testimonials",
        start: window.innerWidth < 760 ? "top 3o%" : "top 60%",
        end: window.innerWidth < 760 ? "top 20%" : "top 40%",
        scrub: 1,
      },
    });
    gsap.from(".testimonial3", {
      x: 120,
      opacity: 0,
      duration: 1.5,
      ease: "circ.in",
      scrollTrigger: {
        trigger: ".testimonials",
        start: window.innerWidth < 760 ? "top 25%" : "top 60%",
        end: window.innerWidth < 760 ? "top 12%" : "top 40%",
        scrub: 1,
      },
    });
  });
  return (
    <div className="testimonials min-h-screen w-full p-4 bg-white overflow-hidden">
      <div className="h-full rounded-3xl bg-zinc-900">
        <h1 className="text text-[6vw] font-[anzo2] leading-[10vw] text-zinc-100 text-center">
          Vision's Team
        </h1>
        <div className="flex items-center flex-wrap p-10">
          {/* Testimonial 1 */}
          <div className="testimonial1 lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                src="/images/ansImg.jpg"
              />
              <p className="leading-relaxed">
                I am passionate about creating intuitive and visually appealing
                user interfaces. With expertise in responsive web design, mobile
                app design, and prototyping, I focus on crafting seamless
                digital experiences that balance aesthetics with functionality.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 className="text-white font-medium title-font tracking-wider text-sm">
                Ans ALi
              </h2>
              <p className="text-gray-500">Senior Product Designer</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="testimonial2 lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                src="/images/aliImg.jpg"
              />
              <p className="leading-relaxed">
                I am a skilled frontend developer specializing in building
                responsive and interactive web interfaces. Proficient in modern
                frameworks and clean code practices, he transforms designs into
                seamless, user-friendly digital experiences.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 className="text-white font-medium title-font tracking-wider text-sm">
                Muhammad ALi
              </h2>
              <p className="text-gray-500">Frontend Developer</p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="testimonial3 lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                src="/images/ansImg.jpg"
              />
              <p className="leading-relaxed">
                Ans Ali is a creative marketer with expertise in crafting
                impactful campaigns and strategies. Skilled in audience analysis
                and brand positioning, he delivers results-driven solutions that
                boost engagement and drive growth.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 className="text-white font-medium title-font tracking-wider text-sm">
                Ans ali
              </h2>
              <p className="text-gray-500">Skilled Marketer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
