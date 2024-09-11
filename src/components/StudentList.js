import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import studentService from '../services/studentService';

const StudentList = ({ students, fetchStudents, setCurrentStudent }) => {
  // Handle student delete
  const handleDelete = async (id) => {
    await studentService.deleteStudent(id);
    fetchStudents();  // Refresh list after delete
  };

  return (
    <TableContainer component={Paper} style={{ marginTop: '20px' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Course</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.id}</TableCell>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.age}</TableCell>
              <TableCell>{student.course}</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => setCurrentStudent(student)}
                  style={{ marginRight: '10px' }}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleDelete(student.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentList;
