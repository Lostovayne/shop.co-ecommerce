
export interface Products {
  id: string;
  name: string;
  color: color;
  size: size;
  price: number;
  image: string[];
  quantity: number;
  rating: number;
  description: string;
  slug: string;
  discount: number;
}

type color = [
  'red',
  'blue',
  'green',
];

type size = [
  'Small',
  'Medium',
  'Large',
  "X-Large"
]