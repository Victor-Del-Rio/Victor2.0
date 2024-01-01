import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Link,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [showCopyAlert, setShowCopyAlert] = useState(false);
  const email = "vicjdrf@gmail.com";

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setShowCopyAlert(true);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
        setShowCopyAlert(true);
      } catch (fallbackErr) {
        console.error("Failed to copy email to clipboard:", fallbackErr);
      }
      document.body.removeChild(textArea);
    }
  };

  const handleCloseCopyAlert = () => {
    setShowCopyAlert(false);
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "grey.900",
        color: "white",
        py: 3,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="body1">
            © {currentYear} Victor Del Rio Foces. All rights reserved.
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Link
              href="https://github.com/Victor-Del-Rio"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <GitHub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/victor-del-rio-foces/"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <LinkedIn />
            </Link>
            <IconButton
              onClick={copyEmailToClipboard}
              color="inherit"
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              title="Click to copy email address"
            >
              <Email />
            </IconButton>
          </Box>
        </Box>
      </Container>

      {/* Copy Email Confirmation Snackbar */}
      <Snackbar
        open={showCopyAlert}
        autoHideDuration={3000}
        onClose={handleCloseCopyAlert}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseCopyAlert}
          severity="success"
          sx={{ width: "100%" }}
        >
          Email address copied to clipboard!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Footer;
