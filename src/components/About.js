import React from "react";
import { Container, Grid, Typography, makeStyles } from "@material-ui/core";
// import FacebookIcon from "@material-ui/icons/Facebook";
const useStyles = makeStyles((theme) => ({
  cont: {
    textAlign: "center",
    marginTop: "50px",
  },
  links: {
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
  },
  top: {
    animation: `$myEffect 2000ms ${theme.transitions.easing.easeInOut}`,
  },
  link: {
    color: "black",
    margin: "15px",
  },
  list: {
    textAlign: "left",
  },
  box: {
    border: "1px solid black",
    marginTop: "20px",
    padding: "10px",
    animation: `$myEffect2 2000ms ${theme.transitions.easing.easeInOut}`,
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
  "@keyframes myEffect2": {
    "0%": {
      opacity: 0,
      transform: "translateX(-100%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0)",
    },
  },
  avatar: {
    animation: `$shake 4000ms ${theme.transitions.easing.easeInOut}`,
  },
  "@keyframes shake": {
    "10%, 90%": {
      transform: "translate3d(-1px, 0, 0)",
    },

    "20%, 80%": {
      transform: "translate3d(2px, 0, 0)",
    },

    "30%, 50%, 70%": {
      transform: "translate3d(-4px, 0, 0)",
    },

    "40%, 60%": {
      transform: "translate3d(4px, 0, 0)",
    },
  },
}));
const About = () => {
  const classes = useStyles();
  return (
    <Container className={classes.cont}>
      <Grid container spacing={3}>
        <Grid container item xs={12} md={6} className={classes.top}>
          <Grid item xs={12} md={6}>
            <img
              className={classes.avatar}
              src="https://i.ya-webdesign.com/images/funny-png-avatar-2.png"
              alt="avatar"
              height="150px"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body1" gutterBottom>
              Jawad Hassan Khan
            </Typography>
            <Typography variant="body2" align="left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
              ex similique laudantium perferendis in facere minima rem aliquam,
              officia rerum? Pariatur ullam earum possimus officia! Veniam
              officiis quidem iusto sit.
            </Typography>
          </Grid>
        </Grid>
        <Grid container item xs={12} md={6} className={classes.top}>
          <Grid item xs={12}>
            <Typography variant="h5"> Contact Me</Typography>
            <div className={classes.links}>
              <a
                className={classes.link}
                href="http://facebook.com/jvadii"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa fa-facebook-official fa-2x"
                  aria-hidden="true"
                ></i>
              </a>
              <a
                className={classes.link}
                href="http://github.com/jvad"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github fa-2x" aria-hidden="true"></i>
              </a>
            </div>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <div className={classes.box}>
            <Typography variant="h5"> About this Website</Typography>
            <Typography align="left" gutterBottom variant="h6">
              {" "}
              This Website is developed for the practice purpose.
            </Typography>
            <Typography variant="body2" align="justify" gutterBottom>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
              praesentium aperiam sequi ad esse incidunt quod nihil placeat
              repellat id perspiciatis debitis veritatis, in dolorum accusamus
              reprehenderit quam cumque deleniti. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Pariatur ipsam soluta, at
              praesentium veritatis in labore odio autem magni odit,
              voluptatibus error quod quos numquam quas quia, sapiente modi
              corporis.
            </Typography>
            <Typography align="left" variant="h6">
              Technology used are:
            </Typography>
            <ul className={classes.list}>
              <li>ReactJs</li>
              <li>Material Ui</li>
              <li>React-Router-Dom</li>
            </ul>

            <Typography variant="h6">
              Special Thanks To BootCamp2020 Class
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
