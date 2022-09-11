import React, { Component } from 'react'
import './Skills.css'

//ReactDOM.render(element, document.body)

class Skills extends Component {
    render() {
        return (
            <div className="skills-container">
                    <h1 className= "skillLabel">Skills</h1>
                    <hr></hr>
                    <p>Python | Java | HTML/CSS | JavaScript | C | C++ | SQL</p>
                    <hr></hr>
                    <p>ReactJS | Wireshark | Git/Github | VMware | Nmap | Arduino | Cisco IOS | Adobe Photoshop</p>
                    <hr></hr>
                    <p>Microsoft Windows | Kali | Ubuntu</p>
            </div>
        );
    }
}

export default Skills
