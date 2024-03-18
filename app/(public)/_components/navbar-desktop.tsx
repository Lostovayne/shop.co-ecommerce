import { MenuItems } from "@/constant/menu-items";
import Image from "next/image";

import { RiSearchLine, RiShoppingCartLine, RiUserReceivedLine } from "react-icons/ri";

export const NavbarDesktop = () => {
  return (
    <div className="flex items-center bg-white h-20">
      <div className="flex justify-between items-center mx-auto w-full max-w-screen-xl max-2xl:max-w-screen-lg">
        <Image src="/logo.webp" alt="logo" width={140} height={70} />
        <nav className="">
          <ul className="flex items-center gap-5 font-normal text-base">
            {MenuItems.map((item) => {
              return (
                <li className="cursor-pointer" key={item.id}>
                  {item.name}
                </li>
              );
            })}
          </ul>
        </nav>
        {/* Search */}
        <div className="flex items-center bg-gray-100/80 px-2.5 rounded-2xl w-full max-w-96 h-9">
          <RiSearchLine className="text-gray-500 text-xl" />
          <input
            type="text"
            className="bg-transparent px-2 py-2 w-full placeholder:font-light text-sm placeholder:text-gray-400 placeholder:text-sm outline-none"
            placeholder="Search for products..."
          />
        </div>
        {/* Cart and User */}
        <div className="flex items-center gap-2">
         <RiShoppingCartLine className="text-gray-500 text-xl cursor-pointer"/>
         <RiUserReceivedLine className="text-gray-500 text-xl cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};
