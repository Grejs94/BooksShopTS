import { MainPage, BasketPage } from "pages/index";

export const mainRoutes = [
  {
    path: "/",
    component: MainPage,
    exact: true,
  },
  {
    path: "/BasketPage",
    component: BasketPage,
  },
];
