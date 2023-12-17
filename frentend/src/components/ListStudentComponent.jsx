import React, { Component } from 'react';
import StudentService from '../services/StudentService';
import "./Registration.css";

class ListStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                students: []
        }
        this.addStudent = this.addStudent.bind(this);
        this.editStudent = this.editStudent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    deleteStudent(id){
        StudentService.deleteStudent(id).then( res => {
            this.setState({students: this.state.students.filter(Student => Student.id !== id)});
        });
    }
    viewStudent(id){
        this.props.history.push(`/view-Student/${id}`);
    }
    editStudent(id){
        this.props.history.push(`/add-Student/${id}`);
    }

    componentDidMount(){
        StudentService.getStudents().then((res) => {
            this.setState({ students: res.data});
        });
    }

    addStudent(){
        this.props.history.push('/add-Student/_add');
        this.state.students.map(
            Student => 
            <tr key = {Student.id}>
                 <td> {Student.First_name} </td>   
                 <td> {Student.Last_name}</td>
                 <td> {Student.Roll_no}</td>
                 <td> {Student.User}</td>
                 <td> {Student.Date_of_Birth}</td>
                 <td> {Student.Department}</td>
                 <td> {Student.Phone_number}</td>
                 <td> {Student.Email_Id}</td>
                 <td> {Student.password}</td>
                 <td> {Student.Conform_Password}</td>
                 <td> {Student.Gender}</td>
                 </tr>
    )}

    render() {
        return (
            <div>
            <br></br>
               <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            
                            </div>
                        </div>
                        <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> First Name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control" 
                                            value={this.state.First_name} onChange={this.changeFirst_nameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Last Name: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control" 
                                            value={this.state.Last_name} onChange={this.changeLast_nameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Roll_no: </label>
                                        <input placeholder="Roll_no" name="roll_no" className="form-control" 
                                            value={this.state.Roll_no} onChange={this.changeRoll_noHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> User: </label>
                                        <input placeholder="User" name="user" className="form-control" 
                                            value={this.state.User} onChange={this.changeUserHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Date of Birth: </label>
                                        <input placeholder="Date of Birth" name="date of birth" className="form-control" 
                                            value={this.state.Date_of_Birth} onChange={this.changeDate_of_BirthHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Department: </label>
                                        <input placeholder="Department" name="department" className="form-control" 
                                            value={this.state.Department} onChange={this.changeDepartmentHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Phone number: </label>
                                        <input placeholder="Phone number" name="phone number" className="form-control" 
                                            value={this.state.Phone_number} onChange={this.changePhone_numberHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Email Id: </label>
                                        <input placeholder="Email Address" name="email Id" className="form-control" 
                                            value={this.state.Email_Id} onChange={this.changeEmail_IdHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Password: </label>
                                        <input placeholder="Password" name="password" className="form-control" 
                                            value={this.state.password} onChange={this.changepasswordHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Conform Password: </label>
                                        <input placeholder="Conform Password" name="conform password" className="form-control" 
                                            value={this.state.Conform_Password} onChange={this.changeConform_PasswordHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Gender: </label>
                                        <input placeholder="Gender" name="gender" className="form-control" 
                                            value={this.state.Gender} onChange={this.changeGenderHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdatestudent}>Save</button>
                                    {/* <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button> */}
                                </form>
                    </div>

               </div>
        </div>
        )
    }
}

export default ListStudentComponent