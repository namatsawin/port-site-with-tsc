import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  action: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    width: "100%",
    textTransform: "capitalize",
  },
});

export default function ProjectItem() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image="/images/BackgroundHex.jpg" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Name
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Description
        </Typography>
      </CardContent>

      <CardActions className={classes.action}>
        <Button
          size="small"
          color="primary"
          variant="outlined"
          className={classes.button}
        >
          Live Demo
        </Button>
        <Button
          size="small"
          color="primary"
          variant="outlined"
          className={classes.button}
        >
          Githup
        </Button>
      </CardActions>
    </Card>
  );
}
