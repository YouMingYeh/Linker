import { useEffect, useState } from "react";
import "../style.css";
import { gsap } from "gsap";
import ProjectsTabs from "./Tabs";
export default function Projects({ currentIndex }) {
  const [popped, setPopped] = useState(false);

  function Popup() {
    console.log("pop");
    setPopped(true);
  }

  useEffect(() => {
    if (currentIndex == 1) {
      const tl = gsap.timeline({ paused: true });
      tl.set(".command", { text: "" });
      tl.set(".installing", { text: "" });
      tl.set(".done", { text: "" });

      tl.fromTo(
        ".command",
        {
          duration: 0,
          text: "",
        },
        {
          duration: 0.8,
          text: "npm install Works",
        }
      )
        .fromTo(
          ".installing",
          {
            duration: 0,
            text: "installing",
          },
          {
            duration: 1,
            text: "installing...",
          }
        )
        .fromTo(
          ".installing",
          {
            duration: 0,
            text: "installing",
          },
          {
            duration: 1,
            text: "installing...",
          }
        )
        .fromTo(
          ".done",
          {
            duration: 0,
            text: "",
          },
          {
            duration: 0.8,
            text: "Done!",
            onComplete: Popup,
          }
        );

      tl.play();
    }
  }, [currentIndex]);

  return (
    <div className="flex justify-center align-middle h-full relative w-full">
      {popped ? (
        <ProjectsTabs />
      ) : (
        <div className="mockup-code w-1/3 max-h-full h-fit self-center">
          <pre data-prefix="$">
            <code className="command"></code>
          </pre>
          <pre data-prefix=">" className="text-warning">
            <code className="installing"></code>
          </pre>
          <pre data-prefix=">" className="text-success">
            <code className="done"></code>
          </pre>
        </div>
      )}
    </div>
  );
}
