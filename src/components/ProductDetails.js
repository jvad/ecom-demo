import React, { useContext } from "react";
import { Context } from "./Context";
import { useParams } from "react-router-dom";

import {
  Grid,
  makeStyles,
  Container,
  Typography,
  Paper,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  name: {
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
    },
  },
  root: {
    marginTop: "10px",
    textAlign: "center",
  },
  imgBox: {
    maxWidth: "100%",
  },
  des: {
    padding: "15px",
    maxWidth: "550px",
    margin: "10px auto",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center",
  },
  img: {
    maxWidth: "100%",
    animation: `$myEffect 2000ms ${theme.transitions.easing.easeInOut}`,
  },
  btn: {
    marginTop: "20px",
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "Scale(.1)",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(1)",
    },
  },
}));

const ProductList = () => {
  const classes = useStyles();
  const { id } = useParams();
  const {
    list,
    itemsInCart,
    addItem,
    removeItem,
    snackBarRemoved,
    snackBarAdd,
  } = useContext(Context);

  const obj = list.filter((k) => k.id === parseInt(id));
  if (obj.length === 0) {
    return <h1>No item with this id</h1>;
  }

  function clickHandler(shoe) {
    if (!itemsInCart.includes(shoe)) {
      addItem(shoe);
      snackBarAdd("success");
    } else {
      removeItem(shoe.id);
      snackBarRemoved("warning");
    }
  }

  //   console.log(obj);
  //   console.log(obj[0].id);
  return (
    <Container className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className={classes.imgBox}>
            <img src={obj[0].imgurl} alt="" className={classes.img} />
          </div>
          <div className={classes.container}>
            {" "}
            <Typography className={classes.name} variant="h2">
              {obj[0].name}
            </Typography>
            <Typography className={classes.name} variant="h4">
              Price: ${obj[0].price}
            </Typography>
            <Paper className={classes.des}>
              <Typography variant="h5">Description</Typography>
              <Typography variant="body1" align="justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                excepturi minima qui exercitationem dolore officia minus,
                doloremque libero repellendus reiciendis inventore odio
                voluptatum repudiandae incidunt iste molestias aut enim dicta.
              </Typography>
            </Paper>
            <Button
              variant="outlined"
              aria-label="delete"
              size="large"
              className={classes.btn}
              onClick={() => clickHandler(obj[0])}
            >
              {itemsInCart.includes(obj[0])
                ? "Remove From Cart"
                : "Add To Cart"}
            </Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductList;

//    import React from "react";
//     import { useParams } from "react-router-dom";

//     const ProductDetails = () => {
//     const id = useParams();
//     return <div>This is projuct detail {id.id}</div>;
//     };

//     export default ProductDetails;
