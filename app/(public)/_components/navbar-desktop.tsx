import { MenuItems } from "@/constant/menu-items";
import Image from "next/image";

export const NavbarDesktop = () => {
  return (
    <div className="flex items-center bg-white h-20">
      <div className="flex justify-between items-center mx-auto w-full max-w-screen-xl">
        <Image src="/logo.webp" alt="logo" width={120} height={60} />
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
        <div className="flex items-center bg-gray-100/80 px-2 rounded-2xl w-full max-w-96 h-9">
          <Image src="/icons/search.svg" alt="search" width={20} height={20} />
          <input
            type="text"
            className="bg-transparent px-2 py-2 w-full placeholder:font-light text-sm placeholder:text-gray-400 placeholder:text-sm outline-none"
            placeholder="Search for products..."
          />
        </div>
        {/* Cart and User */}
        <div className="flex items-center gap-2">
          <Image src="/icons/cart.svg" alt="cart" width={20} height={20} className="cursor-pointer" />
          <Image src="/icons/user.svg" alt="user" width={20} height={20} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
