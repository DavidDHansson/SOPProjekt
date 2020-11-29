import React, { useContext, useEffect, useState } from 'react'

import { useAuth0 } from "@auth0/auth0-react";
import firebase from "../../../components/firebase/Firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

// Context
import { UserContext } from "../../../components/userContext/userContext.js";

import UserInformationCell from "./UserInformationCell.js";

export default function UserInformationTicket(props) {
    return (
        <div className="user-info-wrapper">
            <FirebaseInfo />
            <Auth0Info />
            <CustomAuthInfo />
        </div>
    )
}

function CustomAuthInfo() {

    // TODO: GET USER
    // Try to get user with cookies and session in php
    // First check if it is set in context

    const [user, setUser] = useContext(UserContext);


    useEffect(() => {
        if(user === undefined) {
            fetch("https://4hansson.dk/api/sop/getUser.php")
            .then(data => data.json())
            .then(data => setUser(data));
        }
    }, []);


    return (
        user !== undefined
        ? <UserInformationCell viewModel={{
            type: "PHP/MySQL",
            name: user?.email ?? "",
            img: "",
            email: user?.email ?? "",
            id: user?.id ?? "",
            regDate: user?.reg_date ?? "",
            phoneNumber: "",
            emailVerified: false,
            alignment: "left",
            isLoggedIn: true
        }} />
        : <UserInformationCell viewModel={{
            type: "PHP/MySQL",
            name: "",
            img: "",
            email: "",
            id: "",
            regDate: "",
            phoneNumber: "",
            emailVerified: false,
            alignment: "left",
            isLoggedIn: false
        }} />
    );
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
                regDate: "",
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
                regDate: "",
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

    return (
        isAuthenticated
            ? (
                <UserInformationCell viewModel={{
                    type: "Auth0",
                    name: user.nickname ?? "",
                    img: user.picture ?? "",
                    email: user.email ?? "",
                    id: user.sub ?? "",
                    regDate: "",
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
                    regDate: "",
                    phoneNumber: "",
                    emailVerified: false,
                    alignment: "right",
                    isLoggedIn: false
                }} />
            )
    )
}