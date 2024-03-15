import { Button } from "@/components/ui/button";
import Image from "next/image";

export const NavbarMobile = () => {
  return (
    <div className="flex justify-between items-center bg-white px-5 h-14">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size={"icon"} asChild className="w-8 h-8">
          <Image
            src="/icons/menu.svg"
            alt="logo"
            width={10}
            height={10}
            className="p-1.5 cursor-pointer"
          />
        </Button>
        <Image src="/logo.webp" alt="logo" width={90} height={45} />
      </div>
      {/* Icons */}
      <div className="">
        <Button variant="ghost" size={"icon"} asChild className="w-8 h-8 cursor-pointer">
          <Image src="/icons/search.1.svg" alt="logo" width={10} height={10} className="p-1.5" />
        </Button>
        <Button variant="ghost" size={"icon"} asChild className="w-8 h-8 cursor-pointer">
          <Image src="/icons/cart.svg" alt="logo" width={10} height={10} className="p-1.5" />
        </Button>
        <Button variant="ghost" size={"icon"} asChild className="w-8 h-8 cursor-pointer">
          <Image src="/icons/user.svg" alt="logo" width={10} height={10} className="p-1.5" />
        </Button>
      </div>
    </div>
  );
};
