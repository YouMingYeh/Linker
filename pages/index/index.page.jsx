import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollToPlugin, TextPlugin } from "gsap/dist/all";
import Breadcrumbs from "./BreadCrumbs";
import Section1 from "./sections/About";
import Projects from "./sections/Projects";
import Info from "./sections/Info";
import Contact from "./sections/Contact"
import Avatar from "./Avatar";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

export { Page };
function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const container = document.getElementsByClassName("scroll-container")[0];
    container.addEventListener("scroll", (event) => {
      // const position = container.scrollTop

      for (let i = sectionRefs.length - 1; i >= 0; i--) {
        if (!sectionRefs[i]) return;
        const rect = sectionRefs[i].current.getBoundingClientRect();
        if (!rect) return;

        if (rect.x == 0 && rect.y == 0) {
          // console.log(i)
          setCurrentIndex(i);
          return;
        }
      }
    });
  }, []);

  return (
    <div className="scroll-container">
      <Avatar />
      <Breadcrumbs
        currentIndex={currentIndex}
        sectionRefs={sectionRefs}
      ></Breadcrumbs>
      <section sectionRefs={sectionRefs[1]}>
        <Section1 sectionRefs={sectionRefs}></Section1>
      </section>
      <section className="section" ref={sectionRefs[1]}>
        <Projects currentIndex={currentIndex} />
      </section>
      <section className="section" ref={sectionRefs[2]}>
        <Info />
        {/* <Slide /> */}
      </section>
      <section className="section" ref={sectionRefs[3]}>
        <Contact />
      </section>
    </div>
  );
}
