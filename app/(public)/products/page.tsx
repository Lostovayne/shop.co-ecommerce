"use client";
import React, { useState } from "react";
import { DataProducts } from "@/data/data-products";
import { CardProduct } from "../_components";
import { Products } from "@/interfaces";

const ProductsPage = (): JSX.Element => {
  const [toggle, setToggle] = useState<boolean>(true);
  const handleClick = (): void => {
    setToggle(!toggle);
  };

  const asideStyle = `lg:relative top-0 ${toggle?"left-0":"-left-[550px]"} absolute md:col-span-0 lg:col-span-4 bg-blue-300 rounded-e-lg w-3/4 md:w-1/2 h-screen `

  return (
    <div className="mx-auto mb-16 w-full max-w-screen-xl max-lg:max-w-screen-lg max-2xl:max-w-screen-lg h-auto">
      <div className="relative gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 bg-green-50 h-auto">
        <aside className={`${asideStyle} transition-all `}>
          <button className="lg:hidden text-3xl" onClick={() => handleClick()}>
            X
          </button>
        </aside>
        <h2 className="px-4 py-10 font-extrabold text-3xl text-left">Trending Products</h2>
        <button className="top-7 right-2 absolute lg:hidden bg-red-300 px-8 py-4 rounded-xl" onClick={()=>handleClick()}>Filtros</button>
        <section className="flex flex-wrap justify-center items-center gap-8 col-span-1 md:col-span-2 lg:col-span-8 bg-slate-50 mb-24">
          {DataProducts.map((e) => (
            <CardProduct key={e.id} {...e} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default ProductsPage;
