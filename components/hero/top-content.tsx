"use client";
import { animationStyles, MOCK_PHONE_NUMBER } from "@/constants";
import { Check, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button, Devider } from "../ui";
import BlurText from "../ui/blur-text";

export function HeroTop() {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(MOCK_PHONE_NUMBER);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  2;
  return (
    <>
      <style>{animationStyles}</style>
      <section className="w-full min-h-[500px] lg:min-h-[500px] md:min-h-[600px] sm:min-h-[700px] flex flex-col lg:flex-row justify-between relative ">
        <div
          className="absolute inset-0 bg-center bg-cover filter blur-sm"
          style={{ backgroundImage: 'url("/assets/background.png")' }}
        />

        <div className="relative flex flex-col items-center  lg:items-center gap-2 max-w-full lg:max-w-[600px] h-full pt-8 sm:pt-12 md:pt-16 lg:pt-16 px-4 sm:px-8 lg:ml-10 lg:px-0 z-10">
          <BlurText
            text="Reliabla Plumbing Services"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] text-white font-extrabold text-center leading-tight"
          />
          <span className="w-full sm:w-[350px] md:w-[450px] lg:w-[450px] bg-gradient-to-r from-transparent via-[#8e96a3] to-white h-[2px] rounded-full animate-divider" />
          <BlurText
            text="Your Trusted Local Plumbed"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-medium text-[#85cbfd] text-center lg:text-left"
          />
          <div className="flex flex-col items-center lg:flex-row gap-3 sm:gap-4  uppercase w-full  mx-auto lg:w-auto">
            <div className="animate-button-1">
              <Button
                variant="blue"
                className="px-4 sm:px-6 h-12 sm:h-[60px] w-[220px] mx-auto sm:w-auto"
                animation="slide"
              >
                Request Service
              </Button>
            </div>

            <div className="animate-button-2">
              <Button
                animation="shine"
                variant="dark-blue"
                className="px-4 sm:px-6 h-12 sm:h-[60px] flex flex-row items-center justify-center sm:justify-start gap-3 sm:gap-4  w-[220px] mx-auto sm:w-auto"
                onClick={handleCopyPhone}
              >
                <div className="p-2 sm:p-3 bg-[#064180] rounded-full flex-shrink-0 relative">
                  <Link
                    href="tel:123-456-7890"
                    className="no-underline"
                    aria-label="Call 123-456-7890"
                  >
                    <PhoneCall
                      size={18}
                      className={`sm:w-[22px] sm:h-[22px] text-white transition-all duration-300 ${
                        copied ? "scale-0 opacity-0" : "scale-100 opacity-100"
                      }`}
                    />
                  </Link>
                  <Check
                    size={18}
                    className={`sm:w-[22px] sm:h-[22px] text-green-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                      copied ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    }`}
                  />
                </div>
                <div className="flex flex-col items-center sm:items-start gap-0">
                  <p className="text-xs text-gray-300">
                    {copied ? "Copied!" : "Call Now"}
                  </p>
                  <span className="mt-0 p-0 text-sm sm:text-base">
                    {MOCK_PHONE_NUMBER}
                  </span>
                </div>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 overflow-hidden lg:right-20 w-1/2 lg:w-auto h-auto max-h-full z-0 animate-image">
          <Image
            src="/assets/hero.png"
            alt="Hero Image"
            width={404}
            height={600}
            className="h-auto max-h-full object-contain hidden sm:block"
          />
        </div>
      </section>
      <Devider variant="second" height={"4px"} />
    </>
  );
}
