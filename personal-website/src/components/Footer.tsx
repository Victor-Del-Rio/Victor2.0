import React from "react";
import { Box, Typography, Container, Link } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

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
            <Link
              href="vicjdrf@gmail.com"
              color="inherit"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Email />
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
