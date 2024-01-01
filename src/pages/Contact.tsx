import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Paper,
  Alert,
  Snackbar,
} from "@mui/material";
import { Send, Email, Phone, LocationOn } from "@mui/icons-material";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email format is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange =
    (field: keyof FormData) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({
        ...formData,
        [field]: event.target.value,
      });
      // Clear error when user starts typing
      if (errors[field]) {
        setErrors({
          ...errors,
          [field]: undefined,
        });
      }
    };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (validateForm()) {
      // Log form data to console as requested
      console.log("Contact Form Submission:", {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date().toISOString(),
      });

      // Show success message
      setShowSuccess(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Get In Touch
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ maxWidth: "600px", mx: "auto" }}
        >
          Have a question or want to work together? I'd love to hear from you.
          Send me a message and I'll respond as soon as possible.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "2fr 1fr" },
          gap: 6,
        }}
      >
        {/* Contact Form */}
        <Paper elevation={2} sx={{ p: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <Send sx={{ mr: 2, color: "primary.main" }} />
            <Typography variant="h4" component="h2">
              Send a Message
            </Typography>
          </Box>

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Your Name"
              variant="outlined"
              value={formData.name}
              onChange={handleInputChange("name")}
              error={!!errors.name}
              helperText={errors.name}
              sx={{ mb: 3 }}
              required
            />

            <TextField
              fullWidth
              label="Email Address"
              type="email"
              variant="outlined"
              value={formData.email}
              onChange={handleInputChange("email")}
              error={!!errors.email}
              helperText={errors.email}
              sx={{ mb: 3 }}
              required
            />

            <TextField
              fullWidth
              label="Message"
              multiline
              rows={6}
              variant="outlined"
              value={formData.message}
              onChange={handleInputChange("message")}
              error={!!errors.message}
              helperText={errors.message}
              sx={{ mb: 3 }}
              required
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              startIcon={<Send />}
              sx={{ px: 4 }}
            >
              Send Message
            </Button>
          </Box>
        </Paper>

        {/* Contact Information */}
        <Box>
          <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
            <Typography variant="h5" gutterBottom>
              Contact Information
            </Typography>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 3 }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Email sx={{ mr: 2, color: "primary.main" }} />
                <Box>
                  <Typography variant="body1" fontWeight="medium">
                    Email
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    vicjdrf@gmail.com
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Phone sx={{ mr: 2, color: "primary.main" }} />
                <Box>
                  <Typography variant="body1" fontWeight="medium">
                    Phone
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    +1 (563) 499-0593
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <LocationOn sx={{ mr: 2, color: "primary.main" }} />
                <Box>
                  <Typography variant="body1" fontWeight="medium">
                    Location
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Jersey City, NJ
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>

          <Paper elevation={2} sx={{ p: 4 }}>
            <Typography variant="h6" gutterBottom>
              Let's Connect
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              I'm always interested in hearing about new opportunities,
              collaborating on exciting projects, or simply having a
              conversation about technology and software development.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Feel free to reach out through the contact form or connect with me
              on social media. I look forward to hearing from you!
            </Typography>
          </Paper>
        </Box>
      </Box>

      {/* Success Snackbar */}
      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={handleCloseSuccess}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSuccess}
          severity="success"
          sx={{ width: "100%" }}
        >
          Message sent successfully! I'll get back to you soon.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;
