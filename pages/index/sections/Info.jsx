import { useEffect, useState } from "react";
import backgroundImage from "../../images/background.png";
import { gsap } from "gsap";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai/index.js";
import { SiMedium } from "react-icons/si/index.js";
import './card.css'

export default function Info() {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.download = `yehyouming's_resume.pdf`;
    link.href = "/resume.pdf";
    link.click();
  };

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".mockup-window",
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
    const skewContainer = document.querySelector(".hero");
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
    const rotateY = -(clientY - centerY) * 0.03;
    const rotateX = (clientX - centerX) * 0.03;
    gsap.to(".hero", {
      duration: 0.8,
      ease: "power4.out",
      rotateY: rotateY,
      rotateX: rotateX,
      translateY: rotateY,
      translateX: rotateX
    });
  }
  return (
    <div
      className="hero min-h-screen bg-none "
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="hero-content items-start shadow-2xl rounded-2xl">
        <div className="flip-card">
          <div className="flip-card-inner ">
            <div className="flip-card-front">
              <img
                src={backgroundImage}
                alt="Avatar"
                className="rounded-2xl object-cover"
                />
                <h1>( hover me ! )</h1>
            </div>
            <div className="flip-card-back text-neutral bg-base-200 w-full h-full rounded-2xl p-8">
              <h1 className="font-bold font-serif text-4xl">Limbo</h1>
              <br></br>
              <p className="text-xl">Feel more like limbo</p>
              <p className="text-xl">Hands out my window,</p>
              <p className="text-xl">Chasin' that sunset</p>
              <p className="text-xl">That's more my tempo.</p>
              <br></br>
              <p className="self-end font-bold text-xl">-- keshi</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold underline font-serif">Bio</h1>
          <p className="py-1">
            <span className="font-bold">2002 </span>
            <span>Born in Taoyuan, Taiwan 🇹‍🇼</span>
          </p>
          <p className="py-1">
            <span className="font-bold">2023 </span>
            <span>PDAO 2023 System Management</span>
          </p>
          <p className="py-1">
            <span className="font-bold">2021 - present </span>
            <h1>
              <span>&nbsp;&nbsp;</span>
              Major in Information Management, 
            </h1>
            <h1><span>&nbsp;&nbsp;</span>National Taiwan
              University（國立臺灣大學 資訊管理學系）</h1>
          </p>

          <h1 className="text-2xl font-bold underline py-3 font-serif">My ❣</h1>
          <p className="py-1">
            I love playing guitar 🎸 and film camera 📷. Also, kitties 🐈 are
            the best !!!!
          </p>

          <h1 className="text-2xl font-bold underline py-3 font-serif">
            On web
          </h1>
          <p className="py-1 flex">
            <AiFillGithub />
            <a href="https://github.com/YouMingYeh" className="link after:content-['_↗']">
              GitHub
            </a>
          </p>
          <p className="py-1 flex">
            <AiFillFacebook />
            <a
              href="https://www.facebook.com/profile.php?id=100010253504873"
              className="link after:content-['_↗']"
            >
              Facebook
            </a>
          </p>
          <p className="py-1 flex">
            <AiFillInstagram />
            <a href="https://www.instagram.com/yymin_16/" className="link after:content-['_↗']">
              Instagram
            </a>
          </p>

          <p className="py-1 flex">
            <SiMedium />
            <a href="https://medium.com/@ym911216" className="link after:content-['_↗']">
              Blog
            </a>
          </p>

          <h1 className="text-2xl font-bold underline py-3 font-serif">
            Contact?
          </h1>
          <p className="py-1 ">email: b10705052@ntu.edu.tw (frequently used)</p>
          <p className="py-1">gmail: ym911216@gmail.com</p>
          <p className="py-1">phone: +886 0976343024</p>
          <div className="w-full flex justify-center">
            <button
              className="btn self-center btn-xl btn-outline w-fit rotate-2 hover:rotate-6 hover:scale-125"
              onClick={downloadResume}
            >
              <span className="font-extrabold text-3xl font-serif">
                Download my Resume
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
