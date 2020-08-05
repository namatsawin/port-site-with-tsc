import React from "react";
import ReactDOM from "react-dom";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > * + *": {
        marginLeft: theme.spacing(2),
      },
      width: "100%",
      height: "100%",
      justifyContent: "center",
      backgroundColor: "rgba(0,0,0,0.9)",
      alignItems: "center",
      minHeight: "100vh",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 9999,
    },
  })
);

type Props = {
  isLoading: Boolean;
};

const Container = document.createElement("div");
const SpinnerRoot = document.querySelector("#spinner");

export default function Spinner({
  isLoading,
}: Props): React.ReactElement | null {
  const classes = useStyles();

  React.useEffect(() => {
    SpinnerRoot?.appendChild(Container);
    return () => {
      SpinnerRoot?.removeChild(Container);
    };
  }, []);

  if (isLoading) {
    return ReactDOM.createPortal(
      <div className={classes.root}>
        <CircularProgress color="secondary" />
      </div>,
      Container
    );
  } else {
    return null;
  }
}
