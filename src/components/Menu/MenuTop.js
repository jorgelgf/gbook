import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

export default function MenuTop() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickRemove = () => localStorage.clear();

  return (
    <div>
      <Button
        style={{ color: "black", fontSize: "10px" }}
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        OPTIONS
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link
            to="/favorites"
            style={{ textDecoration: "none", color: "black" }}
          >
            My favorites
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <div onClick={handleClickRemove}>Remove all favorites</div>
        </MenuItem>
      </Menu>
    </div>
  );
}
