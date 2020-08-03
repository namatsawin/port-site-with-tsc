import React from "react";
import styled from "styled-components";
import { Typography, CardActionArea, Card } from "@material-ui/core/";
import ProjectItem from "./ProjectItem";
import AddIcon from "@material-ui/icons/Add";

const Container = styled.div`
  padding: 30px 10px;
  border-bottom: 1px solid #ccc;
`;

const ProjectDiv = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  margin: auto;
  width: 100%;
  max-width: 900px;

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Projects = (): React.ReactElement => {
  return (
    <Container>
      <Typography
        align="center"
        variant="h6"
        component="h4"
        style={{ marginBottom: 20 }}
      >
        My Projects
      </Typography>
      <ProjectDiv>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <Card style={{ maxWidth: 345 }}>
          <CardActionArea
            style={{ height: "100%", display: "grid", placeItems: "center" }}
          >
            <AddIcon style={{ fontSize: 100 }} color="primary" />
          </CardActionArea>
        </Card>
      </ProjectDiv>
    </Container>
  );
};

export default Projects;
