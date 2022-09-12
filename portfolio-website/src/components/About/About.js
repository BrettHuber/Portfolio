import React, { Component } from 'react'
import './About.css'

//ReactDOM.render(element, document.body)

class About extends Component {
    render() {
        return (
            <div className="about-container">

                    <h1>My Resume</h1>
                    <h1 className= "skillsLabel">About Me</h1>
                    <hr></hr>
                    <p>Python | Java | HTML/CSS | JavaScript | C | C++ | SQL</p>
                    <hr></hr>
                    <p>ReactJS | Wireshark | Git/Github | VMware | Nmap | Arduino | Cisco IOS | Adobe Photoshop | Soldering Iron</p>
                    <hr></hr>
                    <p>Microsoft Windows | Kali | Ubuntu</p>
            </div>
        );
    }
}

export default Skills
