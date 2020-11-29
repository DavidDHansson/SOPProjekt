import React, { useState, useContext } from 'react'
import "./DHAuth.css";

// Context
import { UserContext } from "../../components/userContext/userContext.js";

export default function DHAuth() {

    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [user, setUser] = useContext(UserContext);

    function login(e) {
        e.preventDefault();
        
        fetch("https://4hansson.dk/api/sop/login.php", {
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then(res => res.json())
            .then(data => {
                setUser(data);
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="dhauth-main-wrapper">
            <div className="dhauth-ticket-wrapper">
                <div className="dhauth-title">Custom Auth</div>
                <form onSubmit={login} className="dhauth-form-wrapper">
                    <input type="email" placeholder="Email" onInput={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" onInput={e => setPassword(e.target.value)} />
                    <input type="submit" className="dhauth-submit" value="Login!" />
                    <span>Sign up</span>
                </form>
            </div>
        </div>
    )
}
