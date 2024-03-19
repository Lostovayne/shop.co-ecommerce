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
      <div className="flex md:flex-row flex-col justify-between mx-auto w-full max-w-screen-xl max-2xl:max-w-screen-lg max-2xl:h-[calc(100vh-204px)] 2xl:h-[calc(100vh-210px)]">
        <HeroText />
        <Image
          src="/hero-Page.png"
          alt="bg-hero-image"
          width={1500}
          height={1500}
          priority
          className="w-[50%] h-full object-contain"
        />
      </div>
    </section>
  );
};
