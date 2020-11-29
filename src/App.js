import './App.css';
import { Auth0Provider } from "@auth0/auth0-react";

// Router
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

// Screens
import Home from "./screens/home/Home.js";
import User from "./screens/user/User.js";
import DHAuth from "./screens/DHAuth/DHAuth.js";
import Nav from "./components/nav/Nav.js";

// Context
import { UserProvider } from "./components/userContext/userContext.js";

function App() {
    return (
        <UserProvider>
            <Router>
                <Auth0Provider
                    domain="dev-e5stgef2.eu.auth0.com"
                    clientId="50PGGYOULsiDBVaLd2H55Z6Rsi1PrSjq"
                    redirectUri={window.location.origin}
                >
                    <Nav />
                    <Switch>
                        <Route path="/" exact={true} component={Home} />
                        <Route path="/user" component={User} />
                        <Route path="/customauth" component={DHAuth} />
                    </Switch>
                </Auth0Provider>
            </Router>
        </UserProvider>
    );
}

export default App;
