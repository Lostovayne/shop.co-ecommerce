import { Card } from "@/components/ui/card";
import { CardProp } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import { RiStarFill, RiStarHalfFill } from "react-icons/ri";

/**
 * Render a card product with the given props.
 *
 * @param {CardProp} props - The props for the card product.
 * @returns {JSX.Element} The rendered card product.
 */

export const CardProduct = ({ slug, name, price, image, rating }: CardProp): JSX.Element => {
  return (
    <Card>
      <Link href={`/product/${slug}`}>
        <div className="flex flex-col justify-start items-start w-[12.375rem] lg:w-[18.44rem] h-[18.1875rem] lg:min-h-[24.83rem]">
          <Image
            src={image}
            alt={name}
            width={80}
            height={85}
            className="mx-auto rounded-2xl w-[198px] lg:w-[295px] h-[200px] lg:h-[298px] object-contain"
          />
          <h3 className="mt-3 font-bold text-base text-black text-start lg:text-xl capitalize">
            {name}
          </h3>
          <div className="flex justify-start gap-2 lg:gap-4 item-center">
            <div id="rating" className="flex justify-center items-center text-lg text-yellow-500">
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarHalfFill />
            </div>
            <span className="text-base text-slate-300">
              <i>{rating}/5</i>
            </span>
          </div>
          <div className="flex justify-start items-center gap-2 lg:gap-5">
            <span className="font-medium text-base text-black lg:text-xl">${price}</span>
            <span className="font-medium text-base text-slate-300 lg:text-xl line-through">
              ${price + price * 0.2}
            </span>
            <span className="bg-red-100 px-2 lg:px-3 py-0 lg:py-1 rounded-full font-light text-red-500 text-sm lg:text-pretty">
              -20%
            </span>
          </div>
        </div>
      </Link>
    </Card>
  );
};
