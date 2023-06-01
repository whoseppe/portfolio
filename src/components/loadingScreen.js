import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { gsap } from "gsap";
import mario from "./lottie/mario.json";

function loadingScreen() {
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);

    gsap.to(".loader", { opacity: 0, duration: 1, delay: 3 });

    gsap.fromTo(".mario", { x: -50 }, { x: window.innerWidth, duration: 6 });
  }, []);

  return (
    <div
      className="fixed bg-black loader z-10"
      style={{ height: windowHeight, width: windowWidth }}
    >
      <div className="flex justify-start items-center h-full w-full">
        <Lottie
          className="mario"
          animationData={mario}
          loop={true}
          style={{ width: 200, height: 200 }}
        />
      </div>
    </div>
  );
}

export default loadingScreen;
