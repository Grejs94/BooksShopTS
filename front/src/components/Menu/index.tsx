import React, { FC } from "react";
import { useSelector } from "react-redux";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
} from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import StoreIcon from "@material-ui/icons/Store";
import { Link } from "react-router-dom";

import { selectBooksBasketValue } from "features/books/booksSlice";

import { default as Styles } from "./styles";

type Props = {
  title: string;
};

const Menu: FC<Props> = ({ title }) => {
  const basketValue = useSelector(selectBooksBasketValue);

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
          <Styles.GrowingDiv />
          <div>
            <Link to="/" style={{ color: "white" }}>
              <IconButton aria-label="shop" color="inherit">
                <StoreIcon />
              </IconButton>
            </Link>
            <Link to="/basketPage" style={{ color: "white" }}>
              <IconButton aria-label="basket" color="inherit">
                <Badge badgeContent={basketValue} color="secondary">
                  <ShoppingBasketIcon />
                </Badge>
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <Styles.Toolbar />
    </React.Fragment>
  );
};

export default Menu;
