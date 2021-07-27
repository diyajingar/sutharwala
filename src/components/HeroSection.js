import React from "react";

import "react-sliding-pane/dist/react-sliding-pane.css";
import Grid from "@material-ui/core/Grid";
import LOGO from "../LOGO.png";

import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import CloseIcon from "@material-ui/icons/Close";
import CustomTextInput from "./CustomTextInput";
import emailjs from "emailjs-com";
import Divider from "@material-ui/core/Divider";

const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },

  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

function HeroSection(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hv9p905",
        "template_8cv1evc",
        e.target,
        "user_znv0CUhhBwi9RaaMD5pQi"
      )
      .then(
        (result) => {
          alert(result.text);
        },
        (error) => {
          alert(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="o-hidden">
      <Grid container>
        <Grid item xs={12}>
          <img
            className="heroimg mobile"
            src="https://i.ibb.co/vqgqXDT/New-Project-4.png"
            alt=""
          />
          <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <Grid item xs={10}>
              <h4 className="text-3xl p-10 font-semibold">Inquiry Form</h4>
            </Grid>
            <Grid item xs={2}>
            <CloseIcon  onClick={handleDrawerClose} />
             
            </Grid>
            <div className="flex"></div>
          </div>
          <Divider />
          <form className="form Modal-form" onSubmit={sendEmail} noValidate>
            <CustomTextInput
              id="Name"
              label="Name"
              name="Name"
              onChange={(e) => console.log(e)}
            />
            <CustomTextInput
              id="MobileNumber"
              label="Mobile Number"
              name="MobileNumber"
              onChange={(e) => console.log(e)}
            />
            <CustomTextInput
              id="Email"
              label="Email Address"
              name="Email"
              onChange={(e) => console.log(e)}
            />
            <CustomTextInput
              id="City"
              label="City"
              name="city"
              onChange={(e) => console.log(e)}
            />
            <CustomTextInput
              id="Message"
              type="text"
              label="Message"
              name="Message"
              onChange={(e) => console.log(e)}
            />
            <div className="buttonTopMargin">
              <button type="submit" className="button">
                Submit
              </button>
            </div>
          </form>
        </Drawer>
        </Grid>
        <Grid item md={6} sm={12}>
          <Grid container justifyContent="center">
            <main
              className={clsx(classes.content, {
                [classes.contentShift]: open,
              })}
            >
              <div />
              <img src={LOGO} alt="logo" className="logo" />
              <div className="textStyle">
                <h1>
                  Our website is
                  <span className=""> under construction</span>
                </h1>
                <p className="">
                  Sutharwala is Gujarat's largest home services marketplace the
                  platform helps customers to book reliable home/offices and
                  other sectors services like service of carpenter, furniture,
                  fixture repairing ,interior designing turnkey projects etc.
                </p>
                <button class="button" onClick={handleDrawerOpen}>
                  Contact Us
                </button>
                <div>
                <WhatsAppIcon/><MailOutlineIcon/>
              </div>
              </div>
             
            </main>
          </Grid>
        </Grid>
        
      </Grid>
    </div>
  );
}

export default HeroSection;
