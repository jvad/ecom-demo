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
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10px",
  },
  noItem: {
    textAlign: "center",
    maxWidth: "100%",
  },
  image: {
    maxWidth: "100%",
  },
  total: {
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
  btn: {
    marginTop: "10px",
  },
  img: {
    "&:hover": {
      opacity: "0.5",
    },
  },
}));

const Cart = () => {
  let navigate = useNavigate();
  const classes = useStyles();
  const { itemsInCart, removeItem, snackBarRemoved } = useContext(Context);
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
            <Grid item xs={12} sm={6} md={4} key={shoe.id}>
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
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Cart;
