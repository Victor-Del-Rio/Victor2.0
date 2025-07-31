import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Chip,
} from "@mui/material";
import { GitHub, Launch } from "@mui/icons-material";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies?: string[];
  githubUrl?: string;
  demoUrl?: string;
  onGithubClick?: () => void;
  onDemoClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies = [],
  githubUrl,
  demoUrl,
  onGithubClick,
  onDemoClick,
}) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 3,
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {description}
        </Typography>

        {technologies.length > 0 && (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mt: 2 }}>
            {technologies.map((tech, index) => (
              <Chip
                key={index}
                label={tech}
                size="small"
                variant="outlined"
                color="primary"
              />
            ))}
          </Box>
        )}
      </CardContent>

      <CardActions sx={{ justifyContent: "flex-end", p: 2 }}>
        {githubUrl && (
          <Button
            size="small"
            startIcon={<GitHub />}
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </Button>
        )}
        {!githubUrl && onGithubClick && (
          <Button size="small" startIcon={<GitHub />} onClick={onGithubClick}>
            Code
          </Button>
        )}
        {demoUrl && (
          <Button
            size="small"
            startIcon={<Launch />}
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
          >
            Demo
          </Button>
        )}
        {!demoUrl && onDemoClick && (
          <Button
            size="small"
            startIcon={<Launch />}
            onClick={onDemoClick}
            variant="contained"
          >
            Demo
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
