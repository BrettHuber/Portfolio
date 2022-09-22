import { Component } from 'react';
import '../../App.css';
import './Home.css'


class Home extends Component {
    downloadClick = () => {
        fetch('Brett_Huber_Resume.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Brett_Huber_Resume.pdf';
                alink.click();
            })
            
        })
    }

    render() {
        return (
            <section className="home-container">
                {/* <div className ='home-center'> */}
                    <img src =  'images/headshot-bw.png' className = "headshot" alt = "Brett"></img>
                    <h1 className= "homeName">Hey. I'm Brett Huber</h1>
                    <h4 className="homeAttributes">Computing Security Student - Programmer - Aspiring Security Analyst / Penetration Tester</h4>
                    <button className = "resumeButton" onClick = {this.downloadClick}>Download Resume</button>
                {/* </div> */}
            </section>
        );
    }
}

export default Home