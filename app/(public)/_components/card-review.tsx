import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { RiStarFill, RiStarHalfFill } from "react-icons/ri";

export interface Props {
  className?: string;
  rating: number;
  title: string;
  date?: string;
}

export const CardReview = ({ className = "", rating = 1, title = "", date = "August 15, 2024" }: Props) => {
  return (
    <Card className={cn("w-full  max-w-[400px] hover:shadow-md hover:cursor-pointer p-1 rounded-2xl  transition-all", className)}>
      <CardHeader className="pb-2">
        <CardDescription>
          <div className="flex gap-1 text-[#FFC633] text-base">
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
            <RiStarHalfFill />
          </div>
        </CardDescription>
        <div className="flex items-center gap-2" >
          <CardTitle className="font-bold text-base text-gray-850 text-pretty xl:text">
            {title}
          </CardTitle>
          <Image src="/check.png" alt="check" width={20} height={20} />
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="font-normal text-gray-950 text-pretty text-xs xl:text-sm text-opacity-60">
          "Finding clothes that align with my personal style used to be a challenge until I discovered
          Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes
          and occasions.”
        </p>
      </CardContent>
      <CardFooter className="font-base text-gray-950 text-xs xl:text-sm text-opacity-60">
        <p>Posted on {date}</p>
      </CardFooter>
    </Card>
  );
};

