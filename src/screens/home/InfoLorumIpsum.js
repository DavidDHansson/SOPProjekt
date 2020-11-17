import React from 'react'
import svg1 from "./assets/undraw_security_o890.svg";
import svg2 from "./assets/undraw_authentication_fsn5.svg";

export default function InfoLorumIpsum() {
    return (
        <div className="home-info-main-wrapper home-info-color5">
            <div className="home-info-wrapper">
                <img src={svg1} className="home-info-image" />
                <div className="home-info-text-wrapper">
                    <p className="home-info-title">Lorem ipsum dolor</p>
                    <p className="home-info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non nisi et augue bibendum lobortis nec et diam. In blandit sagittis turpis, nec molestie lorem auctor eu. Morbi fermentum mi libero, sit amet elementum nisl volutpat at. Donec vehicula enim vitae enim placerat eleifend.</p>
                </div>
            </div>
            <div className="home-info-wrapper">
                <div className="home-info-text-wrapper">
                    <p className="home-info-title">Morbi eleifend lacus</p>
                    <p className="home-info-text">Morbi eleifend lacus quis sapien gravida tincidunt vestibulum ut ligula. Vivamus quis ex tellus. Mauris elementum nisi sit amet erat scelerisque, hendrerit ullamcorper odio tempor. Cras a mauris nisl. Ut sagittis aliquet dui sed congue. Nam aliquam eget orci non ornare. Fusce nec turpis elementum, mattis nisi id, porttitor ipsum. Nunc semper sodales mi mollis fringilla. Pellentesque in odio at lorem imperdiet bibendum ac ac nulla.</p>
                </div>
                <img src={svg2} className="home-info-image" />
            </div>
        </div>
    )
}
