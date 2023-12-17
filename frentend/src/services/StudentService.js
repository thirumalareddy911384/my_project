import axios from 'axios';
const STUDENT_API_BASE_URL = "http://localhost:8082/api/v1";

class StudentService {

    getStudents(){
        return axios.get(`${STUDENT_API_BASE_URL}/register`);
    } 

    createStudent(student){
        return axios.post(`${STUDENT_API_BASE_URL}/register`, student);
    }

    getStudentById(studentId){
        return axios.get(`${STUDENT_API_BASE_URL}/register` + '/' + studentId);
    }

    updateStudent(student, studentId){
        return axios.put(`${STUDENT_API_BASE_URL}/register` + '/' + studentId, student);
    }

    deleteStudent(studentId){
        return axios.delete(`${STUDENT_API_BASE_URL}/register` + '/' + studentId);
    }
}
export default new StudentService()