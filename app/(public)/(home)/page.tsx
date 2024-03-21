import { DataProducts } from "@/data/data-products";
import { HeroSection } from "../_components";
import { MarksBar } from "../_components/marks-bar";
import { SectionProducts } from "../_components/products-section";
import SectionReview from "../_components/reviews-section";
import { DataReviews } from "@/data/data.review";

const HomePage = () => {
  // Server actions
  const products = DataProducts;
  const Reviews = DataReviews


  return (
    <div className="h-full min-h-screen">
      <HeroSection />
      <MarksBar />
      <SectionProducts title={"New Arrivals"} products={products} />
      <SectionProducts title={"Top Selling"} products={products} />
      {/* Crear un slider */}
      <SectionReview title={"OUR HAPPY CUSTOMERS"} reviews={Reviews} />
    </div>
  );
};
export default HomePage;
