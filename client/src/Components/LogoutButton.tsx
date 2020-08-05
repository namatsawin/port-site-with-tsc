import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { MyReducers } from "../redux/rootReducer";
import { Button } from "@material-ui/core/";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useLogOutMutation } from "../generated/graphql";
import { SetUser } from "../redux/User/user.action";
import { SetAlert } from "../redux/alert/alert.action";
import FallBackSpinner from "./FallBackSpinner";

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
  SetAlert,
}: Props): React.ReactElement | null => {
  const classes = useStyles();
  const [logOut, { loading }] = useLogOutMutation();

  const handleLogout = async () => {
    const { data } = await logOut();
    if (data) {
      SetUser(null);
      SetAlert({ type: "success", message: data.logOut });
    }
  };

  if (!currentUser) return null;
  return loading ? (
    <FallBackSpinner />
  ) : (
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

const connector = connect(mapStateToProps, { SetUser, SetAlert });

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

export default connector(LogoutButton);
