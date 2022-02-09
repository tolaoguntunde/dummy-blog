import React, { useState } from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  alpha,
  Badge,
  Avatar,
} from "@material-ui/core";
import { Search, Mail, Notifications, Cancel } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "70%"
    },
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  icons: {
    display: (props) => (props.open ? "none" : "flex"),
    alignItems: "center",
  },
  searchBtn: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  badges: {
    marginRight: theme.spacing(2),
  },
  cancel: {
    [theme.breakpoints.up('sm')]: {
      display: "none",
    }
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles({ open });
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          Fake Store
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          Store
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="Search..." className={classes.input} />
          <Cancel className={classes.cancel} onClick={()=>setOpen(false)} />
        </div>
        <div className={classes.icons}>
          <Search
            className={classes.searchBtn}
            onClick={() => setOpen(true)}
          />
          <Badge badgeContent={4} color="secondary" className={classes.badges}>
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="secondary" className={classes.badges}>
            <Notifications />
          </Badge>
          <Avatar
            alt="Remy Sharp"
            src="https://media.istockphoto.com/photos/portrait-of-a-handsome-black-man-picture-id1289461328?b=1&k=20&m=1289461328&s=170667a&w=0&h=SpRhSvRMO7UkXWo52mV9bf0bo6au6kC-2wsOGsQ0D2Y="
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
