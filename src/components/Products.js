import React from "react";
import { Outlet } from "react-router-dom";
import { makeStyles, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    textAlign: "center",
    padding: "20px",
    // display: "flex",
    // justifyContent: "center",
  },
  title: {
    background: "#988171",
    maxWidth: "300px",
    margin: "0 auto",
    borderRadius: "10px",
  },
}));

const Products = () => {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.root}>
        <Paper className={classes.title} elevation={10}>
          <Typography variant="h6">Footwear to last you a lifetime.</Typography>
        </Paper>
      </Paper>
      <Outlet />
    </>
  );
};

export default Products;
