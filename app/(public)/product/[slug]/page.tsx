import { DataProducts } from "@/data/data-products";
import { ProductImages } from "../_components/product-images";
import { Separator } from "@/components/ui/separator";
import { ProductDescription } from "../_components/product-description";
import { ProductAdd } from "../_components/product-add";
import { ProductColor } from "../_components/product-color";
import { ProductSize } from "../_components/product-size";

interface Props {
  params: {
    slug: string;
  };
}

const ProductPage = ({ params }: Props) => {
  const { slug } = params;
  const product = DataProducts.find((product) => product.slug === slug);
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section className='flex flex-col sm:flex-row 2xl:justify-center h-full w-full mb-[100px]'>
      <ProductImages images={product.image} />
      <div className='flex flex-col justify-center w-full p-4 sm:w-[50%] 2xl:w-[700px] gap-5'>
        <div className='flex flex-col gap-5'>
          <ProductDescription
            name={product.name}
            description={product.description}
            price={product.price}
            rating={product.rating}
            discount={product.discount}
          />
          <Separator />
          <ProductColor colors={product.color} />
          <Separator />
          <ProductSize sizes={product.size} />
          <Separator />
        </div>
        <ProductAdd maxQuantity={product.quantity}/>
      </div>
    </section>
  );
};
export default ProductPage;
