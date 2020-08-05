import React from "react";
import { Button, TextField } from "@material-ui/core/";
import styled from "styled-components";

const Form = styled.form``;

const EditPage = (): React.ReactElement => {
  return (
    <Form>
      <div style={{ margin: "15px 0" }}>
        <TextField
          label="Outlined"
          size="small"
          variant="outlined"
          style={{ width: "100%" }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Button
          size="small"
          color="primary"
          variant="contained"
          style={{ width: "100%" }}
        >
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default EditPage;
