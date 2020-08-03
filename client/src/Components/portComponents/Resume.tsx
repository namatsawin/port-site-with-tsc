import React from "react";
import styled from "styled-components";
import { Typography, Button } from "@material-ui/core/";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const Container = styled.div`
  padding: 30px 0 50px 0;
  border-bottom: 2px solid #ccc;
`;

const ResumeDiv = styled.div`
  margin: auto;
  max-width: 900px;
  word-break: break-all;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 3px;
`;

const ResumeFrame = styled.iframe`
  width: 100%;
  height: 600px;
  border: 2px solid #ccc;
  outline: none;
`;

const Resume = (): React.ReactElement => {
  const handleFileChange = (resumePdf: File) => {
    console.log(resumePdf);
  };

  return (
    <Container>
      <Typography
        align="center"
        variant="h6"
        component="h4"
        style={{ marginBottom: 20 }}
      >
        Resume
      </Typography>
      <ResumeDiv>
        <div style={{ textAlign: "right", marginBottom: 20 }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<CloudUploadIcon />}
            component="label"
          >
            Upload
            <input
              type="file"
              name="resume"
              accept="application/pdf"
              multiple={false}
              style={{ display: "none" }}
              onInput={(e: any) => handleFileChange(e.target.files[0])}
            />
          </Button>
        </div>

        <ResumeFrame src=""></ResumeFrame>
      </ResumeDiv>
    </Container>
  );
};

export default Resume;
