import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { styled } from '@mui/material/styles';

const BackgroundContainer = styled('div')({
  backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/004/941/847/original/cosmetic-background-for-product-branding-and-packaging-presentation-geometry-form-circle-molding-on-podium-stage-with-shadow-of-leaf-background-design-eps10-vector.jpg')`, // Replace with your actual background image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const FormContainer = styled('div')({
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  padding: '40px',
  borderRadius: '8px',
  width: '500px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    phone: '',
    gmail: '',
    course: '',
    dob: '',
    address: ''
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2)); 
  };

 
  const handleCancel = () => {
    setFormData({
      name: '',
      gender: '',
      phone: '',
      gmail: '',
      course: '',
      dob: '',
      address: ''
    });
  };

  return (
    <BackgroundContainer>
      <FormContainer>
        <Container>
          <Typography variant="h4" gutterBottom align="center">
            Student Registration Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {/* Name Field */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Grid>

              {/* Gender Field */}
              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel>Gender</InputLabel>
                  <Select
                    label="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* Phone Number Field */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Grid>

              {/* Course Field */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                />
              </Grid>
              
               {/* gmail Field */}
               <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email Id"
                  name="emailid"
                  value={formData.emailid}
                  onChange={handleChange}
                  required
                />
              </Grid>

              {/* DOB Field */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Date of Birth"
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  required
                />
              </Grid>

              {/* Address Field */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </Grid>

              {/* Submit and Cancel Buttons */}
              <Grid item xs={6}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  variant="outlined"
                  color="secondary"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </FormContainer>
    </BackgroundContainer>
  );
};

export default StudentForm;