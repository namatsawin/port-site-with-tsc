import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { LandingInput } from "../../generated/graphql";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { currentPort } from "../../redux/Port/port.interface";

const LandingSchema = yup.object().shape({
  handlePath: yup
    .string()
    .trim()
    .required("This field is required.")
    .min(5, "This field must be less then 5 chars.")
    .max(30),
  email: yup.string().email("Invalid email."),
  fitsName: yup.string().trim().max(20),
  lastName: yup.string().trim().max(20),
  nickName: yup.string().trim().max(20),
  tel: yup.string().trim().max(20),
  avatar: yup.string().url("This field must be url."),
  background: yup.string().url("This field must be url."),
  gitHup: yup.string().url("This field must be url."),
  faceBook: yup.string().url("This field must be url."),
  twitter: yup.string().url("This field must be url."),
  linkedIn: yup.string().url("This field must be url."),
});

type Props = {
  currentPort: currentPort;
  onSubmit: (values: LandingInput) => void;
};
const EditLandingForm = ({
  currentPort,
  onSubmit,
}: Props): React.ReactElement => {
  const { handleSubmit, register, errors } = useForm({
    resolver: yupResolver(LandingSchema),
  });

  return (
    <form onSubmit={handleSubmit<LandingInput>(onSubmit)}>
      <TextField
        name="handlePath"
        label="handlePath"
        variant="outlined"
        size="small"
        style={{ width: "100%", margin: "5px 0" }}
        defaultValue={currentPort?.handlePath}
        inputRef={register}
        error={!!errors.handlePath}
      />
      {errors.handlePath && (
        <p
          style={{
            margin: "0 0 5px 0",
            padding: 0,
            color: "red",
            fontSize: 14,
          }}
        >
          {errors.handlePath.message}
        </p>
      )}
      <TextField
        name="avatar"
        label="Avatar URL"
        variant="outlined"
        size="small"
        style={{ width: "100%", margin: "5px 0" }}
        defaultValue={currentPort?.avatar}
        inputRef={register}
        error={!!errors.avatar}
      />
      {errors.avatar && (
        <p
          style={{
            margin: "0 0 5px 0",
            padding: 0,
            color: "red",
            fontSize: 14,
          }}
        >
          {errors.avatar.message}
        </p>
      )}
      <TextField
        name="background"
        label="Background URL"
        variant="outlined"
        size="small"
        style={{ width: "100%", margin: "5px 0" }}
        defaultValue={currentPort?.background}
        inputRef={register}
        error={!!errors.background}
      />{" "}
      {errors.background && (
        <p
          style={{
            margin: "0 0 5px 0",
            padding: 0,
            color: "red",
            fontSize: 14,
          }}
        >
          {errors.background.message}
        </p>
      )}
      <TextField
        name="firstName"
        label="FirstName"
        variant="outlined"
        size="small"
        style={{ width: "100%", margin: "5px 0" }}
        defaultValue={currentPort?.name.firstName}
        inputRef={register}
        error={!!errors.firstName}
      />{" "}
      {errors.firstName && (
        <p
          style={{
            margin: "0 0 5px 0",
            padding: 0,
            color: "red",
            fontSize: 14,
          }}
        >
          {errors.firstName.message}
        </p>
      )}
      <TextField
        name="lastName"
        label="LastName"
        variant="outlined"
        size="small"
        style={{ width: "100%", margin: "5px 0" }}
        defaultValue={currentPort?.name.lastName}
        inputRef={register}
        error={!!errors.lastName}
      />{" "}
      {errors.lastName && (
        <p
          style={{
            margin: "0 0 5px 0",
            padding: 0,
            color: "red",
            fontSize: 14,
          }}
        >
          {errors.lastName.message}
        </p>
      )}
      <TextField
        name="nickName"
        label="NickName"
        variant="outlined"
        size="small"
        style={{ width: "100%", margin: "5px 0" }}
        defaultValue={currentPort?.name.nickName}
        inputRef={register}
        error={!!errors.nickName}
      />{" "}
      {errors.nickName && (
        <p
          style={{
            margin: "0 0 5px 0",
            padding: 0,
            color: "red",
            fontSize: 14,
          }}
        >
          {errors.nickName.message}
        </p>
      )}
      <TextField
        name="gitHup"
        label="GitHup URL"
        variant="outlined"
        size="small"
        style={{ width: "100%", margin: "5px 0" }}
        defaultValue={currentPort?.social.gitHup}
        inputRef={register}
        error={!!errors.gitHup}
      />{" "}
      {errors.gitHup && (
        <p
          style={{
            margin: "0 0 5px 0",
            padding: 0,
            color: "red",
            fontSize: 14,
          }}
        >
          {errors.gitHup.message}
        </p>
      )}
      <TextField
        name="linkedIn"
        label="LinkedIn URL"
        variant="outlined"
        size="small"
        style={{ width: "100%", margin: "5px 0" }}
        defaultValue={currentPort?.social.linkedIn}
        inputRef={register}
        error={!!errors.linkedIn}
      />{" "}
      {errors.linkedIn && (
        <p
          style={{
            margin: "0 0 5px 0",
            padding: 0,
            color: "red",
            fontSize: 14,
          }}
        >
          {errors.linkedIn.message}
        </p>
      )}
      <TextField
        name="twitter"
        label="Twitter URL"
        variant="outlined"
        size="small"
        style={{ width: "100%", margin: "5px 0" }}
        defaultValue={currentPort?.social.twitter}
        inputRef={register}
        error={!!errors.twitter}
      />{" "}
      {errors.twitter && (
        <p
          style={{
            margin: "0 0 5px 0",
            padding: 0,
            color: "red",
            fontSize: 14,
          }}
        >
          {errors.twitter.message}
        </p>
      )}
      <TextField
        name="faceBook"
        label="Facebook URL"
        variant="outlined"
        size="small"
        style={{ width: "100%", margin: "5px 0" }}
        defaultValue={currentPort?.social.faceBook}
        inputRef={register}
        error={!!errors.faceBook}
      />{" "}
      {errors.faceBook && (
        <p
          style={{
            margin: "0 0 5px 0",
            padding: 0,
            color: "red",
            fontSize: 14,
          }}
        >
          {errors.faceBook.message}
        </p>
      )}
      <TextField
        name="email"
        label="Email"
        variant="outlined"
        size="small"
        style={{ width: "100%", margin: "5px 0" }}
        defaultValue={currentPort?.contact.email}
        inputRef={register}
        error={!!errors.email}
      />{" "}
      {errors.email && (
        <p
          style={{
            margin: "0 0 5px 0",
            padding: 0,
            color: "red",
            fontSize: 14,
          }}
        >
          {errors.email.message}
        </p>
      )}
      <TextField
        name="tel"
        label="Telephone"
        variant="outlined"
        size="small"
        style={{ width: "100%", margin: "5px 0" }}
        defaultValue={currentPort?.contact.tel}
        inputRef={register}
        error={!!errors.tel}
      />{" "}
      {errors.tel && (
        <p
          style={{
            margin: "0 0 5px 0",
            padding: 0,
            color: "red",
            fontSize: 14,
          }}
        >
          {errors.tel.message}
        </p>
      )}
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
  );
};

export default EditLandingForm;
