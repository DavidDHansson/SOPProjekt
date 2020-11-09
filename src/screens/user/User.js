import React from 'react'
import "./User.css";
import { LogInButton, LogOutButton, AuthProfile } from "./auth0/Auth0.js";

export default function User() {
    return (
        <div className="user-wrapper">
            <div className="user-options-wrapper">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}