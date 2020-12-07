interface InitialState {
  data: object[];
  basket: any[];
  status: string;
  sendStatus: string;
}

export const initialState: InitialState = {
  data: [],
  basket: [],
  status: "iddle",
  sendStatus: "iddle",
};
