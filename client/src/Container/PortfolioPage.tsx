import React, { useContext } from "react";
import styled from "styled-components";
import Navbar from "../Components/portComponents/Navbar";
import { Route, useRouteMatch, Redirect } from "react-router-dom";
import Portfolio from "../Components/portComponents/Portfolio";
import { OffSetContext, MyStoreOffset } from "../Context/storeOffset";
import EditLanding from "./EditLanding";
import EditWork from "./EditWork";
import DeleteWork from "./DeleteWork";
import { useParams } from "react-router-dom";
import { useWhoPortQuery } from "src/generated/graphql";
import Spinner from "../portal/Spinner";
import store from "../redux/store";
import { MyReducers } from "../redux/rootReducer";
import { connect, ConnectedProps } from "react-redux";

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

const PortfolioPage = ({ loader }: Props) => {
  const { offset } = useContext(OffSetContext) as MyStoreOffset;
  const { url } = useRouteMatch() as myMatch;
  const { id } = useParams() as myParams;
  const { data, loading, error } = useWhoPortQuery({
    variables: { id },
  });
  
  React.useEffect(() => {
    if (data) {
      store.dispatch({ type: "SetPort", payload: data.whoPort as any });
    }

    if (error) {
      store.dispatch({ type: "ClearPort", payload: null });
    }

    return () => {
      store.dispatch({ type: "ClearPort", payload: null });
    };
  }, [data, id, error]);

  if (!data && loading) return <Spinner isLoading={loading} />;
  if (error) return <Redirect to="/" />;
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
  };
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

export default connector(PortfolioPage);
