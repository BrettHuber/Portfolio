import React from "react";
import './VideoSection.css';
import '../App';

function VideoSection () {
    return (
        <div className = "home-video">
            <video src = "/videos/Code_flythough_loop_01_Videvo.mov" autoPlay loop muted ></video>
            <div className="box">
                <h1>Portfolio</h1>
                <p>By Brett Huber</p>
            </div>
        </div>
    )
}

export default VideoSection