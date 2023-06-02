import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function Header() {
  const useHeader = useRef(null);
  const useSubHeader = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const innerHeight = window.innerHeight;
    const headerHeight = useHeader.current.clientHeight;
    const subHeaderHeight = useSubHeader.current.clientHeight;
    const line = innerHeight - headerHeight - subHeaderHeight;
    const delayStart = 4;
    setLineHeight(line);

    gsap.fromTo(
      ".reveal",
      {
        y: 400,
        skewY: 8,
      },
      {
        y: 0,
        ease: "power4.out",
        duration: 1.2,
        delay: delayStart,
        skewY: 0,
        stagger: {
          amount: 1,
        },
      }
    );

    gsap.fromTo(
      ".line-reveal",
      {
        height: 0,
      },
      {
        height: line,
        ease: "power4.out",
        duration: 1.8,
        delay: delayStart,
      }
    );

    gsap.fromTo(
      ".sub-reveal",
      {
        opacity: 0,
      },
      {
        opacity: 0.2,
        ease: "power4.out",
        duration: 3,
        delay: delayStart + 0.8,
        stagger: {
          amount: 1.2,
        },
      }
    );
  }, []);

  return (
    <>
      <div ref={useHeader}>
        <div className="p-2">
          <div className="border-2 w-24 flex justify-center items-center">
            <p className="font-bold">whoseppe</p>
          </div>
        </div>
        <div className="w-full pr-2 sm:pr-0 h-full overflow-hidden">
          <p
            className="md:tracking-[-10px] md:whitespace-nowrap md:text-[16vw] -ml-3 
   text-right md:text-center text-[25vw] 
  font-bold text-black tracking-tighter leading-none reveal pb-3 sm:pb-0"
          >
            Giuseppe Mele
          </p>
        </div>
      </div>
      <div
        className="w-full flex items-end justify-end p-4"
        style={{ height: lineHeight }}
      >
        <div className="flex flex-row flex-nowrap ">
          <div className={`w-2 bg-red line-reveal`} />
        </div>
      </div>
      <div ref={useSubHeader} className="overflow-hidden h-60">
        <p className="text-black text-7xl font-bold sub-reveal leading-none tracking-tighter">
          Code.
        </p>

        <p className="text-black text-7xl font-bold sub-reveal leading-none tracking-tighter">
          Create.
        </p>
        <p className="text-black text-7xl font-bold sub-reveal leading-none tracking-tighter">
          Captivate.
        </p>
      </div>
    </>
  );
}

export default Header;
