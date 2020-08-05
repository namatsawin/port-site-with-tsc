import React from "react";
import Modal from "../portal/Modal";
import {
  useRouteMatch,
  useHistory,
  useParams,
  Redirect,
} from "react-router-dom";
import { MyReducers } from "../redux/rootReducer";
import { connect, ConnectedProps } from "react-redux";
import EditWorkForm from "../Components/editComponents/EditWorkForm";

type myMatch = {
  url: string;
};

type myParams = {
  id: string;
};

const EditWork = ({ currentPort, currentUser }: Props): React.ReactElement => {
  const { url } = useRouteMatch() as myMatch;
  const { id } = useParams() as myParams;
  const history = useHistory();
  const title = id.toLowerCase() === "create" ? "Create Work" : "Edit Work";
  const userId = url.split("/")[2];

  const handleDismiss = () => {
    if (id.toLowerCase() === "create") {
      history.push(url.substring(0, url.length - (6 + id.length)));
    } else {
      history.push(url.substring(0, url.length - (6 + id.length)));
    }
  };

  if (userId !== currentUser?.username || !currentUser) return <Redirect to="/" />;
  if (!currentPort) return <Redirect to={`/portfolio/${currentUser?.username}`} />;
  return (
    <Modal
      onDismiss={handleDismiss}
      title={title}
      content={
        <EditWorkForm
          workId={id}
          back={() =>
            history.push(url.substring(0, url.length - (6 + id.length)))
          }
        />
      }
      actions={<div></div>}
    />
  );
};

const mapStateToProps = (state: MyReducers) => {
  return {
    currentUser: state.userReducer.currentUser,
    currentPort: state.portReducer.currentPort,
  };
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

export default connector(EditWork);
