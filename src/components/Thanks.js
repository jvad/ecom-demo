import React from "react";
import { Typography, Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "50px",
    animation: `$myEffect 2000ms ${theme.transitions.easing.easeInOut}`,
  },
  "@keyframes myEffect": {
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
const Thanks = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography variant="h5">
        Thank you for purchasing our product. Your support and trust in us are
        much appreciated. For your next purchase, use coupon code: MAGE30% and
        get 30% discount on any product.
      </Typography>
    </Container>
  );
};

export default Thanks;
