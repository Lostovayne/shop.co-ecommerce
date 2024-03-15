import { Button } from "@/components/ui/button";
import Newsletter from "./newsletter";
import Image from "next/image";
//Icons
import { RiFacebookFill, RiGithubFill, RiInstagramLine, RiTwitterXFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <footer className="relative bg-[#F0F0F0] px-4 py-6 h-auto xl:h-64">
      <Newsletter />
      <div>
        <Image src="/logo.webp" alt="footer" width={120} height={60} className="object-cover" />
        <p className="mt-3 font-normal text-gray-500 text-sm">
          We have clothes that suits your style and which you’re proud to wear. From women to men.
        </p>
        {/* Icons */}
        <div className="space-x-3 mt-4">
          <Button
            variant="outline"
            size={"icon"}
            asChild
            className="border-gray-300 hover:bg-black hover:shadow p-2 border rounded-full w-9 h-9 hover:text-white transition-colors duration-500 cursor-pointer"
          >
            <RiTwitterXFill />
          </Button>
          <Button
            variant="outline"
            size={"icon"}
            asChild
            className="border-gray-300 hover:bg-black hover:shadow p-2 border rounded-full w-9 h-9 hover:text-white transition-colors duration-500 cursor-pointer"
          >
            <RiFacebookFill />
          </Button>

          <Button
            variant="outline"
            size={"icon"}
            asChild
            className="border-gray-300 hover:bg-black hover:shadow p-2 border rounded-full w-9 h-9 hover:text-white transition-colors duration-500 cursor-pointer"
          >
            <RiInstagramLine />
          </Button>

          <Button
            variant="outline"
            size={"icon"}
            asChild
            className="border-gray-300 hover:bg-black hover:shadow p-2 border rounded-full w-9 h-9 hover:text-white transition-colors duration-500 cursor-pointer"
          >
            <RiGithubFill />
          </Button>
        </div>

        <section className="gap-x-8 gap-y-4 border-gray-300 grid grid-cols-2 mx-auto mt-5 pb-7 border-b w-full">
          {/* Company */}
          <div className="space-y-2">
            <h3 className="font-medium text-gray-800 text-sm uppercase tracking-widest">Company</h3>
            <ul className="flex flex-col gap-2 font-normal text-gray-500 text-xs">
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-2">
            <h3 className="font-medium text-gray-800 text-sm uppercase tracking-widest">Help</h3>
            <ul className="flex flex-col gap-2 font-normal text-gray-500 text-xs">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-2">
            <h3 className="font-medium text-gray-800 text-sm uppercase tracking-widest">Faq</h3>
            <ul className="flex flex-col gap-2 font-normal text-gray-500 text-xs">
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payment</li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-2">
            <h3 className="font-medium text-gray-800 text-sm uppercase tracking-widest">Resources</h3>
            <ul className="flex flex-col gap-2 font-normal text-gray-500 text-xs">
              <li>Free eBook</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </div>
        </section>
      </div>
    </footer>
  );
};
