import React from 'react'

import "./User.css";

import { useAuth0 } from "@auth0/auth0-react";

import firebase from "../../components/firebase/Firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import "firebase/auth";

import * as Reveal from 'react-reveal/Fade';
import * as RevealButton from 'react-reveal/Jump';

export default function LoginOptionTicket(props) {

    const { viewModel, index } = props;

    switch (viewModel.type) {
        case "firebase":
            return <FirebaseTicket viewModel={viewModel} index={index} />
        case "auth0":
            return <Auth0Ticket viewModel={viewModel} index={index} />
        default:
            return <></>
    }
}

const firebaseAuth = firebase.auth();
function FirebaseTicket(props) {

    const { viewModel, index } = props;
    const [user] = useAuthState(firebaseAuth);

    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebaseAuth.signInWithPopup(provider);
    }

    return (
        <Reveal duration={1500}>
            <div className="user-ticket-wrapper">
                <div className="user-ticket-title">
                    {viewModel?.title ?? ""}
                </div>
                <div className="user-ticket-desc">
                    {viewModel?.message ?? ""}
                </div>
                <div style={{ marginTop: "auto" }} className="user-ticket-bottom-wrapper">

                    {!user
                        ? <RevealButton delay={index * 300}>
                            <div className="user-ticket-button" onClick={() => signInWithGoogle()}>
                                {"Start"}
                            </div>
                        </RevealButton>
                        : <div className="user-ticket-button user-ticket-button-disabled">
                            {"Start"}
                        </div>}

                    {user && (<span className="user-ticket-logout" onClick={() => firebaseAuth.signOut()}>
                        {"Log ud"}
                    </span>)}

                </div>
            </div>
        </Reveal>
    );
}

function Auth0Ticket(props) {

    const { viewModel, index } = props;
    const { isAuthenticated, loginWithRedirect, logout, user, isLoading } = useAuth0();

    return (
        <Reveal duration={1500}>
            <div className="user-ticket-wrapper">
                <div className="user-ticket-title">
                    {viewModel?.title ?? ""}
                </div>
                <div className="user-ticket-desc">
                    {viewModel?.message ?? ""}
                </div>
                {isLoading
                    ? <div>Loading</div>
                    : (<div style={{ marginTop: "auto" }} className="user-ticket-bottom-wrapper">

                        {!isAuthenticated
                            ? <RevealButton delay={index * 300}>
                                <div className="user-ticket-button" onClick={() => loginWithRedirect()}>
                                    {"Start"}
                                </div>
                            </RevealButton>
                            : <div className="user-ticket-button user-ticket-button-disabled">
                                {"Start"}
                            </div>}

                        {isAuthenticated && (<span className="user-ticket-logout" onClick={() => logout()}>
                            {"Log ud"}
                        </span>)}

                    </div>)
                }
            </div>
        </Reveal>
    );
}