"use client";
import { Reviews } from "@/interfaces/card-reviews";
import { CardReview } from "./card-review";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";

interface Props {
  title: string;
  reviews: Reviews[];
}

const SectionReview = ({ title = "", reviews = [] }: Props) => {
  const [isloading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (isloading) return null;

  return (
    <section className="mx-auto xl:mb-36 px-4 py-5 w-full max-w-screen-xl max-2xl:max-w-screen-lg">
      <h2 className="py-9 font-extrabold text-4xl text-center text-slate-900 xl:text-5xl">{title}</h2>

      <Carousel
        className="py-5 w-full"
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            align: "center",
            loop: true,
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="-ml-1">
          {reviews.map(
            (review, index) => (
              console.log(review),
              (
                <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <CardReview {...review} />
                </CarouselItem>
              )
            )
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
export default SectionReview;
function useffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
