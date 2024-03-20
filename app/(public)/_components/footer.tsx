import { Button } from "@/components/ui/button";
import Image from "next/image";
import Newsletter from "./newsletter";
//Icons
import { RiFacebookFill, RiGithubFill, RiInstagramLine, RiTwitterXFill } from "react-icons/ri";

export const Footer = (): JSX.Element => {
  return (
    <footer className="relative bg-[#F0F0F0] px-4 py-6 h-auto">
      <Newsletter />
      <div className="xl:flex xl:justify-between xl:items-center xl:border-gray-300/80 mx-auto pt-52 md:pt-28 xl:pb-9 xl:border-b xl:max-w-screen-lg 3xl:max-w-screen-xl">
        <div>
          <Image src="/logo.webp" alt="footer" width={120} height={60} className="object-cover" />
          <p className="mt-3 font-normal text-gray-500 text-sm md:text-base">
            We have clothes that suits your style and which you’re proud to wear. From women to men.
          </p>
          {/* Icons */}
          <div className="space-x-2.5 mt-4">
            <Button
              variant="outline"
              size={"icon"}
              asChild
              className="border-gray-300 bg-gray-50 hover:bg-black hover:shadow p-2 border rounded-full w-9 h-9 hover:text-white transition-colors duration-500 cursor-pointer"
            >
              <RiTwitterXFill />
            </Button>
            <Button
              variant="outline"
              size={"icon"}
              asChild
              className="border-gray-300 bg-gray-50 hover:bg-black hover:shadow p-2 border rounded-full w-9 h-9 hover:text-white transition-colors duration-500 cursor-pointer"
            >
              <RiFacebookFill />
            </Button>

            <Button
              variant="outline"
              size={"icon"}
              asChild
              className="border-gray-300 bg-gray-50 hover:bg-black hover:shadow p-2 border rounded-full w-9 h-9 hover:text-white transition-colors duration-500 cursor-pointer"
            >
              <RiInstagramLine />
            </Button>

            <Button
              variant="outline"
              size={"icon"}
              asChild
              className="border-gray-300 bg-gray-50 hover:bg-black hover:shadow p-2 border rounded-full w-9 h-9 hover:text-white transition-colors duration-500 cursor-pointer"
            >
              <RiGithubFill />
            </Button>
          </div>
        </div>

        <section className="xl:justify-items-center xl:place-content-evenly gap-x-8 gap-y-4 border-gray-300 grid grid-cols-2 md:grid-cols-4 mx-auto mt-5 max-lg:pb-7 max-lg:border-b w-full">
          {/* Company */}
          <div className="space-y-2">
            <h3 className="font-medium text-gray-800 text-sm uppercase tracking-widest">Company</h3>
            <ul className="flex flex-col gap-2 font-normal text-gray-500 text-xs xl:text-sm">
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-2">
            <h3 className="font-medium text-gray-800 text-sm uppercase tracking-widest">Help</h3>
            <ul className="flex flex-col gap-2 font-normal text-gray-500 text-xs xl:text-sm">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-2">
            <h3 className="font-medium text-gray-800 text-sm uppercase tracking-widest">Faq</h3>
            <ul className="flex flex-col gap-2 font-normal text-gray-500 text-xs xl:text-sm">
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payment</li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-2">
            <h3 className="font-medium text-gray-800 text-sm uppercase tracking-widest">Resources</h3>
            <ul className="flex flex-col gap-2 font-normal text-gray-500 text-xs xl:text-sm">
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
