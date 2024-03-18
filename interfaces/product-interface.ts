export interface Products {
  id: string;
  name: string;
  color: Color[];
  size: Size[];
  price: number;
  image: string[];
  quantity: number;
  rating: number;
  description: string;
  slug: string;
  discount: number;
}

export enum Color {
  Black = "black",
  Blue = "blue",
  Green = "green",
}

export enum Size {
  Small = "Small",
  Medium = "Medium",
  Large = "Large",
  XLarge = "X-Large",
}
