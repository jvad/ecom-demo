import React from "react";
import { Outlet } from "react-router-dom";
import { makeStyles, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    textAlign: "center",
    padding: "30px",
    // display: "flex",
    // justifyContent: "center",
  },
  title: {
    animation: `$myEffect 2000ms ${theme.transitions.easing.easeInOut}`,
    background: "#988171",
    maxWidth: "300px",
    margin: "0 auto",
    borderRadius: "10px",
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateY(-200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}));

const Products = () => {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.root} elevation={0}>
        <Paper className={classes.title} elevation={10}>
          <Typography variant="h6">Footwear to last you a lifetime.</Typography>
        </Paper>
      </Paper>
      <Outlet />
    </>
  );
};

export default Products;
