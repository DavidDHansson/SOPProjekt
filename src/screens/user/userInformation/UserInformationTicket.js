import React from 'react'

import { useAuth0 } from "@auth0/auth0-react";
import firebase from "../../../components/firebase/Firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

export default function UserInformationTicket(props) {
    return (
        <div className="user-info-wrapper">
            <div className="user-info-ticket">
                <FirebaseInfo />
            </div>
            <div className="user-info-ticket">
                <Auth0Info />
            </div>
        </div>
    )
}

const firebaseAuth = firebase.auth();
function FirebaseInfo() {

    const [user] = useAuthState(firebaseAuth);

    return (
        <div>
            FIREBASE
            {user?.uid ?? ""}
            {user?.photoURL ?? ""}
            {user?.displayName ?? ""}
            {user?.phoneNumber ?? ""}
            {user?.email ?? ""}
        </div>
    );
}

function Auth0Info() {

    const { user, isAuthenticated, isLoading } = useAuth0();

    if(isLoading) {
        <div>Loading Profile...</div>
    }

    return (
        isAuthenticated
        ? (
            <div>
                <img src={user.picture} alt={user.name}/>
                <span>{user.name}</span>
                <span>{user.email}</span>
            </div>
        )
        : (
            <div>
                <span>Please log in or sign up</span>
            </div>
        )
    )
}