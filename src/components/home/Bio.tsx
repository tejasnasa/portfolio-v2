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
      className="h-fit w-fit border-black border-2 overflow-hidden dark:border-white m-10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={image} className="h-40" />
      <div>{greetingMessage()}</div>
      <div>I'm Tejas, fr</div>
    </section>
  );
};

export default Bio;
