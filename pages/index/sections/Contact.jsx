import React from "react";
import { useForm } from "@formspree/react";
import {gsap} from 'gsap'
const Contact = () => {
  const [state, submit] = useForm("mnqygzeg");
  const { succeeded, submitting } = state;

  React.useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".contact",
      {
        duration: 0,
        scale: 0,
        translateY: 300,
      },
      {
        duration: 1,
        scale: 1,
        ease: "power4.out",
        translateY: 0,
      }
    );

    // Add mousemove event listener
    const skewContainer = document.querySelector(".contact");
    skewContainer.addEventListener("mousemove", skewAnimation);

    return () => {
      // Remove mousemove event listener on cleanup
      skewContainer.removeEventListener("mousemove", skewAnimation);
    };
  }, []);

  // Skew animation function
  function skewAnimation(event) {
    const { clientX, clientY } = event;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const rotateY = -(clientY - centerY) * 0.05;
    const rotateX = (clientX - centerX) * 0.05;
    gsap.to(".contact", {
      duration: 0.8,
      ease: "power4.out",
      rotateY: rotateY,
      rotateX: rotateX,
      translateY: rotateY,
      translateX: rotateX
    });
  }

  return (
    <div className="flex flex-col items-center mt-20 h-full justify-center font-serif " id="contact" style={{ transformStyle: "preserve-3d" }}>
      <h2 className="text-4xl font-bold ">Contact Me🤙</h2>
      <div className="w-full max-w-lg contact shadow-lg shadow-black">
        {submitting ? (
          <button
            disabled
            className="w-full text-white font-bold py-2 px-4 rounded"
          >
            Sending...
          </button>
        ) : succeeded ? (
          <p className="text-lg text-center">
            Thank you for your message! I will get back to you soon.
          </p>
        ) : (
          <form onSubmit={submit} className="shadow-md rounded px-8 pt-6 pb-8 ">
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline input input-bordered"
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline input input-bordered"
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline input input-bordered"
                id="subject"
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline textarea textarea-bordered"
                id="message"
                name="message"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full btn text-white font-bold py-2 px-4 rounded"
            >
              Send
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
