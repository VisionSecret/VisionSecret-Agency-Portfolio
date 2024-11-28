import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutSection = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".service h1", {
      opacity: 0.1,
      stagger: 1.2,
      duration: 1.8,
      ease: "linear",
      scrollTrigger: {
        trigger: ".AboutWork",
        start: window.innerWidth < 760 ? "top 20%" : "top 25%",
        end: "top 7%",
        scrub: true,
        ease: "none",
      },
    });
    gsap.from(".line1", {
      x: -150,
      duration: 3,
      opacity: 0,
      ease: "power3",
      scrollTrigger: {
        trigger: ".AboutWork",
        start: window.innerWidth < 760 ? "top 21%" : "top 25%",
        end: "top 10%",
        scrub: true,
      },
    });
    gsap.from(".vision h1", {
      opacity: 0.1,
      stagger: 1.2,
      duration: 1.8,
      ease: "linear",
      scrollTrigger: {
        trigger: ".vision",
        start: window.innerWidth < 760 ? "top 20%" : "top 40%",
        end: "top 20%",
        scrub: true,
        ease: "none",
      },
    });
    gsap.from(".line2", {
      x: -150,
      duration: 3,
      opacity: 0,
      ease: "power3",
      scrollTrigger: {
        trigger: ".vision",
        start: window.innerWidth < 760 ? "top 21%" : "top 40%",
        end: "top 10%",
        scrub: true,
      },
    });
    gsap.from(".vision p", {
      opacity: 0,
      stagger: 1.2,
      duration: 2,
      ease: "linear",
      scrollTrigger: {
        trigger: ".vision",
        start: window.innerWidth < 760 ? "top 20%" : "top 24%",
        end: "top 10%",
        scrub: true,
        ease: "none",
      },
    });
    gsap.from(".research h1", {
      opacity: 0.1,
      stagger: 1.2,
      duration: 1.8,
      ease: "linear",
      scrollTrigger: {
        trigger: ".research",
        start: window.innerWidth < 760 ? "top 20%" : "top 40%",
        end: "top 20%",
        scrub: true,
        ease: "none",
      },
    });
    gsap.from(".line3", {
      x: -150,
      duration: 3,
      opacity: 0,
      ease: "power3",
      scrollTrigger: {
        trigger: ".research",
        start: window.innerWidth < 760 ? "top 21%" : "top 40%",
        end: "top 10%",
        scrub: true,
      },
    });
    gsap.from(".research p", {
      opacity: 0,
      stagger: 1.2,
      duration: 2,
      ease: "linear",
      scrollTrigger: {
        trigger: ".research",
        start: window.innerWidth < 760 ? "top 20%" : "top 24%",
        end: "top 10%",
        scrub: true,
        ease: "power2",
      },
    });
    gsap.from(".Opportunity h1", {
      opacity: 0.1,
      stagger: 1.2,
      duration: 1.8,
      ease: "linear",
      scrollTrigger: {
        trigger: ".Opportunity",
        start: window.innerWidth < 760 ? "top 20%" : "top 40%",
        end: "top 20%",
        scrub: true,
        ease: "none",
      },
    });
    gsap.from(".line4", {
      x: -150,
      duration: 3,
      opacity: 0,
      ease: "power3",
      scrollTrigger: {
        trigger: ".Opportunity",
        start: window.innerWidth < 760 ? "top 21%" : "top 40%",
        end: "top 10%",
        scrub: true,
      },
    });
    gsap.from(".Opportunity p", {
      opacity: 0,
      stagger: 1.2,
      duration: 2,
      ease: "linear",
      scrollTrigger: {
        trigger: ".Opportunity",
        start: window.innerWidth < 760 ? "top 20%" : "top 24%",
        end: "top 10%",
        scrub: true,
        ease: "power2",
      },
    });
    gsap.from(".solved h1", {
      opacity: 0.1,
      stagger: 1.2,
      duration: 1.8,
      ease: "linear",
      scrollTrigger: {
        trigger: ".solved",
        start: window.innerWidth < 760 ? "top 20%" : "top 40%",
        end: "top 20%",
        scrub: true,
        ease: "none",
      },
    });
    gsap.from(".line5", {
      x: -150,
      duration: 3,
      opacity: 0,
      ease: "power3",
      scrollTrigger: {
        trigger: ".solved",
        start: window.innerWidth < 760 ? "top 21%" : "top 40%",
        end: "top 10%",
        scrub: true,
      },
    });
    gsap.from(".solved p", {
      opacity: 0,
      stagger: 1.2,
      duration: 2,
      ease: "linear",
      scrollTrigger: {
        trigger: ".solved",
        start: window.innerWidth < 760 ? "top 20%" : "top 24%",
        end: "top 10%",
        scrub: true,
        ease: "power2",
      },
    });
    gsap.from(".result h1", {
      opacity: 0.1,
      stagger: 1.2,
      duration: 1.8,
      ease: "linear",
      scrollTrigger: {
        trigger: ".result",
        start: window.innerWidth < 760 ? "top 20%" : "top 40%",
        end: "top 20%",
        scrub: true,
        ease: "none",
      },
    });
    gsap.from(".line6", {
      x: -150,
      duration: 3,
      opacity: 0,
      ease: "power3",
      scrollTrigger: {
        trigger: ".result",
        start: window.innerWidth < 760 ? "top 21%" : "top 40%",
        end: "top 10%",
        scrub: true,
      },
    });
    gsap.from(".result p", {
      opacity: 0,
      stagger: 1.2,
      duration: 2,
      ease: "linear",
      scrollTrigger: {
        trigger: ".result",
        start: window.innerWidth < 760 ? "top 20%" : "top 24%",
        end: "top 10%",
        scrub: true,
        ease: "power2",
      },
    });
  }, []);
  return (
    <div className="AboutWork min-h-screen w-full p-6 bg-[#FAFAFA]">
      <div className="service textContent flex flex-col justify-center items-center mt-14">
        <h1 className="text-center font-[anzo2] text-[10vw] sm:text-[4.3vw] text-black">
          Services
        </h1>
        <h1 className="mt-5 sm:mt-10 text-black font-[anzo1] text-sm sm:text-lg">
          Brand UX Design / Web Design / Brand Marketing
        </h1>
        <div className="line1 h-0.5 w-3/4 sm:w-1/3 bg-black my-4"></div>
      </div>
      <div className="Image h-full w-full overflow-hidden">
        <img className="object-cover h-full w-full" src="/images/mobile.avif" />
      </div>
      <div className="vision textContent flex flex-col justify-center items-center mt-10">
        <h1 className="text-center font-[anzo2] text-[10vw] sm:text-[4.3vw] text-black">
          MY VISION
        </h1>
        <h1 className="mt-5 sm:mt-10 text-black font-[anzo1] text-xs sm:text-lg">
          Crafting a Digital Tapestry of Elegance and Functionality
        </h1>
        <div className="line2 h-0.5 w-3/4 sm:w-1/3 bg-black my-4"></div>
        <div className="mt-6 flex flex-col items-center justify-center">
          <p className="text-[2.6vw] sm:text-[1.2vw] w-3/4 sm:w-2/3 mt-3 font-[anzo4] text-center text-gray-600">
            My vision embarked on a journey to breathe digital life into the
            delicate yet powerful essence of the original design. Replication
            itself, was about infusing additional elements that not only
            represented the core idea but also elevated functionality and
            elegance of the prototype.
          </p>
          <p className="text-[2.6vw] sm:text-[1.2vw] w-3/4 sm:w-2/3 mt-3 font-[anzo4] text-center text-gray-600">
            In this pursuit, I envisioned a design that transcends the present,
            offering a blueprint for future custom endeavors and ideas of
            others. The web design, a digital canvas, became more than just
            responsive; it embraced fluidity while upholding the utmost
            transparency, ensuring a seamless translation of the brand and it's
            identity.
          </p>
          <p className="text-[2.6vw] sm:text-[1.2vw] w-3/4 sm:w-2/3 mt-3 font-[anzo4] text-center text-gray-600">
            This vision wasn't confined to the pixels on the screen; it aimed to
            create an immersive experience where every interaction mirrored the
            sophistication and purpose embedded in the brand.
          </p>
        </div>
      </div>
      <div className="research textContent flex flex-col justify-center items-center mt-14">
        <h1 className="text-center font-[anzo2] text-[10vw] sm:text-[4.3vw] text-black">
          RESEARCH
        </h1>
        <h1 className="mt-5 sm:mt-10 text-black font-[anzo1] text-sm sm:text-lg">
          Discovering Insights for Strategic Design
        </h1>
        <div className="line3 h-0.5 w-3/4 sm:w-1/3 bg-black my-4"></div>
        <div className="mt-6 flex flex-col items-center justify-center">
          <p className="text-[2.6vw] sm:text-[1.2vw] w-3/4 sm:w-2/3 mt-3 font-[anzo4] text-center text-gray-600">
            To unravel the intricacies of the project, I embarked on a dual
            journey – one that was personal yet profoundly professional. My
            research delved into understanding not only the project itself but
            also the nuances of the idea it aimed to encapsulate at the begining
            and projected stage
          </p>
          <p className="text-[2.6vw] sm:text-[1.2vw] w-3/4 sm:w-2/3 mt-3 font-[anzo4] text-center text-gray-600">
            A meticulous exploration of the potential audience became the
            compass guiding my design decisions. I sought out ideas that
            harmonized with the essence of the project, creating a synergy that
            would resonate with our intended audience and find success.
          </p>
          <p className="text-[2.6vw] sm:text-[1.2vw] w-3/4 sm:w-2/3 mt-3 font-[anzo4] text-center text-gray-600">
            In the realm of UI and UX, my approach was not just aesthetic; it
            was strategic planing. The design choices were carefully curated to
            serve as a language, translating the brand's identity seamlessly.
            This synthesis of research and design lays the foundation for an
            experience that not only captivates but resonates with the future
            audience on a profound level.
          </p>
        </div>
      </div>
      <div className="Opportunity textContent flex flex-col justify-center items-center mt-14">
        <h1 className="text-center font-[anzo2] text-[10vw] sm:text-[4.3vw] text-black">
          OPPORTUNITY
        </h1>
        <h1 className="mt-5 sm:mt-10 text-black font-[anzo1] text-sm sm:text-lg">
          Crafting Infinite Possibilities
        </h1>
        <div className="line4 h-0.5 w-3/4 sm:w-1/3 bg-black my-4"></div>
        <div className="mt-6 flex flex-col items-center justify-center">
          <p className="text-[2.6vw] sm:text-[1.2vw] w-3/4 sm:w-2/3 mt-3 font-[anzo4] text-center text-gray-600">
            In crafting a transparent, custom digital form of the initial
            prototype, I've not only preserved the essence of the brand but
            opened a gateway to endless opportunities. This strategic move
            empowers us to explore a multitude of variations for the idea
            seamlessly.
          </p>
          <p className="text-[2.6vw] sm:text-[1.2vw] w-3/4 sm:w-2/3 mt-3 font-[anzo4] text-center text-gray-600">
            The versatility of the design isn't confined to a static
            representation. It's a living canvas that allows for effortless
            expansions. Whether it's introducing new pages, services, or other
            idea's prototypes, the simplicity lies in adding an element to the
            initial website design. This not only ensures coherence but also
            transforms our digital space into an ever-evolving platform, ready
            to embrace the unfolding chapters of our brand's journey.
          </p>
          <p className="text-[2.6vw] sm:text-[1.2vw] w-3/4 sm:w-2/3 mt-3 font-[anzo4] text-center text-gray-600">
            In essence, what may seem like a design detail today becomes the key
            to unlocking tomorrow's innovations. This foresight not only saves
            time and resources but instills the brand with the agility to adapt,
            grow, and consistently captivate the audience with fresh, meaningful
            content.
          </p>
        </div>
      </div>
      <div className="Image h-full w-full overflow-hidden">
        <img className="object-cover h-full w-full" src="/images/Laptop.avif" />
      </div>
      <div className="solved textContent flex flex-col justify-center items-center">
        <h1 className="text-center font-[anzo2] text-[10vw] sm:text-[4.3vw] text-black">
          SOLVED
        </h1>
        <h1 className="mt-5 sm:mt-10 text-black font-[anzo1] text-sm sm:text-lg">
          Transforming Challenges into Design Triumphs
        </h1>
        <div className="line5 h-0.5 w-3/4 sm:w-1/3 bg-black my-4"></div>
        <div className="mt-6 flex flex-col items-center justify-center">
          <p className="text-[2.6vw] sm:text-[1.2vw] w-3/4 sm:w-2/3 mt-3 font-[anzo4] text-center text-gray-600">
            Embarking on the UX redesign, I sculpted an intuitive prototype,
            seamlessly improving the user experience. The logo transformation
            became an artful dance, integrating the client's artistic elements
            into a symbol of brand identity.
          </p>
          <p className="text-[2.6vw] sm:text-[1.2vw] w-3/4 sm:w-2/3 mt-3 font-[anzo4] text-center text-gray-600">
            The digital frontier demanded a website beyond aesthetics—a dynamic
            platform poised for growth. I engineered not just a site but a
            strategic space, offering both plasticity for future adaptations and
            a compelling canvas for brand storytelling.
          </p>
        </div>
      </div>
      <div className="result textContent flex flex-col justify-center items-center mt-14">
        <h1 className="text-center font-[anzo2] text-[10vw] sm:text-[4.3vw] text-black">
          RESULT
        </h1>
        <h1 className="mt-5 sm:mt-10 text-black font-[anzo1] text-sm sm:text-lg">
          A Symphony of Style and Character
        </h1>
        <div className="line6 h-0.5 w-3/4 sm:w-1/3 bg-black my-4"></div>
        <div className="mt-6 flex flex-col items-center justify-center">
          <p className="text-[2.6vw] sm:text-[1.2vw] w-3/4 sm:w-2/3 mt-3 font-[anzo4] text-center text-gray-600">
            In the pursuit of introducing a new brand to the market, I dedicated
            myself to a meticulous design process, ensuring every detail
            reflected the transparency of the underlying idea and the
            sophistication my client's brand aimed to embody.
          </p>
          <p className="text-[2.6vw] sm:text-[1.2vw] w-3/4 sm:w-2/3 mt-3 font-[anzo4] text-center text-gray-600">
            The outcome is more than a visual identity; it's a pure and elegant
            representation frozen in a moment. The logo stands as a testament to
            the seamless integration of the author's and product's essence with
            the brand, forging a connection that lingers in the minds of the
            audience.
          </p>
          <p className="text-[2.6vw] sm:text-[1.2vw] w-3/4 sm:w-2/3 mt-3 font-[anzo4] text-center text-gray-600">
            This endeavor wasn't just about creating a design; it was about
            curating an experience. The refined aesthetics not only elevate the
            brand but serve as a gateway to a world where every nuance tells a
            story, where the brand and the author's identity converge into a
            singular, compelling action and narrative.
          </p>
        </div>
      </div>
      <div className="video h-[100%] w-full overflow-hidden mt-10 sm:mt-20 rounded-3xl">
        <video
          autoPlay
          loop
          muted
          className="object-cover h-[800px] sm:h-[900px] w-full"
          src="/videos/mobile.mp4"
        ></video>
      </div>
    </div>
  );
};

export default AboutSection;
