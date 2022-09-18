import React, { Component } from 'react'
import './Resume.css'

//ReactDOM.render(element, document.body)

class Resume extends Component {
    render() {
        return (
            <section className="resume-container">
                    <h1><u>My Resume</u></h1>
                    <iframe title = "Resume Frame" className = "resumeFrame" src="Brett_Huber_Resume.pdf"></iframe>
            </section>
        );
    }
}

export default Resume
