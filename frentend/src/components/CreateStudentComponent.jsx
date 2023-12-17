// import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import StudentService from '../services/StudentService';
import "./Registration.css";
class CreateStudentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // step 2
            id: (this.props.match == undefined ? "" : this.props.match.params.id),
            First_name: '',
            Last_name: '',
            Roll_no: '',
            User: '',
            Date_of_Birth: '',
            Department: '',
            Phone_number: '',
            Email_Id: '',
            password: '',
            Conform_Password: '',
            Gender: ''
        }
        this.changeFirst_nameHandler = this.changeFirst_nameHandler.bind(this);
        this.changeLast_nameHandler = this.changeLast_nameHandler.bind(this);
        this.changeRoll_noHandler = this.changeRoll_noHandler.bind(this);
        this.changeUserHandler = this.changeUserHandler.bind(this);
        this.changeDate_of_BirthHandler = this.changeDate_of_BirthHandler.bind(this);
        this.changeDepartmentHandler = this.changeDepartmentHandler.bind(this);
        this.changePhone_numberHandler = this.changePhone_numberHandler.bind(this);
        this.changeEmail_IdHandler = this.changeEmail_IdHandler.bind(this);
        this.changepasswordHandler = this.changepasswordHandler.bind(this);
        this.changeConform_PasswordHandler = this.changeConform_PasswordHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.saveOrUpdatestudent = this.saveOrUpdatestudent.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            StudentService.getStudentById(this.state.id).then( (res) =>{
                let student = res.data;
                this.setState({First_name: student.First_name,
                    Last_name: student.Last_name,
                    Roll_no:student.Roll_no,
                    User:student.User,
                    Date_of_Birth:student.Date_of_Birth,
                    Department:student.Department,
                    Phone_number:student.Phone_number,
                    Email_Id : student.Email_Id,
                    password:student.password,
                    Conform_Password:student.Conform_Password,
                    Gender:student.Gender,
                });
            });
        }        
    }
    saveOrUpdatestudent = (e) => {
        e.preventDefault();
        let student = {First_name: this.state.First_name, Last_name: this.state.Last_name, Roll_no: this.state.Roll_no, User: this.state.User, Date_of_Birth: this.state.Date_of_Birth, Department: this.state.Department, Phone_number: this.state.Phone_number, Email_Id: this.state.Email_Id, password: this.state.password, Conform_Password: this.state.Conform_Password, Gender: this.state.Gender};
        console.log('student => ' + JSON.stringify(student));

        // step 5
        if(this.state.id === '_add'){
            StudentService.createStudent(student).then(res =>{
                this.props.history.push('/register');
            });
        }else{
            StudentService.updateStudent(student, this.state.id).then( res => {
                this.props.history.push('/register');
            });
        }
    }
    
    changeFirst_nameHandler= (event) => {
        this.setState({First_name: event.target.value});
    }

    changeLast_nameHandler= (event) => {
        this.setState({Last_name: event.target.value});
    }

    changeRoll_noHandler= (event) => {
        this.setState({Roll_no: event.target.value});
    }
    changeUserHandler= (event) => {
        this.setState({User: event.target.value});
    }
    changeDate_of_BirthHandler= (event) => {
        this.setState({Date_of_Birth: event.target.value});
    }
    changeDepartmentHandler= (event) => {
        this.setState({Department: event.target.value});
    }
    changePhone_numberHandler= (event) => {
        this.setState({Phone_number: event.target.value});
    }
    changeEmail_IdHandler= (event) => {
        this.setState({Email_Id: event.target.value});
    }
    changepasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }
    changeConform_PasswordHandler= (event) => {
        this.setState({Conform_Password: event.target.value});
    }
    changeGenderHandler= (event) => {
        this.setState({Gender: event.target.value});
    }

    cancel(){
        this.props.history.push('/register');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add student</h3>
        }else{
            return <h3 className="text-center">Update student</h3>
        }
    }
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
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateStudentComponent