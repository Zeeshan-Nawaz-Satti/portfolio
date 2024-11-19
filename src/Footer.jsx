import { useRef, useEffect } from "react";
import gsap from "gsap";

const Footer = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      // Apply continuous rotation with correct target and configuration
      gsap.to(imageRef.current, {
        rotation: 360,
        duration: 10,
        repeat: -1,
        ease: "linear",
        transformOrigin: "center center", // Ensures rotation happens around the center
      });
    }
  }, []);

  return (
    <div className="relative h-screen p-4 mt-7">
      <div className="relative h-full w-full rounded-[50px] bg-black overflow-hidden flex flex-col justify-center items-center bg-cover" 
           style={{ backgroundImage: 'url(https://static.wixstatic.com/media/f1c650_1baf8f9dcad444669565ec73ee697a92~mv2.jpg/v1/fill/w_1861,h_831,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Background%20Anzo_Studio.jpg)' }}>
        
        <div className="flex flex-row items-center flex-wrap justify-around w-full p-11">
          <div className="flex flex-col gap-10 mb-10 text-left mt-10">
            <h1 className="text-[20vw] font-[anzo3] text-white leading-[0.8]">
              GOT <span className="text-gray-400">AN</span><br />
              <span className="mt-[-10px]">IDEA</span>
            </h1>
            <p className="text-gray-400 text-lg font-[anzo2] ml-0">
              IT IS NOT JUST ABOUT SOLVING THE PROBLEM
              <br /> <span>BUT</span><span className="font-[anzo] text-white"> OFFERING THE TRANSFORMATION!</span>
            </p>
          </div>

          <div className="flex items-center mt-auto justify-center mb-40">
            <img
              ref={imageRef}
              src="https://static.wixstatic.com/media/f1c650_7a84fb38cb2d4bebb8b34004f66d4c3d~mv2.png/v1/fill/w_128,h_128,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/World%20Contact.png"
              alt="contact"
              className="w-24 h-24 md:w-32 md:h-32 lg:w-32 lg:h-32"
            />
            <div className="m-11 border-r-2 border-white pr-4 h-32" />
            <p className="text-white text-left text-lg">
              <span className="text-gray-400">WORLD SERVICE</span><br />
              <span className="font-[anzo] text-lg">I CAN COME TO WHEREVER YOU ARE.</span><br />
              <span className="text-gray-400">+31 68 4564137</span>
            </p>
          </div>

          <div className="flex flex-col items-center mt-auto mb-10">
            <p className="text-lg text-white">© 2024 Anzo.Studio™</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
