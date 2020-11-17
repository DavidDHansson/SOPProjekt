import './App.css';
import { Auth0Provider } from "@auth0/auth0-react";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home     from "./screens/home/Home.js";
import User     from "./screens/user/User.js";
import Nav      from "./components/nav/Nav.js";

function App() {
    return (
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
                </Switch>
            </Auth0Provider>
        </Router>
    );
}

export default App;
