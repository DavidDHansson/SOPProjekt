import React from 'react'
import "./Home.css";
import backgroundImage from "./back.jpg";

export default function Home() {
    return (
        <div className="home-flex-wrapper">
            <img src={backgroundImage} className="home-background-image" alt="Security background"/>
            <div style={{backgroundColor: "#BFC7D9", height: "80vh"}}></div>
            <div style={{backgroundColor: "#8694A6", height: "80vh"}}></div>
            <div style={{backgroundColor: "#6D7B8C", height: "80vh"}}></div>
        </div>
    )
}
