export interface IfetchBooksData {
  data: Object[];
  metadata: any;
}

export interface BasketItem {
  author: string;
  cover_url: string;
  currency: string;
  id: number;
  pages: number;
  price: number;
  title: string;
  value: number;
}

export interface DataItem {
  author?: string;
  cover_url?: string;
  currency?: string;
  id?: number;
  pages?: number;
  price?: number;
  title?: string;
}

type OrderItem = {
  id: number;
  quantity: number;
};

export interface Order {
  order: OrderItem[];
  city: string;
  first_name: string;
  last_name: string;
  zip_code: string;
}
