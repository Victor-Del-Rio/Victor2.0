import React from "react";
import { Container, Typography, Box, Button, Paper } from "@mui/material";
import {
  Code,
  Person,
  Work,
  Extension,
  Language,
  Groups,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: "center",
          mb: 8,
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          pb={1}
          gutterBottom
          sx={{
            fontWeight: "bold",
            background: "linear-gradient(45deg, #1976d2, #42a5f5)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Welcome to My Portfolio
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: "600px", mx: "auto" }}
        ></Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/projects"
            startIcon={<Work />}
          >
            View My Projects
          </Button>
          <Button
            variant="outlined"
            size="large"
            component={Link}
            to="/about"
            startIcon={<Person />}
          >
            Learn About Me
          </Button>
        </Box>
      </Box>

      {/* Features Section */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: 4,
        }}
      >
        <Paper
          elevation={2}
          sx={{
            p: 3,
            textAlign: "center",
            height: "100%",
            transition: "transform 0.2s",
            "&:hover": {
              transform: "translateY(-4px)",
            },
          }}
        >
          <Extension sx={{ fontSize: 48, color: "primary.main", mb: 2 }} />
          <Typography variant="h6" gutterBottom>
            Problem Solving
          </Typography>
          <Typography variant="body2" color="text.secondary">
            I enjoy tackling complex challenges and finding elegant solutions
            through creative thinking and systematic approaches.
          </Typography>
        </Paper>

        <Paper
          elevation={2}
          sx={{
            p: 3,
            textAlign: "center",
            height: "100%",
            transition: "transform 0.2s",
            "&:hover": {
              transform: "translateY(-4px)",
            },
          }}
        >
          <Groups sx={{ fontSize: 48, color: "primary.main", mb: 2 }} />
          <Typography variant="h6" gutterBottom>
            Life Long Learner
          </Typography>
          <Typography variant="body2" color="text.secondary">
            I'm always eager to learn new technologies and improve my skills. I
            also love meeting new people to learn and collaborate with.
          </Typography>
        </Paper>
        <Paper
          elevation={2}
          sx={{
            p: 3,
            textAlign: "center",
            height: "100%",
            transition: "transform 0.2s",
            "&:hover": {
              transform: "translateY(-4px)",
            },
          }}
        >
          <Language sx={{ fontSize: 48, color: "primary.main", mb: 2 }} />
          <Typography variant="h6" gutterBottom>
            Clean Code
          </Typography>
          <Typography variant="body2" color="text.secondary">
            I write maintainable, scalable, and well-documented code following
            best practices and modern development standards.
          </Typography>
        </Paper>
      </Box>

      {/* Call to Action */}
      <Box sx={{ textAlign: "center", mt: 8 }}>
        <Typography variant="h4" gutterBottom>
          Let's Build Something Great Together!
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          I'm always open to discussing new opportunities and interesting
          projects.
        </Typography>
        <Button
          variant="contained"
          size="large"
          component={Link}
          to="/contact"
          sx={{ px: 4 }}
        >
          Get In Touch
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
