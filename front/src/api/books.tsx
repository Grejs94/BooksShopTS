import axios from "axios";

import { config } from "../config";

export const books = {
  fetchBooks: (pageNumber: number) => {
    const response = axios.get(`${config.url}${pageNumber}`);

    return response;
  },
};
