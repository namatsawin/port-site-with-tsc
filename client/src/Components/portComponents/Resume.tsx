import React from "react";
import styled from "styled-components";
import { Typography, IconButton, TextField } from "@material-ui/core/";
import EditIcon from "@material-ui/icons/Edit";
import DoneIcon from "@material-ui/icons/Done";
import { useEditResumeMutation } from "../../generated/graphql";
import { connect, ConnectedProps } from "react-redux";
import { SetAlert } from "../../redux/alert/alert.action";
import { validURL } from "src/utils/validURL";
import store from "../../redux/store";

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

const InputEditResume = styled(TextField)`
  max-width: 400px;
  width: 100%;
  animation: expand 0.5s ease-out;
  @keyframes expand {
    from {
      transform: scaleX(0);
    }
  }
`;

const Resume = ({ resume, SetAlert, allowEdit }: Props): React.ReactElement => {
  const [edit, setEdit] = React.useState(false);
  const [myResume, setMyResume] = React.useState(resume);
  const [error, setError] = React.useState(false);
  const [editResume] = useEditResumeMutation();

  const handleChange = (e: any) => {
    setMyResume(e.target.value);
  };

  const handleEdit = async () => {
    setError(false);
    if (edit) {
      if (!validURL(myResume) && myResume) {
        setError(true);
        return;
      }
      store.dispatch({ type: "SetLoading", payload: true });
      const { data } = await editResume({ variables: { resume: myResume } });
      if (data) {
        SetAlert({ type: "success", message: "Edited resume successfully." });
      }
      store.dispatch({ type: "SetLoading", payload: false });
    }
    setEdit(!edit);
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
        {allowEdit && (
          <div style={{ textAlign: "right", marginBottom: 20 }}>
            {error && (
              <p
                style={{
                  margin: "0 0 5px 0",
                  padding: 0,
                  color: "red",
                  fontSize: 14,
                }}
              >
                This field must be url.
              </p>
            )}
            {edit && (
              <InputEditResume
                variant="outlined"
                size="small"
                label="Resume URL"
                style={{ margin: "5px" }}
                defaultValue={resume}
                onChange={handleChange}
                error={error}
              />
            )}
            <IconButton color="primary" onClick={handleEdit}>
              {edit ? (
                <DoneIcon color="primary" />
              ) : (
                <EditIcon color="primary" />
              )}
            </IconButton>
          </div>
        )}

        <ResumeFrame src={resume} title="Resume"></ResumeFrame>
      </ResumeDiv>
    </Container>
  );
};

type OwnProps = {
  resume: string;
  allowEdit: Boolean;
};
const mapStateToProps = (_: any, ownProps: OwnProps) => {
  return {
    resume: ownProps.resume,
    allowEdit: ownProps.allowEdit,
  };
};
const connector = connect(mapStateToProps, { SetAlert });

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

export default connector(Resume);
