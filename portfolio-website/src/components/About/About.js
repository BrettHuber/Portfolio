import React, { Component } from 'react'
import './About.css'

//ReactDOM.render(element, document.body)

class About extends Component {
    render() {
        return (
            <div className="about-container">
                    <h1 className= "aboutLabel">About Me</h1>
                    <img className = "photo" src = "images/Web-Portrait.jpg"></img>
                    <h3 className= "skillsLabel">Blurb</h3>
                    <p className = 'blurb'>
                    Welcome to my website! So here is some information about me. My name is Brett Huber. I'm a 2nd/3rd year Computing Security student on the BS/MS track at Rochester Institute of Technology. 
                    I have been involved in computer science since I was in middle school. I was accepted into Passaic County Technical Vocational School and completed a computer science concentration for all four years. 
                    I have a deep love of many different computing fields, especially security. </p>
                    <h3 className= "skillsLabel">Hobbies</h3>
                    <ul>
                        <li>Biking (Road & Mountain)</li>
                        <li>Boxing</li>
                        <li>Camping</li>
                        <li>Soccer</li>
                        <li>Volleyball</li>
                    </ul>
                    <h3 className= "skillsLabel">Skills</h3>
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

export default About
