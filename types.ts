export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}


export interface Product {
  id: string;
  category: Category;
  name: string;
  description: string;
  price: string;
  isFeatured: boolean;
  size: Size;
  country: Country;
  images: Image[];
  reviews: Review[];
}

export interface Image {
  id: string;
  url: string;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Country {
  id: string;
  name: string;
  value: string;
}

export interface Review {
  id: string;
  storeUserId: string;
  author: string;
  text: string;
  stars: number;
  createdAt: string;
}
