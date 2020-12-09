export interface IfetchBooksData {
  data: Object[];
  metadata: any;
}

export interface IAddItemToBasket {
  author: string;
  cover_url: string;
  currency: string;
  id: number;
  pages: number;
  price: number;
  title: string;
}
