import React from 'react'

import "./User.css";

import { useAuth0 } from "@auth0/auth0-react";

import * as Reveal from 'react-reveal/Fade';
import * as RevealButton from 'react-reveal/Jump';

export default function LoginOptionTicket(props) {

    const { viewModel, index } = props;

    return (
        <Reveal duration={1500}>
            <div className="user-ticket-wrapper">
                <div className="user-ticket-title">
                    {viewModel?.title ?? ""}
                </div>
                <div className="user-ticket-desc">
                    {viewModel?.message ?? ""}
                </div>
                <Bottom index={index} type={viewModel.type}/>
            </div>
        </Reveal>
    )
}

function Bottom(props) {

    const { isAuthenticated: auth0IsAuthenticated, loginWithRedirect: auth0LoginWithRedirect, logout: auth0Logout } = useAuth0();

    function login() {
        switch(props.type) {
            case "auth0":
                auth0LoginWithRedirect();
                break;
            case "firebase":
                break;
            case "custom":
                break;
            default:
                break;
        }
    }
    
    function logout() {
        switch(props.type) {
            case "auth0":
                auth0Logout();
                break;
            case "firebase":
                break;
            case "custom":
                break;
            default:
                break;
        }
    }

    function isUserAuthenticated() {
        switch(props.type) {
            case "auth0":
                return auth0IsAuthenticated
            case "firebase":
                break;
            case "custom":
                break;
            default:
                break;
        }
    }

    return (
        <div style={{ marginTop: "auto" }} className="user-ticket-bottom-wrapper">
            <RevealButton delay={props.index * 400}>
                <div className="user-ticket-button" onClick={() => login() }>
                    {"Start"}
                </div>
            </RevealButton>
            {isUserAuthenticated() && (<span className="user-ticket-logout" onClick={() => logout() }>
                {"Log ud"}
            </span>)}
        </div>
    );
}