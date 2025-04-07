import { useState } from "react";
import { validateMessage } from "../../validators/validationSchemas";
import SubmitJSON from "submitjson";

const sj = new SubmitJSON({
  apiKey: import.meta.env.VITE_SUBMITJSON_API_KEY,
  endpoint: import.meta.env.VITE_SUBMITJSON_ENDPOINT,
});

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Message = () => {
  const [data, setData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setError("");
  };

  const handleMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateMessage(data);
    if (!validation.success) {
      setError(validation.error.errors[0].message);
    } else {
      setError("");
      try {
        await sj.submit(data);
      } catch (err) {
        console.error("Error during submission:", err);
      }
    }
  };

  return (
    <div className="rounded-[32px] p-16 dark:bg-[#1F2937] bg-white w-[48%]">
      <h1>CONTACT ME</h1>
      <form onSubmit={handleMessage} className="flex flex-col">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={data.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="Message"
          value={data.message}
          onChange={handleChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
      <div className="h-[20px] m-1 p-2">
        {error && (
          <span
            className="w-80 text-sm"
            style={{
              color: "red",
              width: "320px",
              visibility: error ? "visible" : "hidden",
            }}
          >
            {error}
          </span>
        )}
      </div>
    </div>
  );
};

export default Message;
