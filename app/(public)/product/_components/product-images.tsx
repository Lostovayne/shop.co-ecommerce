"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Props {
  images: string[];
}

export const ProductImages = ({ images }: Props) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <div className='flex justify-center w-full p-4 h-[585px] md:w-[50%] xl:w-[674px] md:px-5 lg:px-14'>
      <div className='flex flex-col-reverse xl:flex-row gap-4 w-full'>
        <div className='flex xl:flex-col xl:w-[30%] gap-4 h-full justify-between'>
          {images.slice(0, 3).map((image, index) => (
            <div
              key={index}
              className='h-full flex justify-center items-center w-full min-h-24'
              onClick={() => handleImageClick(image)}>
              <div className='relative w-full h-full justify-center items-center transition duration-300 transform hover:scale-105 fade-in bg-[#EAE4DD]/40 rounded-2xl'>
                <Image
                  src={image}
                  alt={`img-${index}`}
                  layout='fill'
                  objectFit='cover'
                  className='rounded-2xl shadow-md cursor-pointer'
                />
              </div>
            </div>
          ))}
        </div>
        <div className='flex flex-col gap-4 w-full h-[400px] xl:w-[70%] sm:h-full bg-[#EAE4DD]/40 rounded-2xl shadow-md sm:max-xl:max-h-[430px]'>
          <Image
            src={selectedImage}
            alt='selected-img'
            width={1500}
            height={1500}
            className='rounded-2xl w-full h-full object-contain'
          />
        </div>
      </div>
    </div>
  );
};


// Seccion de imagenes alternativa
{
  /* <div className='flex justify-center w-full sm:w-[50%] h-[550px] p-4 sm:px-14'>
<div className='flex flex-col-reverse sm:flex-row gap-4 w-full'>
  <div className='flex sm:flex-col sm:w-[30%] gap-4 h-full justify-between'>
    {images.slice(0, 3).map((image, index) => (
      <div key={index} className='h-full flex justify-center items-center w-full' onClick={() => handleImageClick(image)}>
        <div className='relative w-full h-full justify-center items-center transition duration-300 transform hover:scale-105 fade-in bg-[#EAE4DD]/40 rounded-2xl'>
          <Image
            src={image}
            alt={`img-${index}`}
            layout='fill'
            objectFit='cover'
            className='rounded-2xl shadow-md cursor-pointer'
          />
        </div>
      </div>
    ))}
  </div>
  <div className='flex flex-col gap-4 w-full h-[400px] sm:w-[70%] sm:h-full bg-[#EAE4DD]/40 rounded-2xl'>
    <div className='w-full h-full '>
      <Image
        src={selectedImage}
        alt='selected-img'
        width={500}
        height={500}
        className='w-full h-full object-cover m-auto rounded-2xl shadow-md'
      />
    </div>
  </div>
</div>
</div> */
}
