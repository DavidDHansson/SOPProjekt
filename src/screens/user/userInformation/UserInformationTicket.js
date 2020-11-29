import React from 'react'

import { useAuth0 } from "@auth0/auth0-react";
import firebase from "../../../components/firebase/Firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

import UserInformationCell from "./UserInformationCell.js";

export default function UserInformationTicket(props) {
    return (
        <div className="user-info-wrapper">
            <FirebaseInfo />
            <Auth0Info />
        </div>
    )
}

const firebaseAuth = firebase.auth();
function FirebaseInfo() {

    const [user] = useAuthState(firebaseAuth);

    return (
        user !== null
            ? (<UserInformationCell viewModel={{
                type: "Firebase",
                name: user?.displayName ?? "",
                img: user?.photoURL ?? "",
                email: user?.email ?? "",
                id: user?.uid ?? "",
                phoneNumber: user?.phoneNumber ?? "",
                emailVerified: user?.emailVerified ?? false,
                alignment: "left",
                isLoggedIn: true
            }} />)
            : (<UserInformationCell viewModel={{
                type: "Firebase",
                name: "",
                img: "",
                email: "",
                id: "",
                phoneNumber: "",
                emailVerified: false,
                alignment: "left",
                isLoggedIn: false
            }} />)
    );
}

function Auth0Info() {

    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        <div>Loading Profile...</div>
    }
    console.log(user);
    return (
        isAuthenticated
            ? (
                <UserInformationCell viewModel={{
                    type: "Auth0",
                    name: user.nickname ?? "",
                    img: user.picture ?? "",
                    email: user.email ?? "",
                    id: user.sub ?? "",
                    phoneNumber: "",
                    emailVerified: user.email_verified ?? false,
                    alignment: "right",
                    isLoggedIn: true
                }} />
            )
            : (
                <UserInformationCell viewModel={{
                    type: "Auth0",
                    name: "",
                    img: "",
                    email: "",
                    id: "",
                    phoneNumber: "",
                    emailVerified: false,
                    alignment: "right",
                    isLoggedIn: false
                }} />
            )
    )
}