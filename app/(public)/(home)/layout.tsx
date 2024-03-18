import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop.co",
  description: "Tienda de ropa para jovenes y adultos",
};
export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return <div className="bg-[#F2F0F1]">{children}</div>;
}
