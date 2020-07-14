import React, { useContext } from "react";
import { Context } from "./Context";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";

import {
  Grid,
  makeStyles,
  Container,
  Typography,
  Paper,
  IconButton,
  Button,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
// import Thanks from "./Thanks";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10px",
  },
  checkout: {
    marginTop: "20px",
    maxWidth: "100%",
    textAlign: "right",
  },
  noItem: {
    textAlign: "center",
    maxWidth: "100%",
  },
  image: {
    animation: `$shake 3000ms ${theme.transitions.easing.easeInOut}`,
    maxWidth: "100%",
  },
  total: {
    animation: `$myEffect2 2000ms ${theme.transitions.easing.easeInOut}`,
    maxWidth: "150px",
    margin: "10px auto",
    textAlign: "center",
  },
  container: {
    // maxWidth: "1200px",
    // margin: "0 auto",
    textAlign: "center",
    display: "flex",
    // display: "flex",
    // justifyContent: "center",
  },
  papr: {
    animation: `$myEffect 2000ms ${theme.transitions.easing.easeInOut}`,
    paddingTop: "15px",
    maxWidth: "250px",
  },
  btn: {
    marginTop: "10px",
  },
  img: {
    maxWidth: "100%",
    "&:hover": {
      opacity: "0.5",
    },
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateX(-100%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0)",
    },
  },
  "@keyframes shake": {
    "10%, 90%": {
      transform: "translate3d(-1px, 0, 0)",
    },

    "20%, 80%": {
      transform: "translate3d(2px, 0, 0)",
    },

    "30%, 50%, 70%": {
      transform: "translate3d(-4px, 0, 0)",
    },

    "40%, 60%": {
      transform: "translate3d(4px, 0, 0)",
    },
  },
  "@keyframes myEffect2": {
    "0%": {
      opacity: 0,
      transform: "translateY(-100%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}));

const Cart = () => {
  let navigate = useNavigate();
  const classes = useStyles();
  const { itemsInCart, removeItem, snackBarRemoved, emptyCart } = useContext(
    Context
  );
  const price = itemsInCart.map((item) => item.price * item.qty);

  const total = price.reduce((a, b) => (a += b), 0).toFixed(2);
  if (itemsInCart.length === 0) {
    return (
      <div className={classes.noItem}>
        <h4>You Don't Have Any Item In Cart.</h4>
        <img
          className={classes.image}
          src="https://cdn.dribbble.com/users/204955/screenshots/4930541/emptycart.png"
          alt=""
        />
      </div>
    );
  }

  return (
    <>
      <Paper className={classes.total}>
        <h3>Total Items: {itemsInCart.length}</h3>
        <h3>Total Price: ${total}</h3>
      </Paper>

      <Container className={classes.root}>
        <Grid container spacing={2} className={classes.container}>
          {itemsInCart.map((shoe) => (
            <Grid item xs={12} sm={6} md={4} key={shoe.id} align="center">
              <Paper className={classes.papr}>
                <img
                  src={shoe.imgurl}
                  alt=""
                  height="200px"
                  className={classes.img}
                  onClick={() => {
                    navigate(`/products/${shoe.id}`);
                  }}
                />

                <Typography variant="body1">{shoe.name}</Typography>
                <Typography variant="body2">Price: ${shoe.price}</Typography>
                <IconButton
                  aria-label="delete"
                  onClick={() => {
                    removeItem(shoe.id);
                    snackBarRemoved("warning");
                  }}
                >
                  <RemoveShoppingCartIcon fontSize="large" />
                </IconButton>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <div className={classes.checkout}>
          <Button
            onClick={() => {
              navigate("/checkout");
              emptyCart();
            }}
            variant="contained"
          >
            PROCEED TO CHECKOUT
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Cart;
