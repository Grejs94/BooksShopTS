interface InitialState {
  data: object[];
  basket: any[];
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
