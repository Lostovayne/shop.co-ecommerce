"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export const ProductAdd = ({ maxQuantity }: { maxQuantity: number }) => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
    }
  };

  const addToCart = () => {
    // Lógica para agregar al carrito
  };

  return (
    <div className='flex gap-5'>
      <div className='flex justify-between bg-gray-100 max-w-40 w-full rounded-full items-center'>
        <Button
          variant='secondary'
          className='rounded-full text-lg font-semibold px-5 hover:bg-gray-200'
          onClick={decreaseQuantity}>
          -
        </Button>
        <div className='flex justify-center items-center w-full'>
          <p className='font-semibold text-lg'>{quantity}</p>
        </div>
        <Button
          variant='secondary'
          className='rounded-full text-lg font-semibold px-5 hover:bg-gray-200'
          onClick={increaseQuantity}
          disabled={quantity >= maxQuantity}>
          +
        </Button>
      </div>
      <Button className='w-96 rounded-full bg-black' onClick={addToCart}>
        Add to Cart
      </Button>
    </div>
  );
};
