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
import { Download, Fingerprint, School, Work } from "@mui/icons-material";

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
    "MongoDB",
    "PostgreSQL",
    "REST APIs",
    "Microservices",
    "CI/CD",
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Avatar
          src="https://victorportfoliowebsite.s3.us-east-2.amazonaws.com/ProfilePic.PNG"
          alt="Victor Del Rio"
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
          About Me
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ maxWidth: "600px", mx: "auto" }}
        >
          Software Engineer | Problem Solver | Human Being
        </Typography>
      </Box>

      {/* Bio Section */}
      <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <Fingerprint sx={{ mr: 2, color: "primary.main" }} />
          <Typography variant="h4" component="h2">
            My Story
          </Typography>
        </Box>
        <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
          Hi! I'm Victor, a nerd that values learning, community, and fun over
          everything. I've moved around a lot in my life, having lived in the
          UK, Spain, Uzbekistan, Brazil and the US. Thanks to this multicultural
          upbringing I can speak English, Spanish and Portuguese fluently and
          hold my own in French and Russian. It also taught me to be adaptable,
          open-minded and to value diversity. I believe this is also what gives
          me a unique perspective on the world and how to approach problems.
        </Typography>
        <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
          I have a plethora of hobbies, including traveling, meeting new people,
          and learning new facts or skills. These may be new tech, like builing
          small robots and smart home devices in arduino, or random things like
          how to solve a new rubiks cube or juggling. I also love being outdoors
          and being active. I swam competitively from the age of 7 through
          college which also enabled my love for other water sports like
          surfing, sailing, and scuba diving. I also love animation and comics
          and hope to write my own story one day.
        </Typography>
        <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
          Whether it's work related or not, feel free to reach out!
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
        <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
          I'm a passionate software engineer with an obsession for the bleeding
          edge, innovation, and collaborating with others. My journey in
          technology began with a fascination for robotics and software and has
          evolved into a career focused on full-stack development and modern web
          technologies.
        </Typography>
        <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
          Profesionally I specialize in React, TypeScript, Node.js, and Python,
          with extensive experience in cloud technologies like AWS. I also like
          to tinker with AI, robots, and smart home technologies.
        </Typography>
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
              Designing & creating responsive, user-friendly interfaces with
              React, TypeScript, and modern CSS frameworks like Material-UI.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom color="primary">
              Backend Development
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Building robust APIs and microservices using Python, Node.js,
              Express, and various database & ETL technologies.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom color="primary">
              Cybersecurity & Risk Management
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Implementing secure coding practices, vulnerability assessments,
              and risk mitigation strategies to protect applications and
              infrastructure.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom color="primary">
              Cloud & Automation
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Architecting scalable cloud solutions on AWS & Azure with
              automated infrastructure provisioning, monitoring, and deployment
              pipelines.
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
