import { useEffect, useState } from "react";
import linkedin from "../../assets/home/linkedin.svg";
import instagram from "../../assets/home/instagram.svg";
import xw from "../../assets/home/x-white.png";

const Carousel = () => {
  const websitesLength = 3;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2500);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % websitesLength);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? websitesLength - 1 : prevIndex - 1
    );
  };

  return (
    <div className="col-span-1 row-span-1 relative overflow-hidden rounded-[32px]">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        <a
          href="https://www.linkedin.com/in/tejasnasa/"
          target="_blank"
          className="w-full h-full flex-shrink-0 cursor-auto p-28 bg-[#1F2937]"
        >
          <img
            src={linkedin}
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </a>
        <a
          href="https://www.instagram.com/tejasnasa/"
          target="_blank"
          className="w-full h-full flex-shrink-0 cursor-auto p-28 bg-gradient-to-r from-orange-400 to-pink-500"
        >
          <img
            src={instagram}
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
        </a>
        <a
          href="https://x.com/TejasNasa"
          target="_blank"
          className="w-full h-full flex-shrink-0 cursor-auto p-28 bg-black pb-56"
        >
          <img src={xw} alt="Slide 3" className="w-full h-full object-cover" />
        </a>
      </div>
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 hover:bg-white/10 transition text-center items-center justify-center text-white p-2 px-3 text-xl rounded-full hover:bg-opacity-75"
        onClick={prevSlide}
      >
        &#8592;
      </button>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-white/10 transition text-center items-center justify-center text-white p-2 px-3 text-xl rounded-full hover:bg-opacity-75"
        onClick={nextSlide}
      >
        &#8594;
      </button>
    </div>
  );
};

export default Carousel;
