import React, { useContext } from "react";
import styled from "styled-components";
import Navbar from "../Components/portComponents/Navbar";
import { Route, useRouteMatch, Link } from "react-router-dom";
import Portfolio from "../Components/portComponents/Portfolio";
import { OffSetContext, MyStoreOffset } from "../Context/storeOffset";
import EditLanding from "./EditLanding";
import EditWork from "./EditWork";
import DeleteWork from "./DeleteWork";
import { useParams } from "react-router-dom";
import { useWhoPortQuery } from "src/generated/graphql";
import Spinner from "../portal/Spinner";
import { MyReducers } from "../redux/rootReducer";
import { connect, ConnectedProps } from "react-redux";
import { SetPort } from "../redux/Port/port.action";
import store from "../redux/store";

const PortContainer = styled.div`
  background-color: #e5e5e5;
  width: 100%;
`;

type myMatch = {
  url: string;
};

type myParams = {
  id: string;
};

<<<<<<< HEAD
const PortfolioPage = ({
  SetPort,
  loader,
  currentPort,
  currentUser,
}: Props) => {
=======
const PortfolioPage = ({ SetPort, loader, currentUser }: Props) => {
>>>>>>> efaac09e236f69eadcbf7fb6d185ab1dfac5dd1a
  const { offset } = useContext(OffSetContext) as MyStoreOffset;
  const { url } = useRouteMatch() as myMatch;
  const { id } = useParams() as myParams;
  const { data, loading } = useWhoPortQuery({
    variables: { handlePath: id },
  });

  React.useEffect(() => {
    store.dispatch({ type: "SetLoading", payload: loading });
    if (data) {
      SetPort(data.whoPort as any);
    }
  }, [data, id, SetPort, loading]);

  if (!currentUser)
    window.location.href = `https://5f2c144a3db416902c67d5bd--boring-noyce-43e1ba.netlify.app/${id}`;
  if (!data && !loading)
    return (
      <div style={{ height: "100vh", display: "grid", placeItems: "center" }}>
        <h3>
          Portfolio not found.
          <Link style={{ color: "#f50057" }} to="/">
            Back home
          </Link>
        </h3>
      </div>
    );

  return (
    <PortContainer>
      <Navbar offset={offset} />
      <Route path={`${url}`} component={Portfolio} />
      <Route exact path={`${url}/edit_landing`} component={EditLanding} />
      <Route exact path={`${url}/work/:id`} component={EditWork} />
      <Route exact path={`${url}/work/:id/delete`} component={DeleteWork} />
      <Spinner isLoading={loader} />
    </PortContainer>
  );
};

const mapStateToProps = (state: MyReducers) => {
  return {
    loader: state.loadReducer.isLoading,
<<<<<<< HEAD
    currentPort: state.portReducer.currentPort,
=======
>>>>>>> efaac09e236f69eadcbf7fb6d185ab1dfac5dd1a
    currentUser: state.userReducer.currentUser,
  };
};

const connector = connect(mapStateToProps, { SetPort });

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

export default connector(PortfolioPage);
