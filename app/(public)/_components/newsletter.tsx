import React from "react";
import { GoMail } from "react-icons/go";
import { Button } from "@/components/ui/button";

function Newsletter() {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center bg-black md:justify-between h-[293px] md:h-[180px] xl:max-w-screen-xl max-2xl:max-w-screen-lg rounded-xl absolute top-[-90px] left-[20%] right-[20%]">
      <div className="flex items-center w-[80%] md:w-[60%] flex-col">
        <h1 className="text-3xl w-full md:text-4xl font-extrabold text-white uppercase md:w-[80%] md:pl-4 text-center">
          Stay up to date about our latest offers
        </h1>
      </div>
      <div className="flex items-center w-[80%] md:w-[40%] flex-col gap-2">
        <div className="flex w-full gap-4 items-center justify-start bg-white px-4 py-2 rounded-2xl md:w-80">
          <GoMail className="bg-white text-2xl" />
          <input type="text" name="" id="" placeholder="Enter your email address" className="w-full" />
        </div>
        <Button className="bg-white w-full px-4 py-2 rounded-2xl text-black text-center font-lg hover:bg-slate-500 hover:text-white cursor-pointer md:w-80">
          Subscribe to Newsletter
        </Button>
      </div>
    </div>
  );
}

export default Newsletter;
