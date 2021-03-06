import { MainPage, BasketPage, SummaryPage } from "pages/index";

type Route = {
  path: string;
  component: () => JSX.Element;
  exact?: boolean;
};

export const mainRoutes: Route[] = [
  {
    path: "/",
    component: MainPage,
    exact: true,
  },
  {
    path: "/BasketPage",
    component: BasketPage,
  },
  {
    path: "/SummaryPage",
    component: SummaryPage,
  },
];
