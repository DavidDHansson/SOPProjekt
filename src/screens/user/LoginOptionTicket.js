import React, { useEffect, useContext } from 'react'
import "./User.css";

import { useAuth0 } from "@auth0/auth0-react";
import firebase from "../../components/firebase/Firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import "firebase/auth";
import { UserContext } from "../../components/userContext/userContext.js";

import * as Reveal from 'react-reveal/Fade';
import { useHistory } from "react-router-dom";

export default function LoginOptionTicket(props) {

    const { viewModel } = props;

    switch (viewModel.type) {
        case "firebase":
            return <FirebaseTicket viewModel={viewModel} />
        case "auth0":
            return <Auth0Ticket viewModel={viewModel} />
        case "custom":
            return <CustomAuthTicket viewModel={viewModel} />
        default:
            return <></>
    }
}

function CustomAuthTicket(props) {

    const history = useHistory();
    const { viewModel } = props;
    const [user, setUser] = useContext(UserContext);

    useEffect(() => {
        if (user === undefined) {
            fetch("https://4hansson.dk/api/sop/getUser.php")
                .then(data => data.json())
                .then(data => {
                    if (data.response === "success") {
                        setUser(data)
                    } else {
                        setUser(undefined);
                    }
                });
        }
    }, []);

    function logOut() {
        setUser(undefined);
        fetch("https://4hansson.dk/api/sop/logout.php")
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

                    {user === undefined
                        ? <div className="user-ticket-button user-ticket-button-enabled" onClick={() => history.push("/customauth")}>
                            {"Start"}
                        </div>
                        : <div className="user-ticket-button user-ticket-button-disabled">
                            {"Start"}
                        </div>}

                    {user !== undefined && (<span className="user-ticket-logout" onClick={() => logOut()}>
                        {"Log ud"}
                    </span>)}

                </div>
            </div>
        </Reveal>
    );
}

const firebaseAuth = firebase.auth();
function FirebaseTicket(props) {

    const { viewModel } = props;
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

                    {user === null
                        ? <div className="user-ticket-button user-ticket-button-enabled" onClick={() => signInWithGoogle()}>
                            {"Start"}
                        </div>
                        : <div className="user-ticket-button user-ticket-button-disabled">
                            {"Start"}
                        </div>}

                    {user !== null && (<span className="user-ticket-logout" onClick={() => firebaseAuth.signOut()}>
                        {"Log ud"}
                    </span>)}

                </div>
            </div>
        </Reveal>
    );
}

function Auth0Ticket(props) {

    const { viewModel } = props;
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
                            ? <div className="user-ticket-button user-ticket-button-enabled" onClick={() => loginWithRedirect({ redirectUri: window.location.hostname === "localhost" ? "http://localhost:3000/user" : "https://4hansson.dk/sop/#/user" })}>
                                {"Start"}
                            </div>

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