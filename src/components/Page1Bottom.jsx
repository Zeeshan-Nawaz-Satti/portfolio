import { useEffect, useRef } from "react";
import gsap from "gsap";

const Page1Bottom = () => {
  const textRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);

  useEffect(() => {
    // Create a fade-up animation with a delay for the text
    gsap.fromTo(
      [textRef.current],
      {
        opacity: 0,  // Start as invisible
        y: 20,       // Start from 50px below its final position
      },
      {
        opacity: 1,  // Fade in to full opacity
        y: 0,        // Move to the final position (y = 0)
        duration: 1.5, // Duration of the animation
        delay: 0.5,    // Delay before the animation starts
        ease: "power2.out", // Smooth easing effect
      }
    );

     // Create a continuous rotation animation
     gsap.to([img1Ref.current, img2Ref.current], {
      rotation: 360,
      duration: 5,
      repeat: -1,
      ease: "linear"
    });
  }, []);

  return (
    <div className="absolute bottom-0 left-0 w-full px-10 py-10 sm:px-8 md:px-10 lg:px-16 lg:py-10 flex items-center justify-between">
      <div className="mt-10 md:mt-40 mb-0" ref={textRef}>
        <h2
          className="text-white text-lg sm:text-xl md:text-2xl font-[anzo1]"
        >
          BRAND DESIGN | WEBSITE DESIGN
        </h2>
        <h3
          className="text-gray-400 text-lg sm:text-xl md:text-2xl font-[anzo2]"
        >
          BESPOKE FREELANCE
        </h3>
      </div>
      <div className="flex flex-col items-center mb-0">
        <img
        ref={img1Ref}
          className="mb-5 h-16 sm:h-20 md:h-24"
          src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png"
          alt="image 1"
        />
        <img
        ref={img2Ref}
          className="h-16 sm:h-20 md:h-24"
          src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png"
          alt="image 2"
        />
      </div>
    </div>
  );
};

export default Page1Bottom;
