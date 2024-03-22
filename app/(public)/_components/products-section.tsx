import { Button } from "@/components/ui/button";
import { ProductsSection } from "@/interfaces";
import { CardProduct } from "./card";

export const SectionProducts = ({ title = "", products }: ProductsSection) => {
  return (
    <div className="flex flex-col items-center mx-auto py-2 w-full max-w-screen-xl max-2xl:max-w-screen-lg">
      <h2 className="pt-9 pb-12 font-extrabold text-4xl text-center text-slate-900 xl:text-5xl uppercase">{title}</h2>
      <div className="flex flex-wrap justify-evenly items-center gap-5">
        {products.map((product, index) => index < 4 && <CardProduct key={product.id} {...product} />)}
      </div>

      <Button
        variant="outline"
        className="hover:bg-white hover:shadow-sm mx-auto mt-10 mb-4 py-6 rounded-full min-w-48 transition-all"
      >
        View all
      </Button>
    </div>
  );
};
