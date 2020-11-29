import React from 'react'
import "./DHAuth.css";

export default function DHAuth() {

    function login(e) {
        e.preventDefault();
    }

    return (
        <div className="dhauth-main-wrapper">
            <div className="dhauth-ticket-wrapper">
                <div className="dhauth-title">Custom Auth</div>
                <form onSubmit={login} className="dhauth-form-wrapper">
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <input type="submit" className="dhauth-submit" value="Login!"/>
                    <span>Sign up</span>
                </form>
            </div>
        </div>
    )
}
