import React, { useRef, useContext } from "react";
import Landing from "./Landing";
import Projects from "./Projects";
import About from "./About";
import Resume from "./Resume";
import { OffSetContext, MyStoreOffset } from "../../Context/storeOffset";
import { ConnectedProps, connect } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { MyReducers } from "src/redux/rootReducer";

type myMatch = {
  url: string;
};

const Portfolio = ({ currentPort, currentUser }: Props) => {
  const { setOffSet } = useContext(OffSetContext) as MyStoreOffset;
  const { url } = useRouteMatch() as myMatch;
  const [allowEdit, setAllowEdit] = React.useState(false);
  const userId = url.split("/")[1];
  const LandingRef = useRef<HTMLHeadingElement>(null);
  const ProjectRef = useRef<HTMLHeadingElement>(null);
  const AboutRef = useRef<HTMLHeadingElement>(null);
  const ResumeRef = useRef<HTMLHeadingElement>(null);

  React.useEffect(() => {
    if (currentUser && currentUser.username === userId) {
      setAllowEdit(true);
    }
    setOffSet({
      landing: LandingRef.current?.offsetTop,
      project: ProjectRef.current?.offsetTop,
      about: AboutRef.current?.offsetTop,
      resume: ResumeRef.current?.offsetTop,
    });
  }, [setOffSet, currentPort, setAllowEdit, currentUser, userId]);

  return (
    currentPort && (
      <React.Fragment>
        <div ref={LandingRef}>
          <Landing port={currentPort} allowEdit={allowEdit} />
        </div>
        <div ref={ProjectRef}>
          <Projects works={currentPort?.works} allowEdit={allowEdit} />
        </div>
        <div ref={AboutRef}>
          <About about={currentPort?.about} allowEdit={allowEdit} />
        </div>
        <div ref={ResumeRef}>
          <Resume resume={currentPort.resume} allowEdit={allowEdit} />
        </div>
      </React.Fragment>
    )
  );
};

const mapStateToProps = (state: MyReducers) => ({
  currentPort: state.portReducer.currentPort,
  currentUser: state.userReducer.currentUser,
});

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

const connector = connect(mapStateToProps);

export default connector(Portfolio);
