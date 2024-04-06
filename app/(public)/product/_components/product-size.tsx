import { Button } from "@/components/ui/button";

export const ProductSize = ({ sizes }: { sizes: string[] }) => {
  return (
    <div className='flex flex-col gap-3'>
      <p className='text-base font-light'>Choose Size</p>
      <div className='flex flex-wrap gap-2'>
        {sizes.map((size, index) => (
          <Button variant='secondary' key={index} className='rounded-full text-base font-light hover:bg-black hover:text-white'>
            {size}
          </Button>
        ))}
      </div>
    </div>
  );
};
