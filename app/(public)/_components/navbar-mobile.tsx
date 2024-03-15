import { Button } from "@/components/ui/button";
import Image from "next/image";
import { RiSearchLine } from "react-icons/ri";
import { RiShoppingCartLine } from "react-icons/ri";
import { RiUserReceivedLine } from "react-icons/ri";
import { RiMenu2Line } from "react-icons/ri";

export const NavbarMobile = () => {
  return (
    <div className="flex justify-between items-center bg-white px-5 h-14">
      <div className="flex items-center gap-2.5">
        <Button variant="ghost" size={"icon"} asChild className="w-8 h-8">
         <RiMenu2Line className="w-5 h-5 text-gray-900" />
        </Button>
        <Image src="/logo.webp" alt="logo" width={90} height={45} />
      </div>
      {/* Icons */}
      <div className="space-x-1">
        <Button variant="ghost" size={"icon"} asChild className="w-8 h-8 cursor-pointer">
          <RiSearchLine className="w-5 h-5 text-gray-900" />
        </Button>
        <Button variant="ghost" size={"icon"} asChild className="w-8 h-8 cursor-pointer">
          <RiShoppingCartLine className="w-5 h-5 text-gray-900" />
        </Button>
        <Button variant="ghost" size={"icon"} asChild className="w-8 h-8 cursor-pointer">
          <RiUserReceivedLine className="w-5 h-5 text-gray-900" />
        </Button>
      </div>
    </div>
  );
};
