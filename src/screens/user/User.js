import React from 'react'
import "./User.css";

import LoginOptionTicket from "./LoginOptionTicket.js";
import Footer from "../../components/footer/Footer.js";

export default function User() {

    const tickets = [
        { type: "firebase", title: "Firebase Authentication", message: "Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more." },
        { type: "auth0", title: "Auth0", message: "Authenticate users across all of your applications with your own custom, secure, and standards-based unified login. Supports logins with providers like Facebook, Apple, Github and more with multi-factor authentication" },
        { type: "custom", title: "PHP/MySQL", message: "Skræddersyet API'er og database til administration af brugere. Der er fokus på sikkerhed, kryptering, brugervenlighed og hastighed" }
    ]

    return (
        <div className="user-wrapper">
            <div className="user-options-wrapper">
                <div className="user-options-ticket-wrapper">
                {tickets.map((ticket, index) => <LoginOptionTicket viewModel={ticket} index={index}/>)}
                </div>
            </div>
            <div style={{backgroundColor: "#8694A6", height: "120vh"}}></div>
            <Footer />
        </div>
    )
}