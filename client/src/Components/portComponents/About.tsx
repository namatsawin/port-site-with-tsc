import React from "react";
import styled from "styled-components";
import { Typography, IconButton, TextField } from "@material-ui/core/";
import EditIcon from "@material-ui/icons/Edit";
import DoneIcon from "@material-ui/icons/Done";
import { useEditAboutMutation } from "../../generated/graphql";
import { connect, ConnectedProps } from "react-redux";
import { SetAlert } from "../../redux/alert/alert.action";
import store from "../../redux/store";

const Container = styled.div`
  padding: 30px 0 50px 0;
  text-align: center;
  border-bottom: 1px solid #ccc;
`;

const AboutDiv = styled.div`
  display: inline-block;
  text-align: center;
  max-width: 900px;
  width: 100%;
  word-break: break-word;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const InputEditAbout = styled(TextField)`
  width: 100%;
  animation: expand 0.5s ease-out;
  @keyframes expand {
    from {
      transform: scaleX(0);
    }
  }
`;

const About = ({ about, SetAlert, allowEdit }: Props): React.ReactElement => {
  const [edit, setEdit] = React.useState(false);
  const [aboutMe, setAboutMe] = React.useState(about);
  const [editAbout] = useEditAboutMutation();

  const handleChange = (e: any) => {
    setAboutMe(e.target.value);
  };

  const handleEdit = async () => {
    if (edit) {
      store.dispatch({ type: "SetLoading", payload: true });
      const { data } = await editAbout({ variables: { about: aboutMe } });
      if (data) {
        SetAlert({
          type: "success",
          message: "Edited description about you successfully.",
        });
      }
      store.dispatch({ type: "SetLoading", payload: false });
    }
    setEdit(!edit);
  };
  return (
    <React.Fragment>
      <Container>
        <Typography
          align="center"
          variant="h6"
          component="h4"
          style={{ marginBottom: 20 }}
        >
          About
        </Typography>
        <AboutDiv>
          {allowEdit && (
            <div style={{ textAlign: "right" }}>
              <IconButton onClick={handleEdit}>
                {edit ? (
                  <DoneIcon color="primary" />
                ) : (
                  <EditIcon color="primary" />
                )}
              </IconButton>
            </div>
          )}

          <div style={{ padding: allowEdit ? "0 30px 30px 30px" : "30px" }}>
            {edit && allowEdit ? (
              <InputEditAbout
                multiline
                rowsMax={10}
                variant="outlined"
                label="About"
                defaultValue={about}
                onChange={handleChange}
              />
            ) : (
              <Typography>
                &nbsp;&nbsp;&nbsp;&nbsp;
                {about ? about : "Description about your self."}
              </Typography>
            )}
          </div>
        </AboutDiv>
      </Container>
    </React.Fragment>
  );
};

type OwnProps = {
  about: string;
  allowEdit: Boolean;
};

const mapStateToProps = (_: any, ownProps: OwnProps) => {
  return {
    about: ownProps.about,
    allowEdit: ownProps.allowEdit,
  };
};
const connector = connect(mapStateToProps, { SetAlert });

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

export default connector(About);
