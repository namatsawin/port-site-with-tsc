import React, { useRef } from "react";
import styled from "styled-components";
import { Avatar, Typography, IconButton } from "@material-ui/core/";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import EditIcon from "@material-ui/icons/Edit";
import { useWindowSize } from "../../utils/useWindowSize";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: theme.spacing(15),
      height: theme.spacing(15),
      border: "2px solid white",
    },
    name: {
      margin: theme.spacing(2),
      fontSize: 20,
    },
    email: { margin: theme.spacing(2), fontSize: 16 },
  })
);

const Container = styled.div`
  width: 100%;
  padding: 100px 0 40px 0;
  background: #ccc;
  background-image: url("/images/BackgroundHex.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  outline: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const LandingCard = styled.div`
  display: grid;
  grid-template-columns: auto;
  padding: 40px 0;
  grid-gap: 5px;
  margin: auto;
  width: 100%;
  max-width: 650px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const ItemDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: falling 0.8s ease-out;

  @keyframes falling {
    0% {
      transform: translateY(-300px);
    }
    70% {
      transform: translateY(20px);
    }
    90% {
      transform: translateY(-10px);
    }
  }
`;

const SocialButton = styled(IconButton)`
  margin: 0 10px !important;
  background-color: rgba(0, 0, 0, 0.7) !important;
  &:disabled {
    background-color: grey;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    animation: spin 0.4s ease-out;

    @keyframes spin {
      to {
        transform: rotate(360deg) scale(0.97);
      }
    }
  }
`;

const Landing = (): React.ReactElement => {
  const classes = useStyles();
  const [offset, setOffset] = React.useState<any>(0);
  const ref = useRef<HTMLHeadingElement>(null);
  const windowWidth = useWindowSize().width;

  React.useEffect(() => {
    if (ref.current) {
      setOffset(windowWidth - ref.current?.offsetLeft - 60);
    }
  }, [setOffset, windowWidth]);
  return (
    <Container>
      <div style={{ position: "absolute", left: offset }}>
        <IconButton>
          <EditIcon color="primary" />
        </IconButton>
      </div>
      <LandingCard ref={ref}>
        <ItemDiv>
          <Avatar alt="Test" className={classes.avatar}>
            Avatar
          </Avatar>
        </ItemDiv>
        <ItemDiv>
          <Typography align="center" className={classes.name}>
            FirstName LastName <small>(NickName)</small>
          </Typography>
        </ItemDiv>
        <SocialDiv>
          <SocialButton>
            <GitHubIcon style={{ color: "white" }} />
          </SocialButton>
          <SocialButton>
            <LinkedInIcon style={{ color: "rgb(0, 127, 178)" }} />
          </SocialButton>
          <SocialButton>
            <TwitterIcon style={{ color: "rgb(0, 172, 237)" }} />
          </SocialButton>
          <SocialButton>
            <FacebookIcon color="primary" />
          </SocialButton>
        </SocialDiv>
        <ItemDiv>
          <Typography align="center" className={classes.email}>
            Email: Example@gmail.com
          </Typography>
        </ItemDiv>
      </LandingCard>
    </Container>
  );
};

export default Landing;
