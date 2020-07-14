import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CallIcon from "@material-ui/icons/Call";
const useStyles = makeStyles((theme) => ({
  mainFooter: {
    background: "#f0f1ec",
    position: "relative",
    bottom: 0,
    marginTop: "80px",
    color: "black",
    textAlign: "center",
  },
  title: {
    // textAlign: "center",
  },
  list: {
    listStyle: "none",
    marginLeft: "-25px",
  },
  spn: {
    display: "block",
    textAlign: "center",
    // paddingTop: "5px",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainFooter}>
      <Grid container>
        <Grid item xs={6}>
          <h4 className={classes.title}>Shoe Store</h4>
          <ul className={classes.list}>
            <li>
              <LocationOnIcon fontSize="small" />
              Karachi, Pakistan
            </li>
            <li> Street 123, Shop# 5</li>
          </ul>
        </Grid>
        <Grid item xs={6}>
          <h4 className={classes.title}>Contacts</h4>
          <ul className={classes.list}>
            <li>
              <WhatsAppIcon fontSize="small" /> 03123456789
            </li>
            <li>
              <CallIcon fontSize="small" /> 021-422423-4
            </li>
          </ul>
        </Grid>
      </Grid>
      <hr />
      <span className={classes.spn}>
        &copy;{new Date().getFullYear()} An Effort by Jvad
      </span>
    </div>
  );
};

export default Footer;
