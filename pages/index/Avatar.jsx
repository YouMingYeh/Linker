import React, { useState } from "react";
import {gsap} from 'gsap'
import image from '../images/hi.png'


const Avatar = () => {


  function showName() {
    const tl = gsap.timeline()
    tl.to('.info',{
        duration: 1,
        translateX: -250,
        ease: "power4",
        text: "You Ming-Yeh"
    })
  }

  function hideName() {
    const tl = gsap.timeline()
    tl.to('.info',{
        duration: 1,
        translateX: 0,
        ease: "power4",
        text: ""
    })
  }


  return (
    <div className="fixed top-0 right-0 z-30">
      <div
        className="w-32 h-32 rounded-full overflow-hidden cursor-pointer avatar m-3"
        onMouseEnter={() => showName()}
        onMouseLeave={() => hideName()}
      >
        <img src={image} alt="avatar" className="w-full h-full object-cover" />
      </div>
      <div className="info absolute top-0 font-serif
  text-4xl w-fit whitespace-nowrap -translate-x-16 translate-y-16"></div>
    </div>
  );
};

export default Avatar;
