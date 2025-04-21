import React, { useState } from 'react'
import './Contact.css'
import axios from 'axios';
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  CircularProgress,
  Stack,
  Link
} from '@mui/material';

import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon
} from '@mui/icons-material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg('');
    setErrorMsg('');
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:2001/api/v1/contact/send', formData);
      setSuccessMsg(res.data.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setErrorMsg(err.response?.data?.error || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className='contact-wrapper'>
      <div className="contact-form">
        <div className="left-contact">
          <Box sx={{ p: 3, maxWidth: 500, mx: 'auto', mt: 4 }}>
            <Typography variant="h5" gutterBottom>
              Get in Touch
            </Typography>

            <Stack spacing={2}>
              <Stack direction="row" spacing={2} alignItems="center">
                <PhoneIcon color="primary" />
                <Typography variant="body1">
                  <Link href="tel:+919876543210" underline="hover" color="inherit">
                    +91 89174 28510
                  </Link>
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2} alignItems="center">
                <EmailIcon color="primary" />
                <Typography variant="body1">
                  <Link href="mailto:ratnakar@example.com" underline="hover" color="inherit">
                    ratnakargiri973@gmail.com
                  </Link>
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2} alignItems="center">
                <LocationIcon color="primary" />
                <Typography variant="body1">
                  Bangalore, Karnataka, India
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </div>
        <div className="right-contact">
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              maxWidth: 500,
              mx: 'auto',
              p: 3,
              boxShadow: 3,
              borderRadius: 2,
              bgcolor: 'rgba(255, 255, 255, 0.5)',
              m:2
            }}
          >
            <Typography variant="h5" gutterBottom>
              Contact Me
            </Typography>

            {successMsg && <Alert severity="success" sx={{ mb: 2 }}>{successMsg}</Alert>}
            {errorMsg && <Alert severity="error" sx={{ mb: 2 }}>{errorMsg}</Alert>}

            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              required
              type="email"
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              margin="normal"
              required
              multiline
              rows={1}
            />

            <Box sx={{ mt: 2, position: 'relative' }}>
              <Button
                type="submit"
                variant="contained"
                disabled={loading}
                fullWidth
              >
                Send Message
              </Button>
              {loading && (
                <CircularProgress
                  size={24}
                  sx={{
                    color: 'primary.main',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    marginTop: '-12px',
                    marginLeft: '-12px',
                  }}
                />
              )}
            </Box>
          </Box>
        </div>
      </div>
    </div>
  )
}

export default Contact;
