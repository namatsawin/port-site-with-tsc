import React, { useRef } from "react";
import styled from "styled-components";
import { useRouteMatch } from "react-router-dom";
import { Avatar, Typography, IconButton } from "@material-ui/core/";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import EditIcon from "@material-ui/icons/Edit";
import { useWindowSize } from "../../utils/useWindowSize";
import LinkNoneStyle from "../utilsComponents/LinkNoneStyle";
import { Portfolio } from "src/generated/graphql";

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
    email: { marginTop: theme.spacing(2), fontSize: 16 },
    contact: { marginTop: theme.spacing(1), fontSize: 16 },
  })
);

type bgProps = {
  background: string;
};
const Container = styled.div`
  width: 100%;
  padding: 60px 0 40px 0;
  background: #ccc;
  background-image: ${({ background }: bgProps) =>
    background ? `url(${background})` : `url("/images/BackgroundHex.jpg")`};
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
  margin: 40px auto 0 auto;
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
  animation: falling 0.9s ease-out;

  @keyframes falling {
    0% {
      transform: translateY(-1000px) rotate(-150deg);
    }
    80% {
      transform: translateY(30px);
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
      from {
        transform: rotate(-360deg) scale(0.97);
      }
    }
  }
`;

const PortURL = styled.a`
  margin-top: 5px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
  background: rgba(255, 255, 255, 0.6);
  padding: 5px 10px;
  border: 1px solid rgb(63, 81, 181);
  color: rgb(63, 81, 181);
  text-decoration: none;
  &:hover {
    color: #f50057;
  }
`;

type myMatch = {
  url: string;
};

type Props = {
  port: Portfolio;
  allowEdit: Boolean;
  user: string | undefined;
};
const Landing = ({ port, allowEdit, user }: Props): React.ReactElement => {
  const classes = useStyles();
  const { url } = useRouteMatch() as myMatch;
  const [offset, setOffset] = React.useState<any>(0);
  const ref = useRef<HTMLHeadingElement>(null);
  const windowWidth = useWindowSize().width;

  React.useEffect(() => {
    if (ref.current) {
      setOffset(windowWidth - ref.current?.offsetLeft - 70);
    }
  }, [setOffset, windowWidth]);

  return (
    <React.Fragment>
      <Container background={port.background}>
        <LandingCard ref={ref}>
          {allowEdit && (
            <div style={{ position: "absolute", top: 110, left: offset }}>
              <LinkNoneStyle to={`${url}/edit_landing`}>
                <IconButton style={{ backgroundColor: "rgba(0,0,0,0.1)" }}>
                  <EditIcon color="primary" />
                </IconButton>
              </LinkNoneStyle>
            </div>
          )}

          <ItemDiv>
            <Avatar
              src={port.avatar ? port.avatar : "/images/AvatarHex.jpg"}
              className={classes.avatar}
            >
              Avatar
            </Avatar>
          </ItemDiv>
          <ItemDiv>
            <Typography align="center" className={classes.name}>
              {port.name.firstName || "?????"} {port.name.lastName || "?????"}{" "}
              <small>({port.name.nickName || "??"})</small>
            </Typography>
          </ItemDiv>
          <SocialDiv>
            <a
              href={port.social.gitHup || "#"}
              target={port.social.gitHup && "_blank"}
              rel="noopener noreferrer"
            >
              <SocialButton disabled={!port.social.gitHup}>
                <GitHubIcon
                  style={{
                    color: !port.social.gitHup ? "rgba(0,0,0,0.3)" : "white",
                  }}
                />
              </SocialButton>
            </a>
            <a
              href={port.social.linkedIn || "#"}
              target={port.social.linkedIn && "_blank"}
              rel="noopener noreferrer"
            >
              <SocialButton disabled={!port.social.linkedIn}>
                <LinkedInIcon
                  style={{
                    color: !port.social.linkedIn
                      ? "rgba(0,0,0,0.3)"
                      : "rgb(0, 127, 178)",
                  }}
                />
              </SocialButton>
            </a>
            <a
              href={port.social.twitter || "#"}
              target={port.social.twitter && "_blank"}
              rel="noopener noreferrer"
            >
              <SocialButton disabled={!port.social.twitter}>
                <TwitterIcon
                  style={{
                    color: !port.social.twitter
                      ? "rgba(0,0,0,0.3)"
                      : "rgb(0, 172, 237)",
                  }}
                />
              </SocialButton>
            </a>
            <a
              href={port.social.faceBook || "#"}
              target={port.social.faceBook && "_blank"}
              rel="noopener noreferrer"
            >
              <SocialButton disabled={!port.social.faceBook}>
                <FacebookIcon
                  color={port.social.faceBook ? "primary" : "disabled"}
                />
              </SocialButton>
            </a>
          </SocialDiv>
          <ItemDiv>
            <Typography align="center" className={classes.email}>
              Email: {port.contact.email || "????"}
            </Typography>
          </ItemDiv>
          <ItemDiv>
            <Typography align="center" className={classes.contact}>
              Tel: {port.contact.tel || "????"}
            </Typography>
          </ItemDiv>
          <ItemDiv>
            <PortURL
              href={`https://5f2c162f193c30c6db744ae6--boring-noyce-43e1ba.netlify.app/${user}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Your port url for show.
            </PortURL>
          </ItemDiv>
        </LandingCard>
      </Container>
    </React.Fragment>
  );
};

export default Landing;
