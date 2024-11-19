import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Experiences = () => {
  const href = useRef(null);
  const blackDivRef = useRef(null); // Reference for the black background div

  useEffect(() => {
    // GSAP animation for the text
    gsap.to(href.current, {
      translateX: "-100%",
      scrollTrigger: {
        trigger: blackDivRef.current, // Start when the section enters the viewport
        start: "top 0%", // Adjust the start position
        end: "top -100%", // Adjust the end position
        scrub: 2, // Smooth scrolling effect
        markers:true,
      },
    });
  }, []);

  return (
    <div className="w-full p-4">
      <div className="rounded-[30px] md:rounded-[50px] bg-black shadow-xl shadow-gray-700" ref={blackDivRef}>
          <h1 ref={href} className="text-white text-[30vw] font-[anzo1] uppercase">
            Experiences
          </h1>
      </div>
    </div>
  );
};

export default Experiences;
