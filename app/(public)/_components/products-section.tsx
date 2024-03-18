import { ProductsSection } from "@/interfaces";
import { CardProduct } from "./card";


export const SectionProducts = ({ title = "", products = [] }: ProductsSection) => {
  return (
    <div>
      <h2 className="font-bold text-4xl text-slate-900">{title}</h2>
      <CardProduct products={products} />
    </div>
  );
};


