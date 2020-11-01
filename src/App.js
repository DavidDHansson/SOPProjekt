import './App.css';
import { Auth0Provider } from "@auth0/auth0-react";

import { LogInButton, LogOutButton, AuthProfile } from "./auth0/Auth0.js";

function App() {
    return (
        <Auth0Provider
            domain="dev-e5stgef2.eu.auth0.com"
            clientId="50PGGYOULsiDBVaLd2H55Z6Rsi1PrSjq"
            redirectUri={window.location.origin}
        >
            <div className="app-center">
                <AuthProfile />
                <LogInButton />
                <LogOutButton />
            </div>
        </Auth0Provider>
    );
}

export default App;
