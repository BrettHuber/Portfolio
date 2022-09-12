import React, { Component } from 'react'
import './About.css'

//ReactDOM.render(element, document.body)

class About extends Component {
    render() {
        return (
            <div className="about-container">
                    <h1 className= "aboutLabel">About Me</h1>
                    
                    <img className = "photo" src = "images/Web-Portrait.jpg"></img>
                    
                    <div className = 'blurbDiv'><h3 className= "skillsLabel">Blurb</h3>
                        <p className = 'blurb'>
                            Welcome to my website! So here is some information about me. My name is Brett Huber. I'm a 2nd/3rd year Computing Security student on the BS/MS track at Rochester Institute of Technology. 
                            I have been involved in computer science since I was in middle school. 
                            I was accepted into Passaic County Technical Vocational School and completed a computer science concentration for four years, covering a wide variety of topic including but not limited to databases, scripts, and web development. 
                            Due to a deep love of many different computing fields, especially security, I have completed and worked on many projects using a wide variety of different skills such as software and web development, different operating systems, security protocols, and more.
                            While I love technology, I am also big fan of the outdoors and nature. Spending time in nature provides me with a cathartic experience that clears my mind.
                            Overall, I am a technology and outdoor oriented person with a significant drive for learning.
                        </p>
                    </div>
                    
                    <h3 className= "skillsLabel">Hobbies</h3>
                        <hr></hr>
                        <p className = "list">Programming | Security Scripting | Projects | Web Development | Soldering</p>
                        <hr></hr>
                        <p className = "list">Biking (Road & Mountain) | Boxing | Camping | Fishing | Climbing (Rock & Ice) | Fencing | Soccer | Curling | Volleyball</p>
                    
                    <br></br>
                    <br></br>

                    <img className = "act-images" src = "images/act-soccer.png" alt = "Soccer Icon"></img>
                    <img className = "act-images" src = "images/act-boxing.png" alt = "Boxing Icon"></img>
                    <img className = "act-images" src = "images/act-laptop.png" alt = "Laptop Icon"></img>
                    <img className = "act-images" src = "images/act-fish.png" alt = "Fish Icon"></img>
                    <img className = "act-images" src = "images/act-bicycle.png" alt = "Bicycle Icon"></img>

                    <br></br>
                    <br></br>

                    <div><h3 className= "skillsLabel">Skills</h3>
                        <hr></hr>
                        <p className = "list">Python | Java | HTML/CSS | JavaScript | C | C++ | SQL</p>
                        <hr></hr>
                        <p className = "list">ReactJS | Wireshark | Git/Github | VMware | Nmap | Arduino | Cisco IOS | Adobe Photoshop | Soldering Iron</p>
                        <hr></hr>
                        <p className = "list">Microsoft Windows | Kali | Ubuntu</p>
                    </div>
            </div>
        );
    }
}

export default About
