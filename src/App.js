import './App.css';
import { Auth0Provider } from "@auth0/auth0-react";

// import { LogInButton, LogOutButton, AuthProfile } from "./auth0/Auth0.js";
import Home from "./screens/home/Home.js";
import Nav from "./components/nav/Nav.js";

function App() {
    return (
        <div className="app-flex-wrapper">
            <Nav />
            <Auth0Provider
                domain="dev-e5stgef2.eu.auth0.com"
                clientId="50PGGYOULsiDBVaLd2H55Z6Rsi1PrSjq"
                redirectUri={window.location.origin}
            >
                <Home />
            </Auth0Provider>
        </div>
    );
}

export default App;
