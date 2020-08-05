import React from "react";
import Modal from "../portal/Modal";
import { useRouteMatch, useHistory, Redirect } from "react-router-dom";
import { MyReducers } from "../redux/rootReducer";
import { ConnectedProps, connect } from "react-redux";
import EditLandingForm from "../Components/editComponents/EditLandingForm";
import { useEditLandingMutation, LandingInput } from "../generated/graphql";
import { SetAlert } from "../redux/alert/alert.action";
import store from "../redux/store";

type myMatch = {
  url: string;
};

const EditLanding = ({
  currentPort,
  currentUser,
  SetAlert,
}: Props): React.ReactElement => {
  const { url } = useRouteMatch() as myMatch;

  const history = useHistory();
  const userId = url.split("/")[2];

  const [editLanding] = useEditLandingMutation();
  const onSubmit = async (values: LandingInput) => {
    store.dispatch({ type: "SetLoading", payload: true });
    const { data } = await editLanding({ variables: { data: values } });
    if (data) {
      SetAlert({ message: "Edited landing successfully.", type: "success" });
    }
    store.dispatch({ type: "SetLoading", payload: false });
    history.push(url.substring(0, url.length - 13));
  };

  if (userId !== currentUser?.username || !currentUser)
    return <Redirect to="/" />;
  if (!currentPort)
    return <Redirect to={`/portfolio/${currentUser.username}`} />;
  return (
    <Modal
      onDismiss={() => history.push(url.substring(0, url.length - 13))}
      title="Edit Landing"
      content={
        <EditLandingForm currentPort={currentPort} onSubmit={onSubmit} />
      }
      actions={<div></div>}
    />
  );
};

const mapStateToProps = (state: MyReducers) => ({
  currentUser: state.userReducer.currentUser,
  currentPort: state.portReducer.currentPort,
});

const connector = connect(mapStateToProps, { SetAlert });

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

export default connector(EditLanding);
