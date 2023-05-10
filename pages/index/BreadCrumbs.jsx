import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import "./style.css";

function getWhere (index) {
    if(index == 0) return 'about/>'
    else if(index == 1) return 'works/>'
    else if(index == 2) return 'info/>'
    else if(index == 3) return 'contact/>'
  }

gsap.registerPlugin(ScrollToPlugin);

const Breadcrumbs = ( {currentIndex, sectionRefs} ) => {
    // console.log(currentIndex)
  const handleClick = (direction) => {
    console.log(direction)
    const nextIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;

    if (nextIndex < 0 || nextIndex >= sectionRefs.length) {
      return;
    }
    gsap.to('.scroll-container', {
      scrollTo: sectionRefs[nextIndex].current,
      duration: 2,
      ease: "power4.in"
    });

    
  };

  useEffect(()=>{
    console.log(getWhere(currentIndex))

    const tl = gsap.timeline({ paused: true });

    tl
    .to('.where', {
        duration: 1,
        ease: "power.in",
        text: `_`.repeat(getWhere(currentIndex).length)
    })
    .to('.where', {
        duration: 1,
        ease: "power.out",
        scale: 1,
        text: getWhere(currentIndex)
    })
    tl.play()

  },[currentIndex])
  return (
    <div className="fixed top-0 right-0 h-full flex flex-col justify-center items-center px-2 py-4 z-20 opacity-50 hover:opacity-90 transition-all font-serif">
      <nav className="flex flex-col space-y-2 text-2xl font-bold w-48">
        <div className="flex justify-center w-full">
          <button
            disabled={currentIndex === 0}
            className="btn btn-circle text-gray-400 hover:-rotate-45"
            onClick={() => handleClick("up")}
          >
            ⤴
          </button>
        </div>
        <div className="text-2xl font-bold uppercase where w-full text-center underline">{getWhere(0)}</div>
        <div className="flex justify-center w-full">
          <button
            disabled={currentIndex === sectionRefs.length - 1}
            className="btn btn-circle text-gray-400 hover:rotate-45"
            onClick={() => handleClick("down")}
          >
            ⤵
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
