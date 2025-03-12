import { useEffect, useState } from "react";
import linkedin from "../../assets/home/linkedin.svg";
import instagram from "../../assets/home/instagram.svg";
import x from "../../assets/home/x.png";

const Carousel = () => {
  const websites = [
    {
      img: linkedin,
      class: "p-28 bg-[#1F2937]",
      url: "https://www.linkedin.com/in/tejasnasa/",
    },
    {
      img: instagram,
      class: "p-28 bg-gradient-to-r from-orange-400 to-pink-500",
      url: "https://www.instagram.com/tejasnasa/",
    },
    {
      img: x,
      class: "p-12 bg-transparent mt-4",
      url: "https://x.com/TejasNasa",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2500);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % websites.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? websites.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <div className="col-span-1 row-span-1 relative rounded-[32px] shadow-lg overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {websites.map((website, index) => (
            <a
              href={website.url}
              key={index}
              target="_blank"
              className={`w-full h-full flex-shrink-0 rounded-lg cursor-auto ${website.class}`}
            >
              <img
                src={website.img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </a>
          ))}
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
    </div>
  );
};

export default Carousel;
