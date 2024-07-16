import Image from "next/image";
import ArrowWIcon from "../assets/icons/arrow-w.svg";
import CursorImage from "../assets/images/cursor.png";
import MessageImage from "../assets/images/message.png";
import DraggableImage from "./DraggableImage";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="bg-black text-white bg-hero-gradient py-[72px] sm:py-24 overflow-clip relative">
      <div className="absolute h-[375px] w-[750px] sm:h-[768px] sm:w-[1536px] lg:h-[1200px] lg:w-[2400px] bg-black rounded-[100%] left-1/2 -translate-x-1/2 border border-[#B58CDE] bg-hero-radial-gradient top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>

      <div className="container relative">
        <div className="flex items-center justify-center group">
          <a href="#" className="inline-flex gap-3 border border-white/30 py-1 px-2 rounded-lg transition-all group-hover:px-4 group-hover:gap-4">
            <span className="bg-hero-link-gradient text-transparent bg-clip-text [-webkit-background-clip: text]">
              Version 2.0 is here
            </span>
            <span className="inline-flex items-center gap-1">
              <span>Read More</span>
              <ArrowWIcon className="group-hover:translate-x-1 group-hover:-rotate-45 transition" />
            </span>
          </a>
        </div>

        <div className="flex justify-center items-center">
          <div className="inline-flex relative">
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center mt-8 inline-flex">
              One Task<br /> at a time
            </h1>

            <DraggableImage
              src={CursorImage}
              className="right-[460px] top-[108px]"
            />
            
            <DraggableImage
              src={MessageImage}
              className="left-[498px] top-[56px]"
            />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <p className="text-center text-xl mt-8 max-w-md">
            Celebrate the joy of accomplishment with an app designed to track progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>

        <div className="flex justify-center items-center mt-8">
          <Button title="Get for free" />
        </div>
      </div>

    </div>
  );
}

export default Hero;