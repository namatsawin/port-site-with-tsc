import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { MyReducers } from "../redux/rootReducer";
import { Button } from "@material-ui/core/";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useLogOutMutation } from "../generated/graphql";
import { SetUser } from "../redux/User/user.action";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
      position: "fixed",
      bottom: 0,
      right: 0,
      transition: "all .5s ease-out",
    },
  })
);
const LogoutButton = ({
  currentUser,
  SetUser,
}: Props): React.ReactElement | null => {
  const classes = useStyles();
  const [logOut] = useLogOutMutation();

  const handleLogout = async () => {
    await logOut();
    SetUser(null);
  };

  if (!currentUser) return null;
  return (
    <Button
      onClick={handleLogout}
      variant="contained"
      color="secondary"
      className={classes.button}
      startIcon={<ExitToAppIcon />}
    >
      LogOut
    </Button>
  );
};

const mapStateToProps = (state: MyReducers) => ({
  currentUser: state.userReducer.currentUser,
});

const connector = connect(mapStateToProps, { SetUser });

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

export default connector(LogoutButton);
