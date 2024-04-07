import { Color } from "@/interfaces/enums";

export const ProductColor = ({ colors }: { colors: string[] }) => {

  const getColorClassName = (color: string) => {
    switch (color) {
      case Color.Black:
        return "bg-black";
      case Color.Blue:
        return "bg-blue-500";
      case Color.Green:
        return "bg-green-500";
      default:
        return "bg-gray-400"; 
    }
  };
  
  return (
    <div className='flex flex-col gap-3'>
      <p className='text-base font-light'>Select Colors</p>
      <ul className='flex gap-2'>
        {colors.map((color, index) => (
          <li
            key={index}
            className={`size-9 cursor-pointer rounded-full border-black ${getColorClassName(color)}`}></li>
        ))}
      </ul>
    </div>
  );
};
