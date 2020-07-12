import React, { useContext } from "react";
import { Context } from "./Context";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import {
  Grid,
  makeStyles,
  Container,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "30px",
    // position: "relative",
  },
  container: {
    // maxWidth: "1200px",
    // margin: "0 auto",
    textAlign: "center",
    // display: "flex",
    // justifyContent: "center",
  },
  btn: {
    margn: "10px",
  },
  img: {
    "&:hover": {
      opacity: "0.5",
    },
  },
}));

const ProductList = () => {
  const {
    list,
    removeItem,
    addItem,
    itemsInCart,
    snackBarRemoved,
    snackBarAdd,
  } = useContext(Context);
  function clickHandler(shoe) {
    if (!itemsInCart.includes(shoe)) {
      addItem(shoe);
      snackBarAdd("success");
    } else {
      removeItem(shoe.id);
      snackBarRemoved("warning");
    }
  }
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={2} className={classes.container}>
        {list.map((shoe) => (
          <Grid item xs={12} sm={6} md={4} key={shoe.id}>
            <Link to={`${shoe.id}`}>
              <img
                src={shoe.imgurl}
                alt=""
                height="300px"
                className={classes.img}
              />
            </Link>
            <Typography variant="body1">{shoe.name}</Typography>
            <Typography variant="body2">Price: ${shoe.price}</Typography>
            <IconButton
              aria-label="delete"
              className={classes.btn}
              onClick={() => clickHandler(shoe)}
            >
              {itemsInCart.includes(shoe) ? (
                <RemoveShoppingCartIcon fontSize="large" />
              ) : (
                <AddShoppingCartIcon fontSize="large" />
              )}
            </IconButton>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
