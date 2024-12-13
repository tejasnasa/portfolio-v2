import Message from "../components/contact/Message";
import github from "../assets/contact/github.svg";
import linkedin from "../assets/contact/linkedin.svg";

const Contact = () => {
  return (
    <section className="w-[84%] h-dvh mx-auto mt-24 text-white flex justify-between">
      <Message />
      <div className="p-16 w-[48%]">
        <a
          href="mailto:tejasnasa2005@gmail.com"
          className="rounded-[32px] dark:bg-[#1F2937] bg-white"
        >
          tejasnasa2005@gmail.com
        </a>
        <div>
          <a
            href="https://github.com/tejasnasa"
            className="rounded-[32px] dark:bg-[#1F2937] bg-white"
          >
            <img src={github} alt="GITHUB" />
          </a>
          <a
            href="https://www.linkedin.com/in/tejasnasa/"
            className="rounded-[32px] p-16 dark:bg-[#1F2937] bg-white"
          >
            <img src={linkedin} alt="LINKEDIN" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
