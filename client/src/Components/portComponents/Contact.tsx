import React from "react";
import styled from "styled-components";
import { Typography, IconButton } from "@material-ui/core/";
import EditIcon from "@material-ui/icons/Edit";

const Container = styled.div`
  padding: 30px 0 50px 0;
  border-bottom: 1px solid #ccc;
  text-align: center;
`;

const ContactDiv = styled.div`
  display: inline-block;
  max-width: 900px;
  word-break: break-all;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Contact = (): React.ReactElement => {
  return (
    <Container>
      <Typography
        align="center"
        variant="h6"
        component="h4"
        style={{ marginBottom: 20 }}
      >
        Contact
      </Typography>
      <ContactDiv>
        <div style={{ textAlign: "right" }}>
          <IconButton>
            <EditIcon color="primary" />
          </IconButton>
        </div>

        <div style={{ padding: "0 40px 40px 40px" }}>
          <Typography align="center" style={{ marginBottom: 10 }}>
            Email: {"Example@gmail.com"}
          </Typography>{" "}
          <Typography align="center">Tel: {"042-400-4242"}</Typography>
        </div>
      </ContactDiv>
    </Container>
  );
};

export default Contact;
