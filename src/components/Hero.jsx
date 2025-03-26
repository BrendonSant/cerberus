import React from "react";



const Hero = () => {
  return <div className="relative h-dvh w-screen overflow-x-hidden">
    <div id="video-frame" className="relative h-dvh w-screen overflow-hidden z-10 rounded-lg bg-blue-50">
      <div>
        <div className="mask-clip-path absolute-center absolute z-50 size-svh lg:size-full overflow-hidden 
        rounded-lg">
          <div>
           <video
           src="videos/header_video.mp4"
           autoPlay
           loop
           muted
           id="current-video"
           className="size-svh lg:size-full origin-center  object-cover object-center"
           />
          </div>
            <h1 className=" absolute hero-heading text-white bottom-5 right-70 z-40">
              santsmcb
            </h1>

        </div>
      </div>

    </div>
  </div>;
};

export default Hero;
