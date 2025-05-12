import React, { useEffect } from "react";
import ThreeDMe from "./3dMe";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    const mask = document.querySelector(".mask-clip-path");

    // Calcula a escala necessária para cobrir a viewport
    const scaleX = window.innerWidth / mask.offsetWidth;
    const scaleY = window.innerHeight / mask.offsetHeight;
    const finalScale = Math.max(scaleX, scaleY);

    const tl = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: "#clip",
        start: "top top",
        end: "+=800 top",
        scrub: true,   // sincroniza exatamente com o scroll
        pin: true,
      },
    });

    tl.to(mask, {
      scale: finalScale,
      transformOrigin: "center top",
    });

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <div id="about" className="min-h-screen w-screen flex flex-col bg-amber-50 ">
      {/* Cabeçalho / texto de introdução */}
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px]">
          Welcome to my Portfolio
        </h2>
        <div className="mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]">
          You{"'"}re about to dive into a world <br /> where anything is possible.
        </div>
        <div className="absolute bottom-[-80vh] left-1/2 w-full max-w-96 -translate-x-1/2 text-center font-circular text-lg md:max-w-[34rem] ">
          <p>"This is where programming, design, and 3D come together."</p>
          <p>Keep exploring.</p>
        </div>
      </div>

      {/* Seção com scroll-trigger */}
      <div id="clip" className="h-screen w-screen relative overflow-hidden">
        <div
          className="mask-clip-path absolute left-1/2 top-0 z-20 h-[60vh] w-96 -translate-x-1/2
                      overflow-hidden will-change-transform "
        >
         <div className="bg-black h-screen w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
