import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { HeroData } from "@/constant";
import localFont from "next/font/local";

const IntegralCF = localFont({
  src: "../../../public/fonts/IntegralCF-Medium.woff",
});

export const HeroText = () => {
  return (
    <div className='flex justify-start items-center md:w-[60%] 2xl:w-[50%] h-full'>
      <div className='flex flex-col items-start gap-7 md:gap-4 lg:gap-6 px-5 md:px-0 md:pl-3'>
        <h2
          className={`${IntegralCF.className} pt-8 md:pt-0 font-black text-4xl sm:text-5xl md:text-4xl lg:text-5xl 2xl:text-6xl`}>
          FIND CLOTHES <br />
          THAT MATCHES <br />
          YOUR STYLE
        </h2>
        <p className='font-normal sm:text-sm 2xl:text-base text-slate-500'>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <Button
          variant='default'
          className='bg-black py-7 rounded-[62px] min-w-full sm:min-w-96 md:min-w-60 font-light text-base lg:h-14'>
          Shop now
        </Button>
        <div className='flex sm:flex-row flex-col gap-4 pt-3 md:pt-0 items-center justify-center m-auto sm:m-0'>
          <div className='flex flex-row gap-4 items-center'>
            {HeroData.slice(0, 2).map((item, index) => (
              <div key={index} className='flex gap-5'>
                <div className='flex flex-col gap-1'>
                  <p className='font-bold text-2xl 2xl:text-4xl text-black'>
                    {item.count}
                  </p>
                  <p className='font-normal text-sm 2xl:text-base text-slate-500'>
                    {item.description}
                  </p>
                </div>
                <div>
                  <Separator orientation='vertical' className='bg-slate-300' />
                </div>
              </div>
            ))}
          </div>
          <div className='flex gap-4'>
            <div className='flex flex-col gap-1'>
              <p className='font-bold text-2xl 2xl:text-4xl text-black'>
                {HeroData[2].count}
              </p>
              <p className='font-normal text-sm 2xl:text-base text-slate-500'>
                {HeroData[2].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className='sm:flex sm:flex-row flex-col gap-6 pt-3'>
  {HeroData.map((item, index) => (
    <div key={item.description} className='flex gap-5'>
      <div className='flex flex-col gap-1'>
        <p className='font-bold sm:text-2xl 2xl:text-4xl text-black'>
          {item.count}
        </p>
        <p className='font-normal text-sm 2xl:text-base text-slate-500'>
          {item.description}
        </p>
      </div>
      <div>
        {index !== HeroData.length - 1 && (
          <Separator orientation='vertical' className='bg-slate-300' />
        )}
      </div>
    </div>
  ))}
</div>; */
}

{
  /* <div className='flex sm:flex-row flex-col gap-5 pt-3 items-center justify-center m-auto'>
  <div className='flex flex-row gap-3 items-center'>
    <div className='flex gap-5'>
      <div className='flex flex-col gap-1'>
        <p className='font-bold sm:text-2xl 2xl:text-4xl text-black'>
          {HeroData[0].count}
        </p>
        <p className='font-normal text-sm 2xl:text-base text-slate-500'>
          {HeroData[0].description}
        </p>
      </div>
      <div>
        <Separator orientation='vertical' className='bg-slate-300' />
      </div>
    </div>
    <div className='flex gap-5'>
      <div className='flex flex-col gap-1'>
        <p className='font-bold sm:text-2xl 2xl:text-4xl text-black'>
          {HeroData[1].count}
        </p>
        <p className='font-normal text-sm 2xl:text-base text-slate-500'>
          {HeroData[1].description}
        </p>
      </div>
      <div>
        <Separator orientation='vertical' className='bg-slate-300' />
      </div>
    </div>
  </div>
  <div className='flex gap-5'>
    <div className='flex flex-col gap-1'>
      <p className='font-bold sm:text-2xl 2xl:text-4xl text-black'>
        {HeroData[2].count}
      </p>
      <p className='font-normal text-sm 2xl:text-base text-slate-500'>
        {HeroData[2].description}
      </p>
    </div>
  </div>
</div>; */
}
