import React from "react";
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

export default function FallBackSpinner() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress color="secondary" />
    </div>
  );
}
