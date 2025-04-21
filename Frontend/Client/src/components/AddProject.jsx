import React, { useState } from 'react';
import axios from 'axios';
import './AddProject.css'
import { useNavigate } from 'react-router-dom';
import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
  Paper,
  InputLabel
} from '@mui/material';

function AddProject() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    githubLink: "",
    liveDemo: "",
    description: "",
    image: "",
    features: "",
    techStack: ""
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    if (e.target.name === "image") {
      setData({ ...data, image: e.target.files[0] });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("githubLink", data.githubLink);
      formData.append("liveDemo", data.liveDemo);
      formData.append("description", data.description);
      formData.append("image", data.image);

      const featuresArray = data.features.split(",").map(item => item.trim());
      const techStackArray = data.techStack.split(",").map(item => item.trim());

      featuresArray.forEach(feature => formData.append("features[]", feature));
      techStackArray.forEach(tech => formData.append("techStack[]", tech));

      const response = await axios.post("http://localhost:2001/api/v1/project/add", formData);
      setMessage(response.data.message);

      setData({
        name: "",
        githubLink: "",
        liveDemo: "",
        description: "",
        image: "",
        features: "",
        techStack: ""
      });

    } catch (error) {
      console.log("Something went wrong", error);
    } finally {
      setLoading(false);
      navigate('/projects')
    }
  }

  return (
    <div className='addProject-wrapper'>
    <Paper elevation={4} sx={{ width:'90%', maxWidth: 800, py: 2, px: 2, backgroundImage: 'linear-gradient(to bottom, transparent,rgb(105, 207, 235))'   }}>
      <Typography variant="h4" gutterBottom>
        Add New Project
      </Typography>

      {message && (
        <Typography variant="subtitle1" color="success.main" gutterBottom>
          {message}
        </Typography>
      )}

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Project Name"
            name="name"
            value={data.name}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            label="GitHub Link"
            name="githubLink"
            value={data.githubLink}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            label="Live Demo URL"
            name="liveDemo"
            value={data.liveDemo}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Project Description"
            name="description"
            value={data.description}
            onChange={handleChange}
            required
            multiline
            rows={3}
            fullWidth
          />

          <TextField
            label="Features"
            name="features"
            value={data.features}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Tech Stack"
            name="techStack"
            value={data.techStack}
            onChange={handleChange}
            fullWidth
          />

          <Box>
            <InputLabel>Upload Project Image</InputLabel>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              required
            />
          </Box>

          <Box sx={{ position: 'relative' }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
              fullWidth
            >
              Add Project
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
      </form>
    </Paper>
    </div>
  );
}

export default AddProject;
