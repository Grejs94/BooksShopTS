import axios from "axios";

import { config } from "../config";

export const books = {
  fetchBooks: (pageNumber) => {
    const response = axios.get(`${config.url}${pageNumber}`);

    return response;
  },
};
