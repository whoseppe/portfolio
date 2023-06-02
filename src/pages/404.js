import Lottie from "lottie-react";
import morty1 from "./components/lottie/morty1.json";
import morty2 from "./components/lottie/morty2.json";
import morty3 from "./components/lottie/morty3.json";
import Link from "next/link";

export default function Custom404() {
  const ohGeeze = [morty1, morty2, morty3];
  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <Link href="/">
        <div className="p-2">
          <div className="border-2 w-24 flex justify-center items-center">
            <p className="font-bold">whoseppe</p>
          </div>
        </div>
      </Link>
      <div className="w-full h-full">
        <div className="flex flex-col justify-center items-center h-full w-full">
          <p className="text-9xl font-bold tracking-tighter text-black leading-none">
            404
          </p>
          <p className="font-bold tracking-tighter text-black">
            page not found
          </p>
          <Lottie
            animationData={ohGeeze[Math.floor(Math.random() * 3)]}
            loop={true}
            style={{ width: 200, height: 200 }}
          />
        </div>
      </div>
    </div>
  );
}
