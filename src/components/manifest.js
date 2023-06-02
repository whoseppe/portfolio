import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Manifest() {
  useEffect(() => {
    gsap.fromTo(
      ".animate",
      { opacity: 0.1 },
      {
        opacity: 1,
        duration: 0.1,
        scrollTrigger: {
          trigger: ".animate",
          start: "top center",
          end: "100px top",
          scrub: 1,
          toggleActions: "restart none reverse pause",
        },
        stagger: {
          amount: 1,
        },
      }
    );
  }, []);

  const showTheSecret = () => {
    gsap.to(".secret", { opacity: 1, duration: 3, ease: "power4.inOut" });
  };

  const words = [
    "With",
    "the",
    "coding",
    "finesse",
    "of",
    "a",
    "caffeinated",
    "squirrel",
    "and",
    "an",
    "eye",
    "for",
    "design",
    "sharper",
    "than",
    "a",
    "unicorns",
    "horn",
    "I",
    "conjure",
    "digital",
    "experiences",
    "that'll",
    "make",
    "your",
    "heart",
    "skip",
    "a",
    "beat.",
  ];

  return (
    <div className="w-full flex flex-wrap lg:flex-nowrap items-start justify-between mt-52">
      <p className="text-2xl lg:text-5xl font-bold text-black ml-2">Manifest</p>
      <div className="w-[500px] sm:mr-36 ">
        <div className="flex flex-wrap">
          {words.map((word, index) => (
            <div key={word + index} className="ml-2 flex flex-nowrap">
              {word.split("").map((i, index) => (
                <p
                  key={i + index}
                  className="text-5xl font-bold text-black element animate"
                >
                  {i}
                </p>
              ))}
            </div>
          ))}
          <p
            onClick={() => showTheSecret()}
            className="text-5xl font-bold text-red element animate ml-2 underline cursor-pointer"
          >
            The Secret.
          </p>
        </div>
        <div className="h-64 sm:h-52">
          <p className="text-xl font-bold text-black secret opacity-0 ml-2">
            Ah, the secret! Imagine a delightful dance between intuitive
            navigation and visual marvels, where buttons and menus pirouette
            with finesse, and colors and typography waltz in perfect harmony.
            Add a dash of lightning speed and sprinkle it with the enchantment
            of simplicity. Voila! You have a magical user experience that leaves
            users happily bewitched and craving more!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Manifest;
