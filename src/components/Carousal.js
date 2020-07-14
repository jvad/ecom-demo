import React from "react";
// import ReactDOM from 'react-dom';
import cover1 from "./images/cover1.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  img: {
    maxHeight: "600px",
    [theme.breakpoints.down("sm")]: {
      maxHeight: "150px",
    },
  },
}));

function DemoCarousel() {
  const classes = useStyles();
  return (
    <Carousel
      autoPlay
      interval={3000}
      infiniteLoop
      showThumbs={false}
      dynamicHeight={true}
      showStatus={false}
    >
      <div>
        <img src={cover1} alt="" className={classes.img} />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1578986175247-7d60c6df07c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt=""
          className={classes.img}
        />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1591693294636-f8e72b0547ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt=""
          className={classes.img}
        />
        {/* <p className="legend">Legend 3</p> */}
      </div>
    </Carousel>
  );
}

export default DemoCarousel;
