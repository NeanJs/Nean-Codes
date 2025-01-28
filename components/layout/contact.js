import { useState, useRef, useEffect } from "react";
import BodyWrapper from "../global/BodyWrapper";
import ContentWrapper from "../global/ContentWrapper";
import { Button } from "../global/button";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [reset, setReset] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const formRef = useRef();
  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleSend = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("nean-v2", "template_oimvvbr", formRef.current, {
        publicKey: "user_jd6WEVpTXztcqNjCQ4FCH",
      })
      .then((res) => {
        if (res.status == 200) {
          toast.success("Sent Successfully!");
          setFormData({
            email: "",
            name: "",
            message: "",
          });
        } else {
          toast.loading("Sending!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleCheck = () => {
    return Object.values(formData).forEach((value) => value != "");
  };
  useEffect(() => handleCheck(), [formData]);
  return (
    <BodyWrapper className="contact contact-page w-screen min-h-screen text-black bg-nean_creamF7 flex flex-col justify-center items-center">
      <ContentWrapper>
        <form
          ref={formRef}
          onSubmit={handleSend}
          className="flex w-full flex-col gap-4 tracking-[2px] relative"
        >
          <div className="flex flex-col">
            <span className="text-xl">Get in touch</span>
            <h1 className="text-8xl md:text-xxl">
              Hello <br></br>there.
            </h1>
            <span className="text-sm">
              Have a project or idea? Let's discuss about it and make it happen.
            </span>
          </div>

          <div className="flex flex-row w-full gap-8 flex-wrap">
            <input
              type="text"
              value={formData.name}
              onChange={handleChange}
              name="name"
              placeholder="Name"
              required
              className="bg-transparent flex-1 border-b-2 border-gray-600  px-4 py-8 mr-2 focus:outline-none "
            />
            <input
              type="email"
              value={formData.email}
              required
              onChange={handleChange}
              placeholder="Email"
              name="email"
              className="bg-transparent flex-1 border-b-2 border-gray-600  px-4 py-8 mr-2 focus:outline-none"
            />
          </div>
          <textarea
            placeholder="Discuss your project"
            value={formData.message}
            required
            onChange={handleChange}
            name="message"
            className="bg-transparent border-b-2 border-gray-600  px-4 py-2 mt-4 focus:outline-none"
            rows="4"
          ></textarea>
          <div className="flex gap-2 items-center">
            <Button title={"Send"} submit />
            {/* {reset && <Button title={"Clear"} onClick={handleReset} />} */}
          </div>
        </form>
        <Toaster />
      </ContentWrapper>
    </BodyWrapper>
  );
};

export default Contact;
