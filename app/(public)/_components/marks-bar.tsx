import Image from 'next/image'

export const MarksBar = () => {
  return (
    <div className="flex justify-around items-center bg-black py-2 h-30">
      <div className='flex flex-row flex-wrap justify-around gap-5 mt-6 mb-6 max-2xl:px-3 w-full max-2xl:max-w-screen-lg 3xl:max-w-screen-xl'>
        <Image
          src="/marks/Versace.webp"
          width={140}
          height={60}
          className='w-auto md:w-60 h-6 md:h-8 object-contain'
          alt="Picture of the author"
        />
        <Image
          src="/marks/Zara.webp"
          width={140}
          height={60}
          className='w-auto md:w-60 h-6 md:h-8 object-contain'
          alt="Picture of the author"
        />
        <Image
          src="/marks/Gucci.webp"
          width={120}
          height={50}
          className='w-auto md:w-60 h-6 md:h-8 object-contain'
          alt="Picture of the author"
        />
        <Image
          src="/marks/Prada.webp"
          width={140}
          height={60}
          className='w-auto md:w-60 h-6 md:h-8 object-contain'
          alt="Picture of the author"
        />
        <Image
          src="/marks/CalvinKlein.webp"
          width={140}
          height={60}
          className='w-auto md:w-60 h-6 md:h-8 object-contain'
          alt="Picture of the author"
        />
      </div>
    </div>
  )
}


