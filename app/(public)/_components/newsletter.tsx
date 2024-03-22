import { Button } from "@/components/ui/button";
import { RiMailLine } from "react-icons/ri";

function Newsletter() {
  return (
    <div className="top-[-90px] right-[0.9rem] left-[0.9rem] absolute flex md:flex-row flex-col justify-evenly md:justify-between items-center bg-black 2xl:mx-auto rounded-xl max-2xl:max-w-screen-lg xl:max-w-screen-xl md:h-[180px] xl:h-[210px]">
      <div className="flex flex-col items-center w-[80%] md:w-[50%]">
        <h1 className="w-full md:w-[80%] font-extrabold text-3xl text-pretty text-white md:text-4xl md:text-start uppercase">
          Stay upto date about our latest offers
        </h1>
      </div>
      <div className="flex flex-col items-center gap-2 w-[80%] md:w-[50%]">
        <div className="flex justify-start items-center gap-4 bg-white px-4 py-2 rounded-2xl w-full md:w-80">
          <RiMailLine className="bg-white text-2xl text-gray-500" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your email address"
            className="bg-transparent 2xl:placeholder:pl-6 max-2xl:placeholder:pl-2.5 w-full placeholder:font-normal placeholder:text-sm outline-none"
          />
        </div>
        <Button className="bg-white hover:bg-gray-200 px-4 py-2 rounded-2xl w-full md:w-80 font-lg text-black text-center hover:text-black placeholder:transition-colors cursor-pointer">
          Subscribe to Newsletter
        </Button>
      </div>
    </div>
  );
}

export default Newsletter;
