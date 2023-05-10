import { useRef, useEffect, useState } from "react";
import '../style.css'
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const addMessage = async (message, bubble) => {
  const tl = gsap.timeline({ paused: true });


  tl.fromTo(
    bubble,
    { duration: 0, text: " ", opacity: 0 },
    { duration: 0.4, text: " ", opacity: 0 }
  )
    .fromTo(
      bubble,
      { duration: 0.1, text: ".", opacity: 0 },
      { duration: 0.15, text: ".", opacity: 1 }
    )
    .fromTo(
      bubble,
      { duration: 0, text: ". .", opacity: 1 },
      { duration: 0.15, text: ". .", opacity: 1 }
    )
    .fromTo(
      bubble,
      { duration: 0, text: ". . .", opacity: 1 },
      { duration: 0.4, text: ". . .", opacity: 1 }
    )
    // .fromTo(
    //   bubble,
    //   { duration: 0.1, text: " ", opacity: 1 },
    //   { duration: 0, text: " ", opacity: 0 }
    // )
    // .fromTo(
    //   bubble,
    //   { duration: 0.1, text: ".", opacity: 0 },
    //   { duration: 0.2, text: ".", opacity: 1 }
    // )
    // .fromTo(
    //   bubble,
    //   { duration: 0, text: ". .", opacity: 1 },
    //   { duration: 0.2, text: ". .", opacity: 1 }
    // )
    // .fromTo(
    //   bubble,
    //   { duration: 0, text: ". . .", opacity: 1 },
    //   { duration: 0.6, text: ". . .", opacity: 1 }
    // )
    .fromTo(
      bubble,
      { duration: 0.1, text: " ", opacity: 1 },
      { duration: 0, text: " ", opacity: 0 }
    )
    .fromTo(
      bubble,
      { duration: 0.1, text: ".", opacity: 0 },
      { duration: 0.15, text: ".", opacity: 1 }
    )
    .fromTo(
      bubble,
      { duration: 0, text: ". .", opacity: 1 },
      { duration: 0.15, text: ". .", opacity: 1 }
    )
    .fromTo(
      bubble,
      { duration: 0, text: ". . .", opacity: 1 },
      { duration: 0.4, text: ". . .", opacity: 1 }
    )

    .fromTo(bubble, { duration: 0.2, text: "", opacity: 0 }, {
      duration: 0.5,
      text:
        message,
      opacity: 1,
    })

  await tl.play()
}

const MessengerAnimation = ({ messages, handleClick }) => {
  const containerRef = useRef(null);
  const bubbleRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [pointing, setPointing] = useState(false)


  const submited = []
  useEffect(() => {

    const container = containerRef.current;
    const bubble = document.getElementById(`${messages[index]}-${index}`);

    gsap.set(container, { display: "flex", alignItems: "center" });
    gsap.set(bubble, {
      width: "auto",
      lineHeight: "1.35",
      boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)",
      display: 'block'
    });

    async function add() {
      document.querySelectorAll('.message').forEach((message, i) => {
        if (index > i) gsap.to(message, { duration: 1, transform: `translateY(-${3.6 * (index - i)}rem)` })
      })
      submited.forEach(p => p.restart())
      await addMessage(messages[index], bubble);
      if (index + 1 != messages.length) {
        
        setIndex(index + 1)
      }
      else {
        setPointing(true)
      }

    }
    add();
  }, [index]);
useEffect(() => {
    gsap.to(".arrow", {
      y: 50,
      duration: 0.8,
      opacity: 1,
      ease: "power4.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, [pointing]);
  return (
    <div className="p-4 h-full relative rounded-lg w-screen justify-end flex-col bottom-0 absolute transition-all" ref={containerRef}>
      {
        messages.map((m, i) => {
          if (i == messages.length - 1) {
            return <div key={`${m}-${i}`} className="chat chat-start absolute self-start px-6 py-2 m-1">
            <div id={`${m}-${i}`}  className="chat-bubble message whitespace-nowrap hidden rounded-full opacity-0  text-2xl min-w-full font-bold bg-base-200 text-neutral" key={i}></div>
          </div>
          }
          return <div key={`${m}-${i}`} className="chat chat-start absolute self-start px-6 py-2 m-1">
            <div id={`${m}-${i}`} className="chat-bubble message whitespace-nowrap hidden rounded-full opacity-0  text-2xl min-w-full bg-base-200 text-neutral" key={i}></div>
          </div>
        })
      }
      
      {pointing &&
        <div className="arrow opacity-70 absolute bottom-3 right-1/2  mb-8 hover:cursor-pointer">
          <a className="text-8xl" onClick={handleClick}>👇</a>
        </div>}
    </div>
  );
};

export default MessengerAnimation;
