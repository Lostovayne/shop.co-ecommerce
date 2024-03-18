import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { HeroData } from "@/constant";

import localFont from "next/font/local";
const IntegralCF = localFont({
  src: "../../../public/fonts/IntegralCF-Medium.woff",
});

export const HeroText = () => {
  return (
    <div className="flex justify-start items-center w-[50%] h-full">
      <div className="flex flex-col items-start gap-7 sm:gap-5 pl-5 sm:pl-0">
        <h2 className={`${IntegralCF.className} font-black text-4xl sm:text-6xl`}>
          FIND CLOTHES <br />
          THAT MATCHES <br />
          YOUR STYLE
        </h2>
        <p className="font-normal text-base text-slate-500">
          Browse through our diverse range of meticulously crafted garments, designed to bring out your
          individuality and cater to your sense of style.
        </p>
        <Button variant="default" className="bg-black py-7 rounded-[62px] min-w-60 font-light text-base">
          Shop now
        </Button>

        <div className="sm:flex sm:flex-row flex-col gap-6 py-10">
          {HeroData.map((item, index) => (
            <div key={item.description} className="flex gap-5">
              <div className="flex flex-col gap-1">
                <p className="font-bold text-4xl text-black">{item.count}</p>
                <p className="font-normal text-base text-slate-500">{item.description}</p>
              </div>
              <div>
                {index !== HeroData.length - 1 && (
                  <Separator orientation="vertical" className="bg-slate-300" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}