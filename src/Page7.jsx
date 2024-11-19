import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PropTypes from 'prop-types';
import circle from './assets/circle.png';

gsap.registerPlugin(ScrollTrigger);

const Page7 = () => {
  const imageRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Rotate the image continuously
    gsap.to(imageRef.current, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: 'linear',
    });

    // Fade-in/out effect for each section on scroll
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 30%',
            scrub: true,
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <div className="h-full p-4">
      <div className="relative h-full w-full p-4 rounded-[30px] md:rounded-[50px] bg-black">
        <div className="relative flex flex-col md:flex-row md:gap-80 p-8 md:p-11">
          <div className="relative z-10 mb-8 md:mb-0 ml-5">
            <h1 className="text-white font-[anzo3] text-[25vw] md:text-[20vw] lg:text-[15vw] xl:text-[20vw] md:-mt-20">
              RIGHT
            </h1>
            <h1 className="text-gray-400 font-[anzo3] text-[25vw] md:text-[20vw] lg:text-[15vw] xl:text-[20vw] -mt-20 md:-mt-60">
              FIT
            </h1>
            <div className="mt-12 md:mt-48">
              <p className="text-gray-300 font-[anzo2] text-[3vw] md:text-[2vw] lg:text-[1.1vw]">
                SOUNDS GOOD?
                <br />
                THEN PLEASE <span className="text-white font-[anzo1]">EMAIL ME</span>
              </p>
            </div>
          </div>

          <img
            ref={imageRef}
            className="absolute top-[50%] left-5 md:top-80 md:left-11 object-cover w-20 md:w-auto"
            src={circle}
            alt="circle"
          />

          <div className="p-4 md:p-0 mt-5">
            {sections.map((section, index) => (
              <Section
                key={index}
                ref={(el) => (sectionsRef.current[index] = el)}
                title={section.title}
                description={section.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Section = React.forwardRef(({ title, description }, ref) => (
    <div className="mb-6 md:mb-11" ref={ref}>
      <p className="text-gray-300 font-[anzo2] text-[4vw] md:text-[2vw] lg:text-[1.5vw]">{title}</p>
      <p className="text-white font-[anzo1] text-[3.5vw] md:text-[1.3vw] lg:text-[1.1vw]">{description}</p>
    </div>
  ));
  
  // Setting displayName to help with debugging
  Section.displayName = 'Section';
  
  // Define PropTypes for Section component
  Section.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };
  

// Sections data
const sections = [
  { title: 'PERSONALITY', description: 'Business relationships build on trust and compassion vs how can I get more for less +/-' },
  { title: 'APPROACH', description: 'Full dive into personality, goals and objectives with transparency of worq process vs template and unmanageable office routine +/-' },
  { title: 'DESIGN', description: 'Design that is actually functional and helps to achieve results is design that works +/-' },
  { title: 'FOCUS', description: 'How can I help and what can I do solve your problem or objective vs how can I sell you more +/-' },
  { title: 'FIT', description: 'The perfect suit is the one fits you vs the one you can fit in. Choose wisely you are investing in yourself! +/-' },
  { title: 'CORE VALUES', description: 'Time, trust and experience are resources we can not buy, yet we are sharing them and exchange +/-' },
  { title: 'TO CONSIDER', description: 'Your brand, your personal identity is the reflection of your passion and goals on your future; your first online impression matters +/-' },
];

export default Page7;
