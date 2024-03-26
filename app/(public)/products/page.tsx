import React from "react";
import { DataProducts } from "@/data/data-products";
import { CardProduct } from "../_components";
import { Products } from "@/interfaces";

const ProductsPage = (): JSX.Element => {
  return (
    <div className="mx-auto my-16 w-full max-w-screen-xl max-lg:max-w-screen-lg max-2xl:max-w-screen-lg h-auto">
      <div className="gap-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 bg-green h-auto">
        <aside className="lg:col-span-3">daf</aside>
        <section className="flex flex-wrap items-center gap-6 col-span-1 md:col-span-2 lg:col-span-9 mt-20 mb-24">
          {DataProducts.map((e) => (
            <CardProduct key={e.id} {...e} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default ProductsPage;
