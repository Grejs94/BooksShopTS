import axios from "axios";

import { config } from "../config";

export const books = {
  fetchBooks: (pageNumber: number) => {
    const response = axios.get(`${config.url}${pageNumber}`);

    return response;
  },
  sendOrder: (data: object) => {
    axios
      .post(`${config.urlSendOrder}`, data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
