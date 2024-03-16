import Image from 'next/image'

export const MarksBar = () => {
  return (
    <div className="flex justify-around items-center bg-black h-30">
      <div className='flex flex-row justify-around flex-wrap gap-5 w-full mt-6 mb-6'>
        <Image
          src="/marks/Versace.webp"
          width={100}
          height={50}
          alt="Picture of the author"
        />
        <Image
          src="/marks/Zara.webp"
          width={60}
          height={50}
          alt="Picture of the author"
        />
        <Image
          src="/marks/Gucci.webp"
          width={100}
          height={50}
          alt="Picture of the author"
        />
        <Image
          src="/marks/Prada.webp"
          width={100}
          height={50}
          alt="Picture of the author"
        />
        <Image
          src="/marks/CalvinKlein.webp"
          width={140}
          height={50}
          alt="Picture of the author"
        />
      </div>
    </div>
  )
}