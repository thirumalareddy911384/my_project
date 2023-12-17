import React, { Component } from 'react';
// import StudentService from '../services/StudentService';
import "./Registration.css";
class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer">
                    <span className="text-muted">All Rights Reserved CONSENSUS</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent
