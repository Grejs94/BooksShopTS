interface InitialState {
  data: object[];
  basket: any[];
  status: string;
}

export const initialState: InitialState = {
  data: [],
  basket: [],
  status: "iddle",
};
