
export interface CakeOrder {
  fullName: string;
  phoneNumber: string;
  address: string;
  cakeType: string;
  weight: number;
  size: string;
  flavor: string;
  customMessage: string;
}

export interface CakeCollectionItem {
  id: number;
  name: string;
  price: string;
  image: string;
  gallery: string[];
  category: string;
  description: string;
  ingredients: string[];
}

export interface CartItem extends CakeCollectionItem {
  quantity: number;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface CategoryItem {
  id: number;
  title: string;
  description: string;
  image: string;
}
