import { Component } from 'react';
import '../../App.css';
import './Projects.css'


class Projects extends Component {

    render() {
        return (
            <section className="projects-container">
                <h2 className='projectHeader'><u>Personal Projects</u></h2>
                <div className = 'pythonKeylogger'>
                    <iframe className = "projectVideo" src="https://www.youtube.com/embed/b5cmDXmQZsU" title="YouTube Player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div><h3 className='projectName'>Multi-Type Python Keylogger</h3>
                        <ul className = 'projectBullets'>
                            <li className = 'bullet'>Programmed in python</li>
                            <li className = 'bullet'>Reports recorded information (key logs) at a specified time interval</li>
                            <li className = 'bullet'><u>Possible report types:</u> File Creation, Email, Slack, Discord, SMS, and Skype</li>
                            <li className = 'bullet'>Environment variables protect the security of private information including bot tokens, phone numbers, emails, passwords, and channel/server ids</li>
                            <li className = 'bullet'>Employs TLS and SMTP protocols to ensure secure communication</li>
                            <li className = 'bullet'>Utilizes discord web integrations and python requests in conjunction with discord API/bots to send key logs at a post to a specific discord server and channel</li>
                            <li className = 'bullet'>Slack API/bots are used to send key logs at a post to a specific discord server and channel</li>
                            <li className = 'bullet'>Used datetime to created the name of the created files or the subject of the message in the other report types</li>
                            <li className = 'bullet'>Takes user input to determine the specific report types to be used</li>
                        </ul>
                        <h3 className='projectName'><u>Skills Required:</u></h3>
                        <button type = "button" className = "skillButtons">Python</button>
                        <button type = "button" className = "skillButtons">Discord</button>
                        <button type = "button" className = "skillButtons">Slack</button>
                        <button type = "button" className = "skillButtons">Skype</button>
                    </div>
                </div>
                <div className = 'rubberDucky'>
                    <img className = "ducky-pic" src = "images/RubberDucky.png" alt = "Rubber Ducky (Top & Bottom)"></img>
                    <div><h3 className='projectName'>Homemade Rubber Ducky (In Progress)</h3>
                        <ul className = 'projectBullets'>
                            <li className = 'bullet'>Runs scripts when plugged into a computer</li>
                            <li className = 'bullet'>Scripted are constructed using digispark and ducky languages</li>
                            <li className = 'bullet'>Components: atTiny85 Microcontroller, 8-pin Socket Adaptor, USB A Male Header, 3 Resistors, 1 Diode, Jumper Wires, and PCB Boards</li>
                            <li className = 'bullet'>Utilized Arduino UNO and Arduino IDE to flash Arduino ISP onto the microcontroller</li>
                            <li className = 'bullet'>The components were soldered together using a soldering iron and Tin Lead Rosin Core 0.8 mm solder</li>
                        </ul>
                        <h3 className='projectName'><u>Skills Required:</u></h3>
                        <button type = "button" className = "skillButtons">Digispark</button>
                        <button type = "button" className = "skillButtons">Ducky Scripts</button>
                        <button type = "button" className = "skillButtons">Soldering</button>
                        <button type = "button" className = "skillButtons">Arduino Uno</button>
                        <button type = "button" className = "skillButtons">Arduino IDE</button>
                    </div>
                </div>
            </section>
        );
    }
}

export default Projects