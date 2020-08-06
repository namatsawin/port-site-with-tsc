import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button, IconButton } from "@material-ui/core/";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import LinkNoneStyle from "../utilsComponents/LinkNoneStyle";
import { MyOffSet } from "../../Context/storeOffset";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import CloseIcon from "@material-ui/icons/Close";
import styled from "styled-components";

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
      fontSize: 16,
      margin: "0 5px",
      "&:hover": {
        backgroundColor: "rgba(0,0,0,0.3)",
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

const NavBarForMobile = styled.div`
  position: fixed;
  display: none;
  top: 60px;
  right: 0;
  width: 40%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  transition: all 1s ease-out;

  @media screen and (max-width: 600px) {
    display: block;
    right: ${({ showNav }: styleProps) => (showNav ? "0" : "-400px")};
  }
`;

type styleProps = {
  showNav: Boolean;
};

type MyProps = {
  offset: MyOffSet;
};

const Navbar = ({ offset }: MyProps) => {
  const classes = useStyles();
  const [showNav, setShowNav] = React.useState(false);

  return (
    <AppBar position="fixed" color="transparent" className={classes.root}>
      <Toolbar>
        <div className={classes.homeButton}>
          <LinkNoneStyle to="/">
            <IconButton edge="start" color="inherit" aria-label="home">
              <HomeIcon />
            </IconButton>
          </LinkNoneStyle>
        </div>

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
            onClick={() => setShowNav(!showNav)}
          >
            {showNav ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>
      </Toolbar>
      <NavBarForMobile showNav={showNav}>
        <List component="nav" style={{ color: "#fff" }}>
          <ListItem
            onClick={() =>
              window.scrollTo({ top: offset.landing, behavior: "smooth" })
            }
            button
          >
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            onClick={() =>
              window.scrollTo({ top: offset.project, behavior: "smooth" })
            }
            button
          >
            <ListItemText primary="Projects" />
          </ListItem>
          <ListItem
            onClick={() =>
              window.scrollTo({ top: offset.about, behavior: "smooth" })
            }
            button
          >
            <ListItemText primary="About" />
          </ListItem>
          <ListItem
            onClick={() =>
              window.scrollTo({ top: offset.resume, behavior: "smooth" })
            }
            button
          >
            <ListItemText primary="Resume" />
          </ListItem>
        </List>
      </NavBarForMobile>
    </AppBar>
  );
};

export default Navbar;
