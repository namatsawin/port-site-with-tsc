import React, { useRef, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../Components/portComponents/Navbar";
import Landing from "../Components/portComponents/Landing";
import Projects from "../Components/portComponents/Projects";
import About from "../Components/portComponents/About";
import Contact from "../Components/portComponents/Contact";
import Resume from "../Components/portComponents/Resume";
import { OffSetContext, MyStoreOffset } from "../Context/storeOffset";

const PortContainer = styled.div`
  background-color: #e5e5e5;
  width: 100%;
`;

type myParams = {
  id: string;
};

const PortfolioPage = () => {
  const { id } = useParams() as myParams;

  if (!id) {
    console.log(id);
  }

  const { offset, setOffSet } = useContext(OffSetContext) as MyStoreOffset;

  const LandingRef = useRef<HTMLHeadingElement>(null);
  const ProjectRef = useRef<HTMLHeadingElement>(null);
  const AboutRef = useRef<HTMLHeadingElement>(null);
  const ContactRef = useRef<HTMLHeadingElement>(null);
  const ResumeRef = useRef<HTMLHeadingElement>(null);

  React.useEffect(() => {
    setOffSet({
      landing: LandingRef.current?.offsetTop,
      project: ProjectRef.current?.offsetTop,
      about: AboutRef.current?.offsetTop,
      contact: ContactRef.current?.offsetTop,
      resume: ResumeRef.current?.offsetTop,
    });
  }, [setOffSet]);

  return (
    <PortContainer>
      <Navbar offset={offset} />
      <div ref={LandingRef}>
        <Landing />
      </div>
      <div ref={ProjectRef}>
        <Projects />
      </div>
      <div ref={AboutRef}>
        <About />
      </div>
      <div ref={ContactRef}>
        <Contact />
      </div>
      <div ref={ResumeRef}>
        <Resume />
      </div>
    </PortContainer>
  );
};

export default PortfolioPage;
