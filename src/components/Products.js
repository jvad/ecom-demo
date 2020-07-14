import React from "react";
import { Outlet } from "react-router-dom";
import { makeStyles, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    textAlign: "center",
    padding: "30px",
    // display: "flex",
    overflow: "hidden",
    // justifyContent: "center",
  },
  title: {
    animation: `$myEffect 5000ms infinite ${theme.transitions.easing.easeInOut}`,
    background: "#988171",
    maxWidth: "300px",
    margin: "0 auto",
    borderRadius: "10px",
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateX(-170%)",
    },
    "50%": {
      opacity: 1,
      transform: "translateX(0)",
    },
    "100%": {
      opacity: 0,
      transform: "translateX(170%)",
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
