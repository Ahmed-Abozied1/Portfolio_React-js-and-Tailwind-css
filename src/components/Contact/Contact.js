import React, { createElement, useRef } from "react";
import { Link } from "react-router-dom";
import { content } from "../../Content";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
const Contact = () => {
  const { Contact } = content;
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b2q65pe",
        "template_wdueowo",
        form.current,
        "QCFeE9Ublta_OSUoJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          toast.success("Email send Successefully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };
  return (
    <section className="bg-dark_primary text-white" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14">
        <h2 className="title !text-white" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex-1 flex flex-col gap-5"
            data-aos="fade-up"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 rounded "
            />
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email Address"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-slate-600 p-3 rounded  h-44"
              required
            ></textarea>
            <button className="btn self-start bg-white text-dark_primary">
              Submit
            </button>
          </form>
          <div className="fle-1 flex flex-col gap-5">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 400}
                className="flex items-center gap-2"
              >
                <h4 className="text-white">{createElement(content.icon)}</h4>
                <Link
                  to={content.link}
                  className="font-Poppins"
                  target="_blank"
                >
                  {content.text}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
