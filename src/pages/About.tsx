import React from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  Avatar,
  Chip,
} from "@mui/material";
import { Download, Code, School, Work } from "@mui/icons-material";

const About: React.FC = () => {
  const handleResumeDownload = () => {
    // Your actual S3 bucket URL
    const resumeUrl =
      "https://victorportfoliowebsite.s3.us-east-2.amazonaws.com/VictorDelRioFoces_ProResume_2025.pdf";

    // Open resume in new tab
    window.open(resumeUrl, "_blank");

    // Also trigger download
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Victor_DelRio_Resume.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "Java",
    "AWS",
    "Docker",
    "Kubernetes",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "GraphQL",
    "REST APIs",
    "Microservices",
    "CI/CD",
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Avatar
          sx={{
            width: 150,
            height: 150,
            mx: "auto",
            mb: 3,
            fontSize: "4rem",
            bgcolor: "primary.main",
          }}
        >
          VD
        </Avatar>
        <Typography variant="h3" component="h1" gutterBottom>
          About Victor Del Rio
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ maxWidth: "600px", mx: "auto" }}
        >
          Software Engineer | Problem Solver | Technology Enthusiast
        </Typography>
      </Box>

      {/* Bio Section */}
      <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <Code sx={{ mr: 2, color: "primary.main" }} />
          <Typography variant="h4" component="h2">
            My Story
          </Typography>
        </Box>
        <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
          Hello! I'm Victor Del Rio, a passionate software engineer with a love
          for creating innovative solutions and building exceptional user
          experiences. My journey in technology began with curiosity and has
          evolved into a career focused on full-stack development and modern web
          technologies.
        </Typography>
        <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
          I specialize in React, TypeScript, and Node.js, with extensive
          experience in cloud technologies like AWS. I believe in writing clean,
          maintainable code and following best practices to create scalable
          applications that make a positive impact.
        </Typography>
        <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
          When I'm not coding, you can find me exploring new technologies,
          contributing to open-source projects, or learning about the latest
          trends in software development. I'm always eager to take on new
          challenges and collaborate with talented teams to bring ideas to life.
        </Typography>
      </Paper>

      {/* Skills Section */}
      <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <School sx={{ mr: 2, color: "primary.main" }} />
          <Typography variant="h4" component="h2">
            Skills & Technologies
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {skills.map((skill, index) => (
            <Chip
              key={index}
              label={skill}
              variant="outlined"
              color="primary"
              sx={{ mb: 1 }}
            />
          ))}
        </Box>
      </Paper>

      {/* Experience Section */}
      <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <Work sx={{ mr: 2, color: "primary.main" }} />
          <Typography variant="h4" component="h2">
            Professional Focus
          </Typography>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: 3,
          }}
        >
          <Box>
            <Typography variant="h6" gutterBottom color="primary">
              Frontend Development
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Creating responsive, user-friendly interfaces with React,
              TypeScript, and modern CSS frameworks like Material-UI.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom color="primary">
              Backend Development
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Building robust APIs and microservices using Node.js, Express, and
              various database technologies.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom color="primary">
              Cloud & DevOps
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Deploying and managing applications on AWS with expertise in
              containerization and CI/CD pipelines.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom color="primary">
              Problem Solving
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Analyzing complex challenges and implementing efficient, scalable
              solutions using best practices.
            </Typography>
          </Box>
        </Box>
      </Paper>

      {/* Resume Download Section */}
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Want to Know More?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Download my complete resume to learn more about my experience and
          qualifications.
        </Typography>
        <Button
          variant="contained"
          size="large"
          startIcon={<Download />}
          onClick={handleResumeDownload}
          sx={{ px: 4 }}
        >
          Download Resume
        </Button>
      </Box>
    </Container>
  );
};

export default About;
