import React, { useState, useEffect } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";


gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [loadedVideo, setLoadedVideo] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);

  // Verifica se a página já está carregada ou adiciona o listener
  useEffect(() => {
    if (document.readyState === "complete") {
      setPageLoaded(true);
    } else {
      const handleWindowLoad = () => setPageLoaded(true);
      window.addEventListener("load", handleWindowLoad);
      return () => {
        window.removeEventListener("load", handleWindowLoad);
      };
    }
  }, []);

  useGSAP(() => {
    gsap.set('#video-frame', {
      clipPath:'polygon(21% 4%, 69% 2%, 93% 95%, 13% 91%)',
     
      
    });

    gsap.from('#video-frame', {
      clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: 3,
      },
    });
  });

  // O loader aparece enquanto o vídeo ou a página não estiver carregado
  const isLoading = !loadedVideo || !pageLoaded;

  return (
    <div className="relative h-screen w-screen overflow-x-hidden bg-amber-50">
      {isLoading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-blue-50">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}
      <div
        id="video-frame"
        className="relative h-screen w-screen overflow-hidden z-10 bg-blue-50"
      >
        <div>
          <div className="absolute inset-0 overflow-hidden">
            <video
              onCanPlayThrough={() => setLoadedVideo(true)}
              src="videos/Main_video_1.mp4"
              autoPlay
              loop
              muted
              preload="auto"
              id="current-video"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <h1 className="absolute font-orbitron hero-heading text-white bottom-5 right-10 z-40">
              {/* Exibido apenas em telas menores que lg */}
              <span className="block lg:hidden text-left">
                art <br /> code <br /> design
              </span>
              {/* Exibido apenas em telas lg e maiores */}
              <span className="hidden lg:inline">
                design
                <br />
                art/code
              </span>
            </h1>
            <div className="absolute left-0 top-0 size-full z-40 w-fit">
              <div className="mt-24 px-5 sm:px-10">
                <div className="flex flex-col items-start justify-center text-center h-full">
                  <span className="block font-orbitron hero-heading text-white text-center">
                    santsmcb
                  </span>
                  <span className="mt-2 text-center font-general text-white text-sm md:text-md md:ml-10 lg:text-lg lg:ml-16">
                    {"<"}Blending code, design, and 3D art <br />
                    into digital experiences.{">"}
                  </span>
                  <div className="flex w-full mt-4 px-4">
                    <Button
                      id="follow"
                      title="Follow for more"
                      leftIcon={<TiLocationArrow />}
                      rightIcon={""}
                      containerClass="!bg-tertiary flex-center gap-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="absolute font-orbitron hero-heading text-black bottom-5 right-10">
        {/* Exibido apenas em telas menores que lg */}
        <span className="block lg:hidden text-left">
          art <br /> code <br /> design
        </span>
        {/* Exibido apenas em telas lg e maiores */}
        <span className="hidden lg:inline">
          design
          <br />
          art/code
        </span>
      </h1>
    </div>
  );
};

export default Hero;
