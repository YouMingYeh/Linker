import '../style.css'
import MessageBubble from './MessageBubble'
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function Section1 ({sectionRefs}) {

    function handleClick () {
        gsap.to('.scroll-container', {
            scrollTo: sectionRefs[1].current,
            duration: 2,
            ease: "power3.in"
          });
    }
    return <section className="section" ref={sectionRefs[0]}>
    <MessageBubble messages={hello_messages} handleClick={handleClick}/>
  </section>
}

const hello_messages = [
    "Hi there!",
    "I'm a student🎒 majoring in Information Management at NTU🇹‍🇼.",
    "Passionate about Full Stack Web and Software development, ",
    "so I never lose my enthusiasm 🔥🔥 for acquiring new tech-knowledge.",
    "I've created side projects 🚀, ", 
    "and continuously worked on improving and  mantaining them 💻.",
    "Check it out!!"
  ]