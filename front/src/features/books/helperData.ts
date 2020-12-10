import { DataItem, BasketItem } from "interfaces/books";

interface InitialState {
  data: DataItem[];
  basket: BasketItem[];
  orderCompleted: boolean;
  status: string;
  sendStatus: string;
}

export const initialState: InitialState = {
  data: [],
  basket: [],
  orderCompleted: false,
  status: "iddle",
  sendStatus: "iddle",
};
