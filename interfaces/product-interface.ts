import { Color, Size } from "./enums";

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
