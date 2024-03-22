import localFont from "next/font/local";
import Image from "next/image";
import { HeroText } from "./hero-text";
import { cn } from "@/lib/utils";

const Satoshi = localFont({
  src: [
    {
      path: "../../../public/fonts/Satoshi-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Satoshi-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Satoshi-Bold.woff",
      weight: "800",
      style: "normal",
    },
  ],
});

/**
 * HeroSection component.
 *
 * @returns JSX.Element
 */
export const HeroSection = (): JSX.Element => {
  return (
    <section className={cn(" bg-[#F2F0F1]", Satoshi.className)}>
      <div className="flex md:flex-row flex-col justify-between items-center mx-auto pt-10 w-full max-w-screen-xl max-2xl:max-w-screen-lg leading-8 tracking-widest">
        <HeroText />
        <Image
          src="/hero-Page.png"
          alt="bg-hero-image"
          width={1500}
          height={1500}
          priority
          className="m-auto md:mt-10 lg:mt-3 sm:w-[70%] md:w-[40%] 2xl:w-[45%] h-full object-contain"
        />
      </div>
    </section>
  );
};
