import React from "react";
import Image from "next/image";



export const FluidMosaic = (): JSX.Element => {
  return (
    <div className="bg-slate-100 mx-auto mt-10 rounded-xl w-[22.375rem] md:w-[80%] lg:w-[77.4375rem] h-[60.938rem] lg:h-[54.6875rem] xl:h-[54.6875rem] 2xl:h-[54.6875rem]">
      <h2 className="pt-20 pb-12 font-extrabold text-4xl text-center text-slate-900 xl:text-5xl uppercase">
        BROWsE BY DRESS STYLE
      </h2>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 grid-rows-4 md:grid-rows-2 lg:grid-rows-2 mx-auto rounded-lg w-[90%] h-[46rem] lg:h-[36rem] overflow-hidden">
        <div className="relative col-span-1 md:col-span-1 lg:col-span-4 row-span-1 rounded-lg cursor-pointer overflow-hidden">
          <img
            width={80}
            height={80}
            src="./mosaic/casual.png"
            className="w-full h-full object-cover"
            alt="Nombree"
          />
          <h2 className="top-3 left-4 absolute font-extrabold text-2xl text-center text-slate-900 xl:text-3xl capitalize">
            Casual
          </h2>
        </div>
        <div className="relative col-span-1 md:col-span-1 lg:col-span-8 row-span-1 rounded-lg cursor-pointer overflow-hidden">
          <img
            width={80}
            height={80}
            src="./mosaic/formal.png"
            className="w-full h-full object-cover"
            alt="Nombree"
          />
          <h2 className="top-3 left-4 absolute font-extrabold text-2xl text-center text-slate-900 xl:text-3xl capitalize">
            Formal
          </h2>
        </div>
        <div className="relative col-span-1 md:col-span-1 lg:col-span-8 row-span-1 rounded-lg cursor-pointer overflow-hidden">
          <img
            width={80}
            height={80}
            src="./mosaic/party.png"
            className="w-full h-full object-cover"
            alt="Nombree"
          />
          <h2 className="top-3 left-4 absolute font-extrabold text-2xl text-center text-slate-900 xl:text-3xl capitalize">
            Party
          </h2>
        </div>

        <div className="relative col-span-1 md:col-span-1 lg:col-span-4 row-span-1 rounded-lg cursor-pointer overflow-hidden">
          <img
            width={80}
            height={80}
            src="./mosaic/sport.png"
            className="w-full h-full object-cover"
            alt="Nombree"
          />
          <h2 className="top-3 left-4 absolute font-extrabold text-2xl text-center text-slate-900 xl:text-3xl capitalize">
            Sport
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FluidMosaic;
