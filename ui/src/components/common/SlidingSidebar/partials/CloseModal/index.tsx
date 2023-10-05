import React, { useMemo } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import SuccessIcon from "@mui/icons-material/CheckCircle";
import WarnIcon from "../../../../../images/warning-triangle.png";

import "./style.css";

export interface CloseModalProps {
  onConfirm: () => void;
  onCancel: () => void;
  message?: string;
  iconType?: "info" | "warn";
}

export function CloseModal({
  onConfirm,
  onCancel,
  message = "Are sure you want to close this sidebar?",
  iconType,
}: CloseModalProps) {
  const icon = useMemo(() => {
    switch (iconType) {
      case "info":
        return <SuccessIcon fontSize="large" color="success" />;
      case "warn":
        return (
          <img src={WarnIcon} alt="Warn" className="close-modal-warn-icon" />
        );
      default:
        return null;
    }
  }, [iconType]);

  return (
    <Modal
      open={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "25rem",
          bgcolor: "background.paper",
          borderRadius: "0.3125rem",
          boxShadow: 24,
          padding: "2rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginBottom: "1rem",
          }}
        >
          {icon}
          <span className="close-modal-message">{message}</span>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Button onClick={onConfirm} variant="contained" color="primary">
            Confirm
          </Button>
          <Button onClick={onCancel} variant="outlined" color="primary">
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
