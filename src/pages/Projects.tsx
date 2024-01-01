import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { Work } from "@mui/icons-material";
import ProjectCard from "../components/ProjectCard";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "Stripe API",
        "AWS",
      ],
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      demoUrl: "https://your-ecommerce-demo.vercel.app",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with modern web technologies.",
      technologies: [
        "React",
        "TypeScript",
        "Socket.io",
        "Express",
        "PostgreSQL",
      ],
      githubUrl: "https://github.com/yourusername/task-manager",
      demoUrl: "https://your-task-manager-demo.netlify.app",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities. Features location-based weather detection and interactive charts.",
      technologies: [
        "React",
        "JavaScript",
        "Chart.js",
        "OpenWeather API",
        "CSS3",
      ],
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      demoUrl: "https://your-weather-dashboard.vercel.app",
    },
    {
      title: "Social Media Analytics",
      description:
        "A data visualization platform for social media analytics with interactive dashboards, real-time metrics, and comprehensive reporting features.",
      technologies: [
        "React",
        "TypeScript",
        "D3.js",
        "Python",
        "Flask",
        "PostgreSQL",
      ],
      githubUrl: "https://github.com/yourusername/social-analytics",
    },
    {
      title: "Recipe Sharing Platform",
      description:
        "A community-driven recipe sharing platform where users can create, share, and discover recipes. Includes rating system, comments, and meal planning features.",
      technologies: ["React", "Node.js", "GraphQL", "MongoDB", "Cloudinary"],
      githubUrl: "https://github.com/yourusername/recipe-platform",
      demoUrl: "https://your-recipe-platform.herokuapp.com",
    },
    {
      title: "Personal Finance Tracker",
      description:
        "A comprehensive personal finance management application with expense tracking, budget planning, and financial goal setting capabilities.",
      technologies: [
        "React",
        "TypeScript",
        "Firebase",
        "Chart.js",
        "Material-UI",
      ],
      githubUrl: "https://github.com/yourusername/finance-tracker",
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
    </Container>
  );
};

export default Projects;
