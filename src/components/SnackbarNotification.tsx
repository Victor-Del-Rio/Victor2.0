import React from "react";
import { Snackbar, Alert, AlertColor } from "@mui/material";

interface SnackbarNotificationProps {
  open: boolean;
  onClose: () => void;
  message: string;
  severity?: AlertColor;
  autoHideDuration?: number;
  anchorOrigin?: {
    vertical: "top" | "bottom";
    horizontal: "left" | "center" | "right";
  };
}

const SnackbarNotification: React.FC<SnackbarNotificationProps> = ({
  open,
  onClose,
  message,
  severity = "success",
  autoHideDuration = 3000,
  anchorOrigin = { vertical: "bottom", horizontal: "center" },
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
    >
      <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarNotification;
