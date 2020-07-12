import React from "react";
import { Container, makeStyles, Grid, Typography } from "@material-ui/core";
import DemoCarousel from "./Carousal";
const useStyles = makeStyles((theme) => ({
  hdr: {
    width: "100%",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      fontSize: "2rem",
    },
  },
  img: {
    maxWidth: "100%",
  },
  image: {
    marginTop: "20px",
    maxWidth: "100%",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <DemoCarousel />
      <Container>
        <header className={classes.hdr}>
          <h4>Welcome to the best of footwear online store</h4>
        </header>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5">Fashion</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              id, optio eligendi porro amet ut dignissimos fuga reprehenderit
              incidunt inventore, dolores eveniet est reiciendis libero omnis
              corrupti cupiditate voluptates molestias!
            </Typography>
            <div className={classes.image}>
              <img
                className={classes.img}
                src="https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5">Design</Typography>
            <Typography align="justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              id, optio eligendi porro amet ut dignissimos fuga reprehenderit
              incidunt inventore, dolores eveniet est reiciendis libero omnis
              corrupti cupiditate voluptates molestias!
            </Typography>
            <div className={classes.image}>
              <img
                className={classes.img}
                src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <Typography align="justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo odit
              eos vero tempore adipisci fugit excepturi? Impedit quidem
              aspernatur, doloribus quasi labore officia. Voluptates voluptate
              deserunt quas possimus voluptas id. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Cupiditate ullam ex sit pariatur
              debitis, ab enim provident, officia possimus atque ad nobis animi
              vero. Quasi, debitis! Magni suscipit quam vitae?
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Home;
