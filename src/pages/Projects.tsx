import React, { useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import { Work } from "@mui/icons-material";
import ProjectCard from "../components/ProjectCard";
import SnackbarNotification from "../components/SnackbarNotification";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  onGithubClick?: () => void;
  onDemoClick?: () => void;
}

const Projects: React.FC = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleComingSoon = () => {
    setShowComingSoon(true);
  };

  const handleCloseComingSoon = () => {
    setShowComingSoon(false);
  };

  const projects: Project[] = [
    {
      title: "TRVLHIPPO",
      description:
        "A full-stack travel booking/blog application built with React & Node.js. Mostly a flex of my frontend styling skills.",
      technologies: ["React", "JavaScript", "Node.js", "AWS"],
      githubUrl: "https://github.com/Victor-Del-Rio/TRVLHIPPO/tree/master",
      demoUrl: "https://master.d33zmq53lv4li5.amplifyapp.com/",
    },
    {
      title: "Rendezvous",
      description:
        "Rendezvous is an offline-first friend-finding React Native app that uses GPS, Bluetooth, and compass sensors to guide you to friends or group meet-up points — even when you have no signal or data. ",
      technologies: [
        "React Native",
        "TypeScript",
        "DynamoDB",
        "GPS",
        "Compass",
        "Bluetooth Low Energy",
      ],
      githubUrl: "https://github.com/Victor-Del-Rio/Rendezvous",
      onDemoClick: handleComingSoon,
    },
    {
      title: "Personal Expense Tracker",
      description:
        "A comprehensive personal expenses management application with expense tracking and budget planning.",
      technologies: [
        "React",
        "TypeScript",
        "Firebase",
        "Chart.js",
        "Material-UI",
      ],
      githubUrl: "https://github.com/Victor-Del-Rio/reactPract",
      demoUrl: "https://main.d1mz2h3n4h5175.amplifyapp.com/",
    },
    {
      title: "iQueue",
      description:
        "iQueue doubles as a queue management system for restaurants and public eventsthat allows customers to capacity and join a queue. It also allows restaurants to manage their queue and customers. People can also host private events.",
      technologies: [
        "React",
        "JavaScript",
        "Chart.js",
        "OpenMap API",
        "CSS3",
        "DynamoDB",
      ],
      onGithubClick: handleComingSoon,
      onDemoClick: handleComingSoon,
    },
    {
      title: "Bang4Buck",
      description:
        "Find the product you're looking for and get the best price. This is a full-stack web application that allows users to search for products and get the best price. It uses the Google Shopping API to get the best price for a product.",
      technologies: ["React", "TypeScript", "Python", "Flask", "PostgreSQL"],
      onGithubClick: handleComingSoon,
    },
    {
      title: "OutHouse",
      description:
        "A community-driven public restroom sharing platform where users can create, share, and discover public restrooms. Includes a map UI, rating system and comments.",
      technologies: ["React", "Node.js", "GraphQL", "MongoDB", "Cloudinary"],
      onGithubClick: handleComingSoon,
      onDemoClick: handleComingSoon,
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Work sx={{ fontSize: 40, color: "primary.main", mr: 2 }} />
          <Typography variant="h3" component="h1">
            My Projects
          </Typography>
        </Box>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ maxWidth: "600px", mx: "auto" }}
        >
          A collection of projects showcasing my skills in full-stack
          development, modern web technologies, and problem-solving abilities.
        </Typography>
      </Box>

      {/* Projects Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          },
          gap: 4,
          mb: 6,
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubUrl={project.githubUrl}
            demoUrl={project.demoUrl}
            onGithubClick={project.onGithubClick}
            onDemoClick={project.onDemoClick}
          />
        ))}
      </Box>

      {/* Footer Message */}
      <Box sx={{ textAlign: "center", mt: 8 }}>
        <Typography variant="h5" gutterBottom>
          More Projects Coming Soon!
        </Typography>
        <Typography variant="body1" color="text.secondary">
          I'm constantly working on new projects and exploring emerging
          technologies. Check back regularly to see my latest work, or visit my
          GitHub profile for the most up-to-date repositories.
        </Typography>
      </Box>

      {/* Coming Soon Notification */}
      <SnackbarNotification
        open={showComingSoon}
        onClose={handleCloseComingSoon}
        message="Coming Soon!"
        severity="info"
      />
    </Container>
  );
};

export default Projects;
