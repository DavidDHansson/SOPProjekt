import React, { useState } from 'react'
import "./DHAuth.css";

export default function DHAuth() {

    const [password, setPassword] = useState();
    const [email, setEmail] = useState();

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
                console.log(data);
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
