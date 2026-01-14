import Image from "next/image";
import { Devider } from "../ui";

export function HeroBottom() {
  return (
    <>
      <section className="w-full flex justify-center flex-col gap-2 items-center bg-service-bg relative py-6 sm:py-2 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
        </div>

        <div className="w-full h-[120px] sm:h-[150px] md:h-[180px] lg:h-[180px] relative px-4 sm:px-8 md:px-12 z-10">
          <Image
            src="/assets/service-item.png"
            alt="Partners"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative bottom-5 w-full flex justify-center z-10">
          <span className="w-[90%] sm:w-[600px] md:w-[750px] lg:w-[750px]  bg-gradient-to-r from-transparent via-[#8e96a3] to-white h-[2px] rounded-full z-10"></span>
        </div>
      </section>
      <Devider variant="second" height={"4px"} />
    </>
  );
}
