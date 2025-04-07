import { useState } from "react";
import img1 from "../../assets/images/bio1.png";
import img2 from "../../assets/images/bio2.png";

const Bio = () => {
  const [image, setImage] = useState(img1);

  const handleMouseEnter = () => {
    setImage(img2);
  };

  const handleMouseLeave = () => {
    setImage(img1);
  };

  const greetingMessage = () => {
    const hour = new Date().getHours();

    if (hour > 4 && hour < 12) {
      return "Good Morning";
    } else if (hour < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  return (
    <section
      className="col-span-2 row-span-1 dark:bg-[#1F2937] bg-white rounded-[32px] p-8 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex">
        <img src={image} className="h-40" />
        <div className="bg-[#F25E3B] px-4 py-2 font-semibold rounded-full h-min m-4 ml-0">
          {greetingMessage()}
        </div>
      </div>
      <div className="p-4 text-gray-300">
        I'm Tejas Nasa, an enthusiastic full stack developer, with focus on
        backend development. I focus on building efficient, scalable web
        applications that meet both user needs and business goals.
      </div>
    </section>
  );
};

export default Bio;
