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
      path: '../../../public/fonts/Satoshi-Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Satoshi-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Satoshi-Bold.woff',
      weight: '800',
      style: 'normal',
    }
  ]
});

const data = [
  { count: "200+", description: "International Brands" },
  { count: "2,000", description: "High-Quality Products" },
  { count: "30,000+", description: "Happy Customers" },
];

export const HeroSection = () => {
  return (
    <section
      className={`${Satoshi.className} w-full `}>
      <div className='relative w-[100%] h-[680px]'>
        <Image
          src='/bg-hero.png'
          alt='bg-hero-image'
          objectFit='cover'
          layout='fill'
        />
        <div className='absolute pl-28 text-black h-full flex flex-row'>
          <div className='flex flex-col justify-center h-full gap-5'>
            <h2 className={`${IntegralCF.className} font-black text-6xl`}>
              FIND CLOTHES <br />
              THAT MATCHES <br />
              YOUR STYLE
            </h2>
            <p className='text-slate-500 text-base font-normal w-[600px]'>
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <Button
              variant='default'
              className='rounded-[62px] text-base font-light w-52 py-7 bg-black'>
              Shop now
            </Button>
            <div className='flex flex-row gap-6 py-10'>
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
          </div>
          <div>
            <Image
              src='/star-hero.svg'
              alt='star-hero-image'
              objectFit='cover'
              width={90}
              height={90}
              className='absolute left-[38rem] top-12 animate-moveRightLeft'
            />
            <Image
              src='/star-hero.svg'
              alt='star-hero-image'
              objectFit='cover'
              width={50}
              height={50}
              className='absolute left-11 top-56 animate-moveRightLeft'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

//2xl:max-screen-lg max-w-screen-xl