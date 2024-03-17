import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import localFont from "next/font/local";

const IntegralCF = localFont({
  src: "../../../public/fonts/IntegralCF-Medium.woff",
});

const Satoshi = localFont({
  src: [
    {
      path: "../../../public/fonts/Satoshi-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Satoshi-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Satoshi-Bold.woff",
      weight: "800",
      style: "normal",
    },
  ],
});

const data = [
  { count: "200+", description: "International Brands" },
  { count: "2,000", description: "High-Quality Products" },
  { count: "30,000+", description: "Happy Customers" },
];

export const HeroSection = () => {
  return (
    <section className={`${Satoshi.className} w-full flex flex-col`}>
      <div className='relative w-[100%] sm:h-[680px] h-[630px]'>
        <Image
          src='/bg-hero.png'
          alt='bg-hero-image'
          objectFit='cover'
          layout='fill'
          className='md:flex hidden'
        />
        <div className='absolute sm:pl-10 md:pl-28 text-black sm:h-full flex flex-col sm:flex-row'>
          <div className='flex flex-col justify-center h-full gap-7 sm:gap-5 mt-12 sm:mt-0'>
            <div className='flex flex-col pl-5 gap-7 sm:gap-5 sm:pl-0'>
              <h2
                className={`${IntegralCF.className} font-black text-4xl sm:text-6xl`}>
                FIND CLOTHES <br />
                THAT MATCHES <br />
                YOUR STYLE
              </h2>
              <p className='text-slate-500 text-base font-normal sm:w-[600px]'>
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
            </div>
            <Button
              variant='default'
              className='rounded-[62px] text-base font-light w-11/12 py-7 bg-black mx-auto sm:mx-0 px-10 sm:w-52'>
              Shop now
            </Button>
            {/*   Desktop Data   */}
            <div className='sm:flex flex-col sm:flex-row gap-6 py-10 hidden'>
              {data.map((item, index) => (
                <div key={item.description} className='flex gap-5'>
                  <div className='flex flex-col gap-1'>
                    <p className='text-black font-bold text-4xl'>
                      {item.count}
                    </p>
                    <p className='text-slate-500 font-normal text-base'>
                      {item.description}
                    </p>
                  </div>
                  <div>
                    {index !== data.length - 1 && (
                      <Separator
                        orientation='vertical'
                        className='bg-slate-300'
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
            {/*   Mobile Data   */}
            <div className='flex flex-col sm:hidden'>
              <div className='flex flex-row gap-6 pt-10 justify-center'>
                {data.slice(0, 2).map((item, index) => (
                  <div key={item.description} className='flex gap-5'>
                    <div className='flex flex-col gap-1'>
                      <p className='text-black font-bold text-3xl'>
                        {item.count}
                      </p>
                      <p className='text-slate-500 font-normal text-base'>
                        {item.description}
                      </p>
                    </div>
                    <div>
                      {index === 0 && (
                        <Separator
                          orientation='vertical'
                          className='bg-slate-300'
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className='flex flex-col items-center gap-1 pt-10'>
                <p className='text-black font-bold text-3xl'>{data[2].count}</p>
                <p className='text-slate-500 font-normal text-base'>
                  {data[2].description}
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src='/star-hero.svg'
              alt='star-hero-image'
              objectFit='cover'
              width={90}
              height={90}
              className='hidden lg:flex absolute left-[38rem] top-12'
            />
            <Image
              src='/star-hero.svg'
              alt='star-hero-image'
              objectFit='cover'
              width={50}
              height={50}
              className='hidden lg:flex absolute left-11 top-56'
            />
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <Image
          src='/bg-hero-mobile.png'
          alt='bg-hero-image'
          width={700}
          height={500}
          className='md:hidden'
        />
      </div>
    </section>
  );
};
