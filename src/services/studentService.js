import axios from 'axios';

const API_URL = 'http://localhost:8080/api/students';

const getStudents = () => {
  return axios.get(API_URL);
};

const addStudent = (student) => {
  return axios.post(API_URL, student);
};

const updateStudent = (student) => {
  return axios.put(`${API_URL}/${student.name}`, student);
};

const deleteStudent = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

const studentService =  {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent
};
export default studentService;
