import React, { useState, useContext } from "react";
import { Context } from "./Context";

import {
  AppBar,
  Toolbar,
  Typography,
  Badge,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  links: {
    color: "white",
    textDecoration: "none",
    boxSizing: "borderBox",
    padding: "10px",
    // background: "red",
    "&:hover": {
      background: "#694f73",
      borderRadius: "4px",
    },
  },
  title: {
    flexGrow: 1,

    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },

    // textAlign: "center",
  },
  root: {
    background: "#745e7d",
    // textAlign: "center",
  },
  iButton: {
    color: "white",
    marginLeft: "10px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  linksContainer: {
    display: "none",

    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",

    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const NavBar = () => {
  const { itemsInCart } = useContext(Context);
  let navigate = useNavigate();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMobileMenuOpen = (event) => {
    if (mobileMoreAnchorEl === null) {
      setMobileMoreAnchorEl(event.currentTarget);
    } else {
      setMobileMoreAnchorEl(null);
    }
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const classes = useStyles();
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      // id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleMobileMenuOpen}>
        <Link to="/">Home</Link>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuOpen}>
        <Link to="/products">Products</Link>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuOpen}>
        <Link to="/about">About</Link>
      </MenuItem>
    </Menu>
  );

  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              // aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>
          <Typography variant="h6" className={classes.title}>
            Shoe Store
          </Typography>
          <div className={classes.linksContainer}>
            <Link to="/" className={classes.links}>
              Home
            </Link>
            {""}
            <Link to="/products" className={classes.links}>
              Products
            </Link>
            <Link to="/about" className={classes.links}>
              About
            </Link>
          </div>
          <IconButton
            className={classes.iButton}
            onClick={() => {
              navigate("/cart");
            }}
          >
            <Badge badgeContent={itemsInCart.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
};

export default NavBar;
