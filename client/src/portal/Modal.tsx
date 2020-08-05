import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

type Props = {
  onDismiss: () => void;
  title: string;
  content: React.ReactElement;
  actions: React.ReactElement;
  isLoading?: Boolean;
};

const Container1 = document.createElement("div");
const ModalRoot = document.querySelector("#modal");

const OutSide = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: grid;
  place-items: center;
`;

const ModalBody = styled.div`
  max-width: 400px;
  background-color: white;
  padding: 20px 60px;
  max-height: 500px;
  overflow-y: auto;
  border-radius: 3px;
`;

export default function Modal({
  onDismiss,
  title,
  content,
  actions,
  isLoading,
}: Props) {
  React.useEffect(() => {
    ModalRoot?.appendChild(Container1);

    return () => {
      ModalRoot?.removeChild(Container1);
    };
  }, []);

  return ReactDOM.createPortal(
    <OutSide onClick={onDismiss}>
      <ModalBody onClick={(e) => e.stopPropagation()}>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          style={{ margin: "10px 0" }}
        >
          {title}
        </Typography>
        <div style={{ margin: "15px 0" }}>{content}</div>
        <div>{actions}</div>
      </ModalBody>
      {isLoading && (
        <div
          style={{
            display: "grid",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.9)",
            placeItems: "center",
            minHeight: "100vh",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 9999,
          }}
        >
          <CircularProgress color="secondary" />
        </div>
      )}
    </OutSide>,
    Container1
  );
}
