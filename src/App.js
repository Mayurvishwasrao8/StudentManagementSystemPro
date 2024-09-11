import React, { useState, useEffect } from 'react';
import { Container, Typography, AppBar, Toolbar } from '@mui/material';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import studentService from './services/studentService';
import './App.css';

const App = () => {
  const [students, setStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState(null);  // For editing

  // Fetch students from the backend
  const fetchStudents = async () => {
    try {
      const response = await studentService.getStudents();
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students', error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="App">
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div">
            Student Management System
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom style={{ marginTop: '20px' }}>
          Manage Your Students
        </Typography>

        <StudentForm currentStudent={currentStudent} setCurrentStudent={setCurrentStudent} fetchStudents={fetchStudents} />

        <StudentList students={students} fetchStudents={fetchStudents} setCurrentStudent={setCurrentStudent} />
      </Container>
    </div>
  );
};

export default App;
