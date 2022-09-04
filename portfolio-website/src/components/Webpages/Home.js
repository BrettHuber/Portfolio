import { Component } from 'react';
import '../../App.css';
import VideoSection from '../VideoSection'

class Home extends Component {
    render() {
        return (
        <div>
            <div className="banner-container">
                <div className="text-center">
                    <h1 className= "homeName">Brett Huber</h1>
                    <h4 className="homeAttributes">Student, Programmer, Security Analyst</h4>
                </div>
            </div>
        </div>  
        );
    }
}

export default Home