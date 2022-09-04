import { Component } from 'react';
import '../../App.css';
import './Home.css'


class Home extends Component {
    render() {
        return (
        
            <div className="home-container">
                <div className="text-center">
                    <br></br>
                    <img src =  'images/Circle-Headshot.png' className = "headshot" alt = "Brett"></img>
                    <h1 className= "homeName">Brett Huber</h1>
                    <h4 className="homeAttributes">Student, Programmer, & Security Analyst</h4>
                </div>
            </div>
         
        );
    }
}

export default Home