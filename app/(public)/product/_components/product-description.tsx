import { RiStarFill, RiStarHalfFill } from "react-icons/ri";

interface Props {
  name: string;
  description: string;
  price: number;
  rating: number;
  discount: number;
}

export const ProductDescription = ({
  name,
  description,
  price,
  rating,
  discount,
}: Props) => {
  return (
    <div className=' flex flex-col gap-3'>
      <h2 className='text-3xl sm:text-5xl font-black'>{name}</h2>
      <div className='flex justify-start gap-2 lg:gap-4 item-center'>
        <div
          id='rating'
          className='flex justify-center items-center text-[#FFC633] text-lg'>
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
          <RiStarHalfFill />
        </div>
        <span className='font-medium text-gray-500 text-xs'>{rating}/5</span>
      </div>
      <div className='pb-1'>
        {/* Precio con las ofertas */}
        <div className='flex flex-row gap-4 items-center'>
          <p className='text-2xl font-bold'>${price}</p>
          <p className='text-2xl font-bold opacity-30'>
            <del>${Math.ceil(price / (1 - discount / 100))}</del>
          </p>
          <div className='flex justify-center h-full w-16 bg-[#FF33331A] rounded-xl'>
            {/* Badge de oferta */}
            <p className='text-[#FF3333] font-medium text-base'>{discount}%</p>
          </div>
        </div>
      </div>
      <p className='text-base font-light'>{description}</p>
    </div>
  );
};
