import { Reviews } from "@/interfaces/card-reviews";
import { CardReview } from "./card-review";

interface Props {
  title: string;
  reviews: Reviews[];
}

const SectionReview = ({ title = "", reviews = [] }: Props) => {
  return (
    <section className="mx-auto py-5 w-full max-w-screen-xl max-2xl:max-w-screen-lg">
      <h2 className="py-9 font-extrabold text-4xl text-center text-slate-900 xl:text-5xl">{title}</h2>

      <div className="my-8">
        {reviews.map((review, index) => (
          <CardReview key={index} {...review} />
        ))}
      </div>
    </section>
  );
};
export default SectionReview;
