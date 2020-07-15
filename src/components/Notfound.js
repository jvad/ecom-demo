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
      transform: "Scale(.1)",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(1)",
    },
  },
  img: {
    maxWidth: "100%",
    marginTop: "25px",
  },
}));
const Notfound = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" className={classes.root}>
      <img
        className={classes.img}
        src="https://thumbs.dreamstime.com/b/oops-words-reflective-white-background-concept-error-screens-49260938.jpg"
        alt=""
      />
      <Typography variant="h5">
        The Page you are looking for is not found. Please Provide the correct
        address.
      </Typography>
    </Container>
  );
};

export default Notfound;
