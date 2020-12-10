import axios from "axios";

import { Order } from "interfaces/books";

import { config } from "../config";

export const books = {
  fetchBooks: (pageNumber: number) => {
    const response = axios.get(`${config.url}/book?page=${pageNumber}`);

    return response;
  },
  sendOrder: (data: object) => {
    axios.post(`${config.url}/order`, data);
  },
};
