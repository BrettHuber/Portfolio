import React, { Component } from 'react'
import './Resume.css'

//ReactDOM.render(element, document.body)

class Resume extends Component {
    render() {
        return (
            <div className="resume-container">
                    <h1>My Resume</h1>
                    <iframe src="Brett_Huber_Resume.pdf"></iframe>
            </div>
        );
    }
}

export default Resume
