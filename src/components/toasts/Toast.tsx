import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";

type Props = {
  header: string;
  description: string;
  position?:
    | "top-start"
    | "top-center"
    | "top-end"
    | "bottom-start"
    | "bottom-center"
    | "bottom-end";
  show: boolean;
  onClose(): void;
};

export const Notification: React.FC<Props> = ({
  header,
  description,
  position = "top-end",
  show,
  onClose,
}) => {
  return (
    <ToastContainer className="p-3 mt-5" position={position}>
      <Toast delay={3000} autohide onClose={onClose} show={show}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">{header}</strong>
        </Toast.Header>
        <Toast.Body>{description}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};
