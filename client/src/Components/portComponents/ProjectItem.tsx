import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useRouteMatch } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  IconButton,
} from "@material-ui/core/";
import EditIcon from "@material-ui/icons/Edit";
import LinkNoneStyle from "../utilsComponents/LinkNoneStyle";
import DeleteIcon from "@material-ui/icons/Delete";
import { Works } from "src/generated/graphql";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
    padding: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  action: {
    display: "flex",
    justifyContent: "center",
    marginTop: "auto",
  },
  button: {
    width: "100%",
    textTransform: "capitalize",
    backgroundColor: " rgba(0,0,0,0.7)",

    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.4)",
    },
  },
});

type myMatch = {
  url: string;
};

type Props = {
  work: Works;
  allowEdit: Boolean;
};

export default function ProjectItem({ work, allowEdit }: Props) {
  const classes = useStyles();
  const { url } = useRouteMatch() as myMatch;
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={work.previewImage || "/images/BackgroundHex.jpg"}
      >
        {allowEdit && (
          <div style={{ textAlign: "right" }}>
            <LinkNoneStyle to={`${url}/work/${work.id}`}>
              <IconButton
                size="small"
                style={{
                  backgroundColor: "rgba(255,255,255,0.3)",
                  marginRight: 3,
                }}
              >
                <EditIcon color="primary" />
              </IconButton>
            </LinkNoneStyle>
            <LinkNoneStyle to={`${url}/work/${work.id}/delete`}>
              <IconButton
                size="small"
                style={{
                  backgroundColor: "rgba(255,255,255,0.3)",
                }}
              >
                <DeleteIcon color="secondary" />
              </IconButton>
            </LinkNoneStyle>
          </div>
        )}

        <CardActions className={classes.action}>
          {work.viewDemo && (
            <a
              href={work.viewDemo}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", width: "100%" }}
            >
              <Button
                size="small"
                color="primary"
                variant="outlined"
                className={classes.button}
              >
                Live Demo
              </Button>
            </a>
          )}
          {work.viewGitHup && (
            <a
              href={work.viewGitHup}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", width: "100%" }}
            >
              <Button
                size="small"
                color="primary"
                variant="outlined"
                className={classes.button}
              >
                Githup
              </Button>
            </a>
          )}
        </CardActions>
      </CardMedia>
      <CardContent
        style={{ wordBreak: "break-word", height: "100%", padding: 10 }}
      >
        <Typography gutterBottom variant="h5" component="h2">
          {work.name || "???"}
        </Typography>
        <Typography variant="body2" color="textPrimary" component="p">
          {work.description || "?????"}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          style={{ marginTop: 10 }}
        >
          Skill used:
        </Typography>
        {work.skillsUsed.length > 0 && (
          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: 3,
            }}
          >
            {work.skillsUsed.map((s, i) => (
              <Typography
                key={i}
                style={{
                  fontSize: 16,
                  margin: 5,
                  border: "1px solid rgba(0,0,0,0.5)",
                  borderRadius: 3,
                }}
                variant="body2"
                color="primary"
                component="p"
                align="center"
              >
                {s}
              </Typography>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
