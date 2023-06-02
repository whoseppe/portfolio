import React, { useEffect } from "react";
import { gsap } from "gsap";

function Projects() {
  useEffect(() => {
    gsap.fromTo(
      ".row-one",
      { x: -500 },
      {
        x: 100,
        ease: "power1.inOut",
        duration: 1,
        scrollTrigger: {
          trigger: ".row-one",
          start: "top bottom",
          end: "400px top",
          scrub: 1,
          toggleActions: "restart none reverse pause",
        },
      }
    );
    gsap.fromTo(
      ".row-two",
      { x: 300 },
      {
        x: 0,
        ease: "power1.inOut",
        duration: 2,
        scrollTrigger: {
          trigger: ".row-two",
          start: "top bottom",
          end: "400px top",
          scrub: 1,
          toggleActions: "restart none reverse pause",
        },
      }
    );
    gsap.fromTo(
      ".row-three",
      { x: -500 },
      {
        x: 100,
        ease: "power1.inOut",
        duration: 1,
        scrollTrigger: {
          trigger: ".row-three",
          start: "top bottom",
          end: "400px top",
          scrub: 1,
          toggleActions: "restart none reverse pause",
        },
      }
    );

    // gsap.fromTo(
    //   ".line-animation",
    //   { width: 0 },
    //   {
    //     width: "100%",
    //     ease: "power1.inOut",
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: ".line-animation",
    //       start: "top bottom",
    //       end: "400px top",
    //       toggleActions: "restart none reverse pause",
    //     },
    //   }
    // );
  }, []);

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="mt-24">
      <div className="-ml-[75px]">
        <div className="flex flex-nowrap row-one">
          {array.map((i, index) => (
            <>
              <p className="pl-2 text-black tracking-tighter uppercase font-bold text-3xl">
                Projects
              </p>
              <p className="pl-2 text-black tracking-tighter uppercase font-bold text-3xl">
                Projects
              </p>
              <p className="pl-2 text-black tracking-tighter uppercase font-bold text-3xl">
                Projects
              </p>
              <p className="pl-2 text-red tracking-tighter uppercase font-bold text-3xl">
                Projects
              </p>
            </>
          ))}
        </div>
      </div>
      <div className="-ml-[400px]">
        <div className="flex flex-nowrap row-two">
          {array.map((i, index) => (
            <>
              <p className="pl-2 text-black tracking-tighter uppercase font-bold text-3xl">
                Projects
              </p>
              <p className="pl-2 text-black tracking-tighter uppercase font-bold text-3xl">
                Projects
              </p>
              <p className="pl-2 text-black tracking-tighter uppercase font-bold text-3xl">
                Projects
              </p>
              <p className="pl-2 text-red tracking-tighter uppercase font-bold text-3xl">
                Projects
              </p>
            </>
          ))}
        </div>
      </div>
      <div className="-ml-[50px]">
        <div className="flex flex-nowrap row-three">
          {array.map((i, index) => (
            <>
              <p className="pl-2 text-black tracking-tighter uppercase font-bold text-3xl">
                Projects
              </p>
              <p className="pl-2 text-black tracking-tighter uppercase font-bold text-3xl">
                Projects
              </p>
              <p className="pl-2 text-black tracking-tighter uppercase font-bold text-3xl">
                Projects
              </p>
              <p className="pl-2 text-red tracking-tighter uppercase font-bold text-3xl">
                Projects
              </p>
            </>
          ))}
        </div>
      </div>

      <div className="h-1 bg-black w-full mt-10 line-animation" />
      <a href="https://www.dovly.com/" target="_blank">
        <div className="flex justify-between items-center">
          <p className="text-red font-bold text-7xl leading-none">Dovly</p>
          <p className="text-black font-bold pr-2">2023</p>
        </div>
      </a>

      <div className="h-1 bg-black w-full mt-3 line-animation" />
      <a href="https://ggmele1.github.io/spotify-stats/" target="_blank">
        <div className="flex justify-between items-center">
          <p className="text-red font-bold text-7xl leading-none">SpotMy</p>
          <p className="text-black font-bold pr-2">2023</p>
        </div>
      </a>
      <div className="h-1 bg-black w-full mt-3 line-animation" />
      <a href="https://ggmele1.github.io/cannabis-app/" target="_blank">
        <div className="flex justify-between items-center">
          <p className="text-red font-bold text-7xl leading-none">Dopest</p>
          <p className="text-black font-bold pr-2">2023</p>
        </div>
      </a>
      <div className="h-1 bg-black w-full mt-3 line-animation" />
      <a href="https://whoseppe.github.io/whoseppedotcom/" target="_blank">
        <div className="flex justify-between items-center">
          <p className="text-red font-bold text-7xl leading-none">Legacy</p>
          <p className="text-black font-bold pr-2">2023</p>
        </div>
      </a>
    </div>
  );
}

export default Projects;
