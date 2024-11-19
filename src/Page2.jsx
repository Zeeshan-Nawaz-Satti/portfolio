import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {
  const titlesRef = useRef([]);

  useEffect(() => {
    titlesRef.current.forEach((title) => {
      gsap.fromTo(
        title,
        { rotateX: 90, opacity: 0 },
        {
          rotateX: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: title,
            start: "top bottom", // Animation triggers when title reaches the bottom of the viewport
            end: "top 80%", // Animation ends when the title is 80% up the viewport
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="text-center p-10">
      <h3 className="text-gray-500 text-2xl font-[anzo2]">
        © anzo.studio 2024 | designed and developed
      </h3>
      <div className="mt-20">
        <h1
          ref={(el) => (titlesRef.current[0] = el)}
          className="text-[42vw] uppercase font-[anzo3] leading-[35vw]"
        >
          IMPACTFUL
        </h1>
      </div>
      <div>
        <h1
          ref={(el) => (titlesRef.current[1] = el)}
          className="text-[42vw] uppercase font-[anzo3] leading-[35vw]"
        >
          IS THE
        </h1>
      </div>
      <div>
        <h1
          ref={(el) => (titlesRef.current[2] = el)}
          className="text-[42vw] uppercase font-[anzo3] leading-[35vw]"
        >
          DESIGN
        </h1>
      </div>
      <div>
        <h1
          ref={(el) => (titlesRef.current[3] = el)}
          className="text-[42vw] uppercase font-[anzo3] leading-[35vw]"
        >
          THAT
        </h1>
      </div>
      <div>
        <h1
          ref={(el) => (titlesRef.current[4] = el)}
          className="text-[42vw] uppercase font-[anzo3] leading-[35vw]"
        >
          WORKS!
        </h1>
      </div>
    </div>
  );
};

export default Page2;
