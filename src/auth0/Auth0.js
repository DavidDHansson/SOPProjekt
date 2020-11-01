import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

export function AuthProfile() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if(isLoading) {
        <div>Loading Profile...</div>
    }

    return (
        isAuthenticated
        ? (
            <div className="auth-user-wrapper">
                <img src={user.picture} alt={user.name}/>
                <span>{user.name}</span>
                <span>{user.email}</span>
            </div>
        )
        : (
            <div className="auth-user-wrapper">
                <span>Please log in or sign up</span>
            </div>
        )
    )
}

export function LogInButton() {
    const { loginWithRedirect } = useAuth0();

    return (
        <button onClick={() => loginWithRedirect()}>
            Log In / Sign Up
        </button>
    );
}

export function LogOutButton() {
    const { logout } = useAuth0();

    return (
        <button onClick={() => logout()}>
            Log Out
        </button>
    )
}