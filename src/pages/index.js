import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gif from "../images/g.gif";
import Manifest from "@/components/manifest";
import Header from "@/components/header";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import LoadingScreen from "@/components/loadingScreen";
import { gsap } from "gsap";

export default function Home() {
  const [overflow, setOverFlow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOverFlow(true);
    }, 4000);

    gsap.to(".main-in", { opacity: 1, delay: 2 });
  }, []);

  return (
    <div className="bg-white">
      {!overflow && <LoadingScreen />}

      <main className="w-full tracking-tighter opacity-0 main-in">
        <Header />

        <Manifest />
        <div>
          <div className="w-full flex justify-center sm:justify-start items-center lg:ml-36">
            <div>
              <Image
                src={gif}
                className="w-full sm:w-[600px] h-full"
                unoptimized={true}
                alt="whoseppe"
              />
              <p className="font-bold text-black">
                -- Where dreams turn into pixels, and apps{" "}
                <span className="text-blue">come to life.</span>
              </p>
            </div>
          </div>
        </div>
        <Skills />
        <Projects />
        <div>
          <div className="w-full flex justify-around items-center mt-24">
            <a href="mailto:whoseppe@gmail.com">
              <p className="text-black font-bold">EMAIL</p>
            </a>
            <a href="https://github.com/whoseppe" target="_blank">
              <p className="text-black font-bold">GITHUB</p>
            </a>
            <a href="https://www.linkedin.com/in/whoseppe/" target="_blank">
              <p className="text-black font-bold">LINKEDIN</p>
            </a>
          </div>
          <div className="w-full flex justify-center items-center mt-16">
            <p className="text-red font-bold">Coded By Giuseppe Mele 2023</p>
          </div>
        </div>
        <div className="w-10 h-14" />
      </main>
    </div>
  );
}
