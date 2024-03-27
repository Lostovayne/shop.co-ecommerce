import { Products } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import { RiStarFill, RiStarHalfFill } from "react-icons/ri";

export const CardProduct = (product: Products): JSX.Element => {
  const { name, slug, image } = product;

  return (
    <Link href={`/product/${slug}`}>
      <div className="flex flex-col justify-start items-start w-full max-w-[18.5rem]">
        <div className="bg-[#EAE4DD]/40 px-10 pt-12 rounded-2xl">
          <Image
            src={`${image[0]}`}
            alt={name}
            width={1000}
            height={1200}
            className="w-[15rem] h-[17rem] object-contain"
          />
        </div>
        <div className="px-2">
          <h3 className="mt-3 font-bold text-base text-black text-start xl:text-lg capitalize">
            {name}
          </h3>
          <div className="flex justify-start gap-2 lg:gap-4 item-center">
            <div id="rating" className="flex justify-center items-center text-[#FFC633] text-lg">
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarHalfFill />
            </div>
            <span className="font-medium text-gray-500 text-xs">
              {product.rating}/5
            </span>
          </div>
          <div className="flex justify-start items-center gap-2 xl:gap-3 mt-1.5">
            <span className="font-bold text-base text-black xl:text-lg">${product.price}</span>
            <span className="font-normal text-gray-300 text-xs xl:text-sm line-through">
              ${product.price + product.price * 0.2}
            </span>
            <span className="bg-red-100/90 px-1.5 xl:px-2 py-1.5 rounded-full font-semibold text-red-400 text-xs lg:text-pretty">
              -20%
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
