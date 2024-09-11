import React, { useState, useEffect } from 'react';
import { TextField, Button, Paper, Grid } from '@mui/material';
import studentService from '../services/studentService';

const StudentForm = ({ currentStudent, setCurrentStudent, fetchStudents }) => {
  const [student, setStudent] = useState({ name: '', age: '', course: '' });

  // Load data into form if editing
  useEffect(() => {
    if (currentStudent) {
      setStudent(currentStudent);
    } else {
      setStudent({ name: '', age: '', course: '' });
    }
  }, [currentStudent]);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  // Handle form submission for add/update
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentStudent) {
      // Update existing student
      await studentService.updateStudent(student);
      setCurrentStudent(null);  // Clear form after update
    } else {
      // Add new student
      await studentService.addStudent(student);
    }
    fetchStudents();  // Refresh the student list
    setStudent({ name: '', age: '', course: '' });  // Clear form
  };

  return (
    <Paper style={{ padding: '20px', marginBottom: '20px' }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Student Name"
              name="name"
              value={student.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Age"
              name="age"
              value={student.age}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Course"
              name="course"
              value={student.course}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              {currentStudent ? 'Update Student' : 'Add Student'}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default StudentForm;
