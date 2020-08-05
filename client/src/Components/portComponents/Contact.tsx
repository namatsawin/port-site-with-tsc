import React from "react";
import styled from "styled-components";
import { Typography, IconButton, TextField } from "@material-ui/core/";
import EditIcon from "@material-ui/icons/Edit";
import DoneIcon from "@material-ui/icons/Done";

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

const InputEditContact = styled(TextField)`
  max-width: 400px;
  width: 100%;
  animation: expand 0.5s ease-out;
  @keyframes expand {
    from {
      transform: scaleX(0);
    }
  }
`;

const Contact = (): React.ReactElement => {
  const [edit, setEdit] = React.useState(false);
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
          <IconButton onClick={() => setEdit(!edit)}>
            {edit ? <DoneIcon color="primary" /> : <EditIcon color="primary" />}
          </IconButton>
        </div>

        <div style={{ padding: "0 40px 40px 40px" }}>
          {edit ? (
            <React.Fragment>
              <InputEditContact
                variant="outlined"
                color="primary"
                label="Email"
                size="small"
                style={{ width: "100%", marginBottom: 10 }}
              />
              <InputEditContact
                variant="outlined"
                color="primary"
                label="Tel"
                size="small"
                style={{ width: "100%" }}
              />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typography align="center" style={{ marginBottom: 10 }}>
                Email: {"Example@gmail.com"}
              </Typography>
              <Typography align="center">Tel: {"042-400-4242"}</Typography>
            </React.Fragment>
          )}
        </div>
      </ContactDiv>
    </Container>
  );
};

export default Contact;
