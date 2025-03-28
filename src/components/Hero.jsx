import React from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

const Hero = () => {
  return (
    <div className="relative h-screen w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative h-screen w-screen overflow-hidden z-10 bg-blue-50"
      >
        <div>
          <div className="absolute inset-0 z-50 overflow-hidden">
            <video
              src="videos/Main_video_1.mp4"
              //autoPlay
              loop
              muted
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
            <div className="absolute left-0 top-0 size-full z-40">
              <div className=" mt-24 px-5 sm:px-10 ">
                <div className=" flex flex-col items-start text-center h-full">
                <spam className="block font-orbitron hero-heading  text-white  text-center">
                santsmcb
                </spam>
                <spa></spa>
                <span className="mt-2  text-center font-general text-white text-sm md:text-md md:ml-10 lg:text-lg lg:ml-16">
                  {"<"}Blending code, design, and 3D art <br/>
                  into digital experiences.{">"}
                </span>
                <Button
                id='watch'
                title="Watch"
                leftIcons={<TiLocationArrow/>}
                containerClass="bg-tertiary flex-center gap-1"
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
