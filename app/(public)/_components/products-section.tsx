import { ProductsSection } from "@/interfaces";
import { CardProduct } from "./card";
import { Button } from "@/components/ui/button";

export const SectionProducts = ({ title = "", products }: ProductsSection) => {
  return (
    <div className="flex flex-col items-center mx-auto py-5 w-full max-w-screen-xl max-2xl:max-w-screen-lg">
      <h2 className="py-9 font-extrabold text-4xl text-center text-slate-900 xl:text-5xl">{title}</h2>
      {products.map((product, index) => (
        <CardProduct key={index} {...product} />
      ))}
  
        <Button variant="outline" className="mx-auto my-8 rounded-full min-w-44">
          View all
        </Button>
   
    </div>
  );
};
