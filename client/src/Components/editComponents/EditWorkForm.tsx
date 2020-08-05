import React from "react";
import { TextField, Typography, IconButton, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";
import styled from "styled-components";
import CancelIcon from "@material-ui/icons/Cancel";
import { MyReducers } from "../../redux/rootReducer";
import { connect, ConnectedProps } from "react-redux";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useEditWorkMutation } from "../../generated/graphql";
import { SetAlert } from "../../redux/alert/alert.action";
import store from "../../redux/store";

const SkillUsedContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1px 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
  padding: 5px;
`;

const SkillUsedDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const WorkSchema = yup.object().shape({
  name: yup.string().max(20),
  description: yup.string().max(100),
  previewImage: yup.string().url("This field must be url."),
  viewDemo: yup.string().url("This field must be url."),
  viewGitHup: yup.string().url("This field must be url."),
});

const EditWorkForm = ({ work, SetAlert, back }: Props): React.ReactElement => {
  const [skills, setSkills] = React.useState(work?.skillsUsed || []);
  const [errSkill, setErrSkill] = React.useState(false);
  const [skill, setSkill] = React.useState("");
  const [addSkill, setAddSkill] = React.useState(false);

  const [editWork] = useEditWorkMutation();

  const { handleSubmit, register, errors } = useForm({
    resolver: yupResolver(WorkSchema),
  });

  const handleAddSkill = () => {
    if (!skill) {
      setAddSkill(false);
      return;
    }
    if (skills?.find((s) => s === skill)) {
      setErrSkill(true);
    } else {
      setErrSkill(false);
      skills?.push(skill);
      setSkill("");
      setAddSkill(false);
    }
  };

  const onSubmit = async (values: any) => {
    store.dispatch({ type: "SetLoading", payload: true });
    const { data } = await editWork({
      variables: {
        work: { ...values, id: work?.id || "create", skillsUsed: [...skills] },
      },
    });
    if (data) {
      SetAlert({ message: "Edited work successfully.", type: "success" });
    }
    store.dispatch({ type: "SetLoading", payload: false });
    back();
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit<any>(onSubmit)}>
        <TextField
          name="name"
          label="Name"
          variant="outlined"
          size="small"
          style={{ width: "100%", margin: "5px 0" }}
          defaultValue={work?.name}
          inputRef={register}
          error={!!errors.name}
          autoComplete="off"
        />{" "}
        {errors.name && (
          <p
            style={{
              margin: "0 0 5px 0",
              padding: 0,
              color: "red",
              fontSize: 14,
            }}
          >
            {errors.name.message}
          </p>
        )}
        <TextField
          name="description"
          label="Description"
          variant="outlined"
          size="small"
          style={{ width: "100%", margin: "5px 0" }}
          defaultValue={work?.description}
          inputRef={register}
          error={!!errors.description}
          autoComplete="off"
        />{" "}
        {errors.description && (
          <p
            style={{
              margin: "0 0 5px 0",
              padding: 0,
              color: "red",
              fontSize: 14,
            }}
          >
            {errors.description.message}
          </p>
        )}
        <TextField
          name="previewImage"
          label="PreviewImage URL"
          variant="outlined"
          size="small"
          style={{ width: "100%", margin: "5px 0" }}
          defaultValue={work?.previewImage}
          inputRef={register}
          error={!!errors.previewImage}
          autoComplete="off"
        />{" "}
        {errors.previewImage && (
          <p
            style={{
              margin: "0 0 5px 0",
              padding: 0,
              color: "red",
              fontSize: 14,
            }}
          >
            {errors.previewImage.message}
          </p>
        )}
        <TextField
          name="viewDemo"
          label="Demo URL"
          variant="outlined"
          size="small"
          style={{ width: "100%", margin: "5px 0" }}
          defaultValue={work?.viewDemo}
          inputRef={register}
          error={!!errors.viewDemo}
          autoComplete="off"
        />{" "}
        {errors.viewDemo && (
          <p
            style={{
              margin: "0 0 5px 0",
              padding: 0,
              color: "red",
              fontSize: 14,
            }}
          >
            {errors.viewDemo.message}
          </p>
        )}
        <TextField
          name="viewGitHup"
          label="GitHup URL"
          variant="outlined"
          size="small"
          style={{ width: "100%", margin: "5px 0" }}
          defaultValue={work?.viewGitHup}
          inputRef={register}
          error={!!errors.viewGitHup}
          autoComplete="off"
        />{" "}
        {errors.viewGitHup && (
          <p
            style={{
              margin: "0 0 5px 0",
              padding: 0,
              color: "red",
              fontSize: 14,
            }}
          >
            {errors.viewGitHup.message}
          </p>
        )}
        <div style={{ marginTop: 10 }}>
          <Typography>
            Skill used:
            <IconButton onClick={() => setAddSkill(!addSkill)}>
              {addSkill ? (
                <CancelIcon color="secondary" />
              ) : (
                <AddIcon color="primary" />
              )}
            </IconButton>
          </Typography>

          {skills && skills.length > 0 && (
            <SkillUsedContainer>
              {skills.map((skill, index) => (
                <SkillUsedDiv key={index}>
                  <Typography>{skill}</Typography>
                  <IconButton
                    onClick={() => {
                      const newSkills = skills.filter((s) => s !== skill);
                      setSkills(newSkills);
                    }}
                  >
                    <DeleteIcon color="secondary" />
                  </IconButton>
                </SkillUsedDiv>
              ))}
            </SkillUsedContainer>
          )}

          {addSkill && (
            <React.Fragment>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <TextField
                  label="Write skill..."
                  variant="outlined"
                  size="small"
                  style={{ width: "100%", margin: "5px 0" }}
                  onChange={(e) => setSkill(e.target.value)}
                  value={skill}
                  autoComplete="off"
                  required
                />
                <IconButton onClick={handleAddSkill}>
                  <DoneIcon color="primary" />
                </IconButton>
              </div>
              {errSkill && (
                <p
                  style={{
                    margin: "0 0 5px 0",
                    padding: 0,
                    color: "red",
                    fontSize: 14,
                  }}
                >
                  You have already added this skill.
                </p>
              )}
            </React.Fragment>
          )}
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="small"
          style={{ width: "100%", marginTop: 10 }}
        >
          Submit
        </Button>
      </form>
    </React.Fragment>
  );
};

type ownProps = {
  workId: string;
  back: () => void;
};

const mapStateToProps = (state: MyReducers, ownProps: ownProps) => {
  return {
    work: state.portReducer.currentPort?.works.find(
      (w) => w.id === ownProps.workId
    ),
    back: ownProps.back,
  };
};

const connector = connect(mapStateToProps, { SetAlert });

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

export default connector(EditWorkForm);
