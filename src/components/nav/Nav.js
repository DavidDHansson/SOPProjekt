import React from 'react'
import "./Nav.css";

export default function Nav() {
    return (
        <div className="nav-flex-wrapper">

            <div className="nav-main-wrapper">
                <div>LOGO</div>
                <div>Hjem</div>
                <div>Priser</div>
                <div>Kontakt</div>
                <div>FAQ</div>
            </div>

            <div className="nav-user-wrapper">
                <div>Kom i gang</div>
            </div>

        </div>
    )
}
