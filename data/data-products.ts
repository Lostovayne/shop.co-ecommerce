import { Products } from "@/interfaces/product-interface";

import { Color, Size } from "@/interfaces/product-interface";

export const DataProducts: Products[] = [
  {
    id: "1",
    name: "Tommy Hilfiger",
    color: [Color.Black, Color.Blue , Color.Green],
    size: [Size.Small, Size.Medium, Size.Large, Size.XLarge],
    price: 450,
    image: ["/clothes/image-0-1.webp","/clothes/image-0-2.webp","/clothes/image-0-3.webp"],
    description: "Polera Tommy Hilfiger Negro - Calce Regular",
    quantity: 20,
    rating: 5,
    slug: "polera-tommy-hilfiger",
    discount: 30,
  },
];
