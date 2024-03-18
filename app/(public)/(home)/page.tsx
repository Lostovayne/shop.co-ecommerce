import { DataProducts } from "@/data/data-products";
import { HeroSection } from "../_components";
import { MarksBar } from "../_components/marks-bar";
import { SectionProducts } from "../_components/products-section";

const HomePage = () => {
  const products = DataProducts;

  return (
    <div className="h-full min-h-screen">
      <HeroSection />
      <MarksBar />
      <SectionProducts title={"New Arrivals"} products={products} />
      <SectionProducts title={"Top Selling"} products={products} />
    </div>
  );
};
export default HomePage;
