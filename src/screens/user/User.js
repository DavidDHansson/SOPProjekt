import React from 'react'
import "./User.css";

import LoginOptionTicket from "./LoginOptionTicket.js";

import UserInformation from "./userInformation/UserInformation.js";
import Footer from "../../components/footer/Footer.js";

export default function User() {

    const tickets = [
        { type: "firebase", title: "Firebase", message: "Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more." },
        { type: "auth0", title: "Auth0", message: "Authenticate users across all of your applications with your own custom, secure, and standards-based unified login. Supports logins with providers like Facebook, Apple, Github and more with multi-factor authentication" },
        { type: "custom", title: "PHP/MySQL", message: "Skræddersyet API'er og database til administration af brugere. Der er fokus på sikkerhed, kryptering, brugervenlighed og hastighed" }
    ]

    return (
        <div className="user-wrapper">
            <div className="user-options-wrapper">
                <div className="user-options-ticket-wrapper">
                {tickets.map(ticket => <LoginOptionTicket viewModel={ticket}/>)}
                </div>
            </div>
            <Divider />
            <UserInformation />

            <Footer />
        </div>
    )
}

function Divider() {
    return (
        <div class="custom-shape-divider-bottom-1605630478">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"></path>
            </svg>
        </div>
    );
}