import { useRef, useState } from "react";
import { useEffect } from "react";
import gsap from "gsap";
import TiltText from "./components/TiltText";
import Page1Bottom from "./components/Page1Bottom";

const Page1 = () => {
  const tiltRef = useRef(null);
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);

  const mouseMoving = (e) => {
    const rect = tiltRef.current.getBoundingClientRect();
    const centerX = rect.x + rect.width / 2;
    const centerY = rect.y + rect.height / 2;

    // Calculate both horizontal and vertical tilt values
    setXVal((e.clientX - centerX) / 10); // Left-to-right and right-to-left
    setYVal((centerY - e.clientY) / 10); // Top-to-bottom and bottom-to-top
  };

  useEffect(() => {
    if (tiltRef.current) {
      gsap.to(tiltRef.current, {
        rotationX: yVal, // Vertical tilt
        rotationY: xVal, // Horizontal tilt
        duration: 0.3,
        ease: "power3.out",
        transformPerspective: 1000, // Adds a 3D effect
        transformOrigin: "center center", // Ensures proper rotation origin
      });
    }
  }, [xVal, yVal]);

  return (
    <div
      id="page1"
      onMouseMove={(e) => mouseMoving(e)}
      className="h-screen p-7 relative bg-white"
    >
      <div
        className="p-[60px] shadow-xl shadow-gray-700 h-full bg-cover w-full rounded-[50px] bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1861,h_831,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg)] 
          sm:p-[40px] md:p-[50px] lg:p-[60px] xl:p-[70px] 
          sm:rounded-[30px] md:rounded-[40px] lg:rounded-[50px] xl:rounded-[60px] 
          bg-center bg-no-repeat"
      >
        <img
          className="h-20 ml-4 sm:h-16 md:h-18 lg:h-20"
          src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png"
          alt="logo"
        />
        <TiltText titleref={tiltRef} />
        <Page1Bottom />
      </div>
    </div>
  );
};

export default Page1;
