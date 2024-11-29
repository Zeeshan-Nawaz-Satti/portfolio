import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';

const AnimatedSections = () => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const wrap = gsap.utils.wrap(0, 5); // Assuming 5 sections

  useEffect(() => {
    gsap.registerPlugin(Observer); // Register Observer plugin (no need for SplitText)

    let sections = document.querySelectorAll("section");
    let images = document.querySelectorAll(".bg");
    let headings = gsap.utils.toArray(".section-heading");
    let outerWrappers = gsap.utils.toArray(".outer");
    let innerWrappers = gsap.utils.toArray(".inner");

    // Initialize GSAP animations
    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });

    const gotoSection = (index, direction) => {
      index = wrap(index);
      let fromTop = direction === -1;
      let dFactor = fromTop ? -1 : 1;

      let tl = gsap.timeline({
        defaults: { duration: 1.25, ease: "power1.inOut" },
        onComplete: () => setCurrentIndex(index)
      });

      if (currentIndex >= 0) {
        gsap.set(sections[currentIndex], { zIndex: 0 });
        tl.to(images[currentIndex], { yPercent: -15 * dFactor })
          .set(sections[currentIndex], { autoAlpha: 0 });
      }
      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
      tl.fromTo([outerWrappers[index], innerWrappers[index]], {
        yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor),
      }, {
        yPercent: 0,
      }, 0)
        .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
        .fromTo(headings[index], {
          autoAlpha: 0,
          yPercent: 150 * dFactor,
        }, {
          autoAlpha: 1,
          yPercent: 0,
          duration: 1,
          ease: "power2",
        }, 0.2);
    };

    // Initialize first section
    gotoSection(0, 1);

    // Create observer to listen for scroll events
    Observer.create({
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => !currentIndex && gotoSection(currentIndex - 1, -1),
      onUp: () => !currentIndex && gotoSection(currentIndex + 1, 1),
      tolerance: 10,
      preventDefault: true,
    });
  }, [currentIndex, wrap]);

  return (
    <div>
      <header className="fixed flex justify-between items-center p-4 w-full z-30 bg-black text-white uppercase font-bold text-xs tracking-widest">
        <div>Animated Sections</div>
        <div>
          <a href="https://codepen.io/BrianCross/pen/PoWapLP" className="text-white">Original By Brian</a>
        </div>
      </header>

      <section className="first w-full h-screen fixed top-0">
        <div className="outer w-full h-full overflow-hidden">
          <div className="inner w-full h-full overflow-hidden">
            <div className="bg w-full h-full bg-cover bg-center relative">
              <h2 className="section-heading z-20 text-white text-center text-3xl">Scroll down</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="second w-full h-screen fixed top-0">
        <div className="outer w-full h-full overflow-hidden">
          <div className="inner w-full h-full overflow-hidden">
            <div className="bg w-full h-full bg-cover bg-center relative">
              <h2 className="section-heading z-20 text-white text-center text-3xl">Animated with GSAP</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="third w-full h-screen fixed top-0">
        <div className="outer w-full h-full overflow-hidden">
          <div className="inner w-full h-full overflow-hidden">
            <div className="bg w-full h-full bg-cover bg-center relative">
              <h2 className="section-heading z-20 text-white text-center text-3xl">GreenSock</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="fourth w-full h-screen fixed top-0">
        <div className="outer w-full h-full overflow-hidden">
          <div className="inner w-full h-full overflow-hidden">
            <div className="bg w-full h-full bg-cover bg-center relative">
              <h2 className="section-heading z-20 text-white text-center text-3xl">Animation platform</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="fifth w-full h-screen fixed top-0">
        <div className="outer w-full h-full overflow-hidden">
          <div className="inner w-full h-full overflow-hidden">
            <div className="bg w-full h-full bg-cover bg-center relative">
              <h2 className="section-heading z-20 text-white text-center text-3xl">Keep scrolling</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnimatedSections;
