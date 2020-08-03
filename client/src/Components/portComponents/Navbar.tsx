import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { AppBar, Toolbar, Button, IconButton } from "@material-ui/core/";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import LinkNoneStyle from "../utilsComponents/LinkNoneStyle";
import { MyOffSet } from "../../Context/storeOffset";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: "60px !important",
      maxHeight: "60px !important",
    },
    homeButton: {
      marginRight: theme.spacing(2),
    },
    menus: {
      marginLeft: "auto",
    },
    menuButton: {
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    menuIconButton: {
      [theme.breakpoints.down("xs")]: {
        display: "block",
      },
      display: "none",
    },
    title: {
      flexGrow: 1,
    },
  })
);

type MyProps = {
  offset: MyOffSet;
};

const Navbar = ({ offset }: MyProps) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="transparent" className={classes.root}>
      <Toolbar>
        <LinkNoneStyle to="/">
          <IconButton
            edge="start"
            className={classes.homeButton}
            color="inherit"
            aria-label="home"
          >
            <HomeIcon />
          </IconButton>
        </LinkNoneStyle>

        <div className={classes.menus}>
          <Button
            className={classes.menuButton}
            onClick={() =>
              window.scrollTo({ top: offset.landing, behavior: "smooth" })
            }
          >
            Home
          </Button>
          <Button
            className={classes.menuButton}
            onClick={() =>
              window.scrollTo({ top: offset.project, behavior: "smooth" })
            }
          >
            My Projects
          </Button>
          <Button
            className={classes.menuButton}
            onClick={() =>
              window.scrollTo({ top: offset.about, behavior: "smooth" })
            }
          >
            About
          </Button>
          <Button
            className={classes.menuButton}
            onClick={() =>
              window.scrollTo({ top: offset.contact, behavior: "smooth" })
            }
          >
            Contact
          </Button>
          <Button
            className={classes.menuButton}
            onClick={() =>
              window.scrollTo({ top: offset.resume, behavior: "smooth" })
            }
          >
            Resume
          </Button>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className={classes.menuIconButton}
          >
            <MenuIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
