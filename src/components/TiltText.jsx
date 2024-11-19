import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const TiltText = () => {
  const textRef = useRef(null);
  const textRef2 = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      // Apply a stronger tilt effect by increasing the range for rotationX and rotationY
      const rotationX = ((clientY / innerHeight) - 0.5) * 20; // More tilt on top and bottom
      const rotationY = ((clientX / innerWidth) - 0.5) * 15;  // Slightly less tilt on left and right

      // Animate tilt using GSAP
      gsap.to(textRef.current, {
        rotationX: -rotationX,
        rotationY: rotationY,
        transformPerspective: 600,
        ease: 'power2.out',
        duration: 0.4
      });
    };
    // Fade up effect with smooth transition
    gsap.fromTo(
      textRef2.current,
      {
        opacity: 0,    // Initial opacity is 0 (invisible)
        y: 100,        // Start slightly below its final position (y = 100)
      },
      {
        opacity: 1,    // Fade in to full opacity
        y: 0,          // Move to the final position (y = 0)
        duration: 1.5,  // Duration of the animation (adjusted for smoothness)
        delay: 0.5,     // Delay before the animation starts
        ease: 'power2.out', // Smooth easing effect for gradual transition
      }
    );
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };

    
  }, []);

  
  

  return (
    <>
    <div ref={textRef} className="mt-40" id='tilttext'>
      <h1 className="text-[6vw] sm:text-[4.3vw] text-white leading-[5vw] sm:leading-[4vw] uppercase font-[anzo4]">
        I am <span className="text-black" ref={textRef2}>DARK MODE <span className='text-white'>™</span></span>
      </h1>
      <h1 className="text-[10vw] sm:text-[8.2vw] text-white leading-[8vw] sm:leading-[7vw] uppercase font-[anzo]">
        DESIGNER
      </h1>
      <h1 className="text-[6vw] sm:text-[4.3vw] text-white leading-[5vw] sm:leading-[4vw] uppercase font-[anzo4]">
        TO HIRE
      </h1>
    </div>
    <style>
      {`#tilttext{
        width: fit-content;
      }`}
    </style>
    </>
  );
};

export default TiltText;
