import { useState } from "react";
import axios from "axios";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  Paper
} from "@mui/material";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    setError(false);
    try {
      const response = await axios.post("http://localhost:15000/contact", formData);
      setStatus(response.data.message);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("Failed to send message.");
      setError(true);
    }
  };

  return (
    <Box py={10} px={2} bgcolor="background.default" className="rounded-xs">
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
          Get in Touch
        </Typography>

        <Paper elevation={4} sx={{ p: 4, mt: 4 }}>
          <form onSubmit={sendMessage}>
            <TextField
              label="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Your Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={4}
              fullWidth
              required
              margin="normal"
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              fullWidth
            >
              Send Message
            </Button>

            {status && (
              <Alert
                severity={error ? "error" : "success"}
                sx={{ mt: 3 }}
              >
                {status}
              </Alert>
            )}
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default ContactForm;
