import { Component } from 'react';
import '../../App.css';
import './Home.css'


class Home extends Component {
    render() {
        return (
            <div className="home-container">
                {/* <div className="text-center"> */}
                    <img src =  'images/headshot-bw.png' className = "headshot" alt = "Brett"></img>
                    <h1 className= "homeName">Hey. I'm Brett Huber</h1>
                    <h4 className="homeAttributes">Computing Security Student - Programmer - Security Analyst</h4>
                    <p></p>
                {/* </div> */}
            </div>
         
        );
    }
}

export default Home