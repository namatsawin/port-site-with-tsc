import React from "react";
import styled from "styled-components";
import { Typography, IconButton } from "@material-ui/core/";
import EditIcon from "@material-ui/icons/Edit";

const Container = styled.div`
  padding: 30px 0 50px 0;
  text-align: center;
  border-bottom: 1px solid #ccc;
`;

const AboutDiv = styled.div`
  display: inline-block;
  text-align: left;
  max-width: 900px;
  word-break: break-word;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const About = (): React.ReactElement => {
  return (
    <Container>
      <Typography
        align="center"
        variant="h6"
        component="h4"
        style={{ marginBottom: 20 }}
      >
        About
      </Typography>
      <AboutDiv>
        <div style={{ textAlign: "right" }}>
          <IconButton>
            <EditIcon color="primary" />
          </IconButton>
        </div>
        <div style={{ padding: "0 30px 30px 30px" }}>
          <Typography>
            &nbsp;&nbsp;&nbsp;&nbsp;
            {"Description about your self."}
          </Typography>
        </div>
      </AboutDiv>
    </Container>
  );
};

export default About;
