import Sun from './assets/SUN.png'; 
import Earth from './assets/EARTH.png'; 
import Startup from './assets/START.png'; 
import Arrow from './assets/arrow.svg'; 

const Page5 = () => {
    return (
      <div className="relative h-full p-4 mt-10">
        <div className="h-full w-full p-4 rounded-[50px] bg-black flex flex-col items-center bg-[url(https://static.wixstatic.com/media/f1c650_e5c1c4b281ea418a8663a17e66f283f1~mv2.png/v1/fill/w_777,h_668,al_c,q_90,enc_auto/triangle%203.png)] bg-no-repeat bg-center">
          
          {/* Header section */}
          <div className="flex w-full justify-between flex-wrap">
            <div className="ml-4 md:ml-16">
              <h1 className="text-[15vw] md:text-[20vw] font-[anzo3] text-gray-400">HOW</h1>
              <h1 className="text-[15vw] md:text-[20vw] font-[anzo3] text-white leading-[2vw]">CAN</h1>
            </div>
            <div className="mr-4 md:mr-16">
              <h1 className="text-[15vw] md:text-[20vw] font-[anzo3] text-white">I HELP</h1>
              <h1 className="text-[15vw] md:text-[20vw] font-[anzo3] text-white leading-[2vw]">YOU</h1>
            </div>
          </div>
  
          {/* Paragraphs section */}
          <div className="flex w-full justify-between gap-6 flex-row flex-wrap mt-20 md:mt-40 p-6 md:p-14">
            <div className="p-4 text-left flex-1 min-w-[250px] md:min-w-[300px]">
              <p className="text-gray-400 text-lg md:text-2xl font-[anzo1]">I am a self-taught web and brand designer with a passion for creating unique and timeless masterpieces for ambitious professionals, entrepreneurs, artists, and boutique businesses.</p>
              <div className="flex items-center gap-10">
                <p className="mt-6 md:mt-10 text-gray-400 text-lg md:text-2xl font-[anzo1]">Bespoke Freelance for agencies.</p>
                <img 
                  src={Arrow} 
                  alt="Arrow Logo" 
                  className="h-8 w-8 md:h-10 md:w-10 mt-4 md:mt-5" 
                  style={{ filter: 'invert(100%)' }} 
                />
              </div>
              <div className='flex mt-6 md:mt-10 gap-5'>
              <img src={Sun} alt="Sun" className="h-16 w-16 md:h-20 md:w-20" />
                 <h2 className="text-white text-[8vw] md:text-[4vw] font-[anzo3] mt-1">DESIGN <span className="font-[anzo1] text-[2vw] md:text-[1vw]">01</span></h2>
                 </div>
            </div>
            <div className="p-4 text-left flex-1 min-w-[250px] md:min-w-[300px]">
              <p className="text-gray-400 text-lg md:text-2xl font-[anzo1]">With a background in strategic marketing and acknowledged expertise in web development, I aim to minimize my client resources spent on macro and micro-management, marketing research, and hiring a whole team of a larger agency.</p>
              <div className='flex mt-6 md:mt-10 gap-5'>
              <img src={Earth} alt="Earth" className="h-16 w-16 md:h-20 md:w-20" />
              <h2 className="text-white text-[8vw] md:text-[4vw] font-[anzo3] mt-1">DEVELOPMENT <span className="font-[anzo1] text-[2vw] md:text-[1vw]">02</span></h2>
              </div>
            </div>
            <div className="p-4 text-left flex-1 min-w-[250px] md:min-w-[300px]">
              <p className="text-gray-400 text-lg md:text-2xl font-[anzo1]">My mission is to drive exceptional growth for my clients by increasing their brand appearance, defining their identity, and engaging customers through captivating black-and-white aesthetics with a modern, luxurious, and minimalistic touch.</p>
              <div className='flex mt-6 md:mt-10 gap-5'>
              <img src={Startup} alt="Startup" className="h-16 w-16 md:h-20 md:w-20" />
              <h2 className="text-white text-[8vw] md:text-[4vw] font-[anzo3] mt-2">BRANDING <span className="font-[anzo1] text-[2vw] md:text-[1vw]">03</span></h2>
              </div>
            </div>
          </div>

          {/* Contact section */}
          <div className="flex w-full justify-between gap-6 flex-row flex-wrap p-6 md:p-14 -mt-10 md:-mt-20">
            <div className="p-4 text-left">
              <h3 className="text-gray-400 text-lg md:text-2xl font-[anzo2]">GOT A PROJECT?</h3>
              <h3 className="text-gray-400 text-lg md:text-2xl font-[anzo2]">THEN PLEASE <span className="text-white font-[anzo1]">CONTACT ME</span></h3>
            </div>
            <div className="p-4 text-left flex gap-5 md:gap-7">
              <img 
                src={Arrow} 
                alt="Arrow Logo" 
                className="h-10 w-10 md:h-14 md:w-14 place-items-center" 
                style={{ filter: 'invert(100%)' }} 
              />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Page5;
