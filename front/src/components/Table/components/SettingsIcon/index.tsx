import React from "react";
import { IconButton, Menu } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import { useDispatch } from "react-redux";

import { deleteItem } from "features/books/booksSlice";

import * as Styles from "./styles";

interface Props {
  id: number;
}

const MenuAppBar: React.FC<Props> = (id) => {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = (id: React.PropsWithChildren<{ id: number }>) => {
    console.log(id);

    setAnchorEl(null);
    dispatch(deleteItem(id.id));
  };

  return (
    <div>
      <Styles.IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <SettingsIcon />
      </Styles.IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={handleClose}
      >
        <Styles.MenuItem onClick={() => handleDelete(id)}>
          Delete Item
        </Styles.MenuItem>
      </Menu>
    </div>
  );
};
export default MenuAppBar;
