import React, { Component } from 'react';
import StudentService from '../services/StudentService';
import "./Registration.css";
import { Link } from 'react-router-dom';

class ViewStudentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            student: {}
        }
    }

    componentDidMount(){
        StudentService.getStudentById(this.state.id).then( res => {
            this.setState({student: res.data});
        })
    }

    render() {
        return (
            <div>
             <img src="./assets/Gates-Institute-logo.png" alt='...' />
            <h1 >REGISTRATION FORM</h1>
    <form>
        <table>
            <tr><td>First Name:</td>
            value={ this.state.student.First_name } onChange={this.changeFirst_nameHandler}
                <td><input type="text" placeholder="First Name" First Name="" required/></td>
            </tr>
            <tr><td>Last Name:</td>
            value= { this.state.student.Last_name } onChange={this.changeLast_nameHandler}
                <td><input type="text" placeholder="Last Name" Last Name="" required/></td>
            </tr>
            <tr><td>Roll_NO:</td>
            value={ this.state.student.Roll_no } onChange={this.changeRoll_noHandler}
                <td><input type="text" placeholder="Roll_no" Roll_no="" required/></td>
            </tr>
            <tr><td>User</td>
            value={ this.state.student.User } onChange={this.changeUserHandler}
                <td><select>
                    <option>Select One</option>
                    <option>Admin</option>
                    <option>Student</option></select></td>
            </tr>
            <tr><td>Date Of Birth:</td>
            value={ this.state.student.Date_of_Birth } onChange={this.changeDate_of_BirthHandler}
                    <td><input type="date"/></td>
            </tr>
            <tr><td>Department:</td>
            value={ this.state.student.department } onChange={this.changeDepartmentHandler}
                <td>
                    <select>
                        <option>Select One</option>
                        <option>CSE</option>
                        <option>CSE-AI</option>
                        <option>CSE-DS</option>
                        <option>ECE</option>
                        <option>EEE</option>
                        <option>CIVIL</option>
                        <option>MECH</option>
                        <option>MBA</option>
                        <option>MCA</option>
                    </select>
                </td>
            </tr>   
            <tr><td>Phone Number:</td>
            value={ this.state.student.Phone_number } onChange={this.changePhone_numberHandler}
                <td><input type="Number" placeholder="Number" number="" required/></td>
            </tr>
            <tr><td>Email Id:</td>
            value={ this.state.student.Email_Id } onChange={this.changeEmail_IdHandler}
                <td><input type="email" placeholder="email" required/></td>
            </tr>
            <tr><td>Password:</td>
            value={ this.state.student.password } onChange={this.changepasswordHandler}
                <td><input type="Password" placeholder="Password" required/></td>
            </tr>
            <tr><td>Confirm Password:</td>
            value={ this.state.student.Conform_Password } onChange={this.changeConform_PasswordHandler}

                <td><input type="password" placeholder="Password"/></td>
            </tr>
            <tr><td>Gender:</td>
            value={ this.state.student.Gender } onChange={this.changeGenderHandler}
                <td>
                    <input type="radio" name="gender"/>Male
                    <input type="radio" name="gender"/>Female
                </td>
            </tr>
            <td><Link to="/Login"><button type="Submit">Submit</button></Link></td>
        </table>
    </form>
    {/* <Link to='/'>Click to go to our Home</Link> */}
        </div>
        )
    }
}export default ViewStudentComponent