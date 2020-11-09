import React, { useEffect } from 'react'
import "./Nav.css";

import { Link } from "react-router-dom";
import smoothscroll from 'smoothscroll-polyfill';

export default function Nav() {

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const top = window.scrollY > window.screen.height;
            const nav = document.getElementById("nav");
            if (nav) {
                if (top) {
                    nav.classList.add("nav-not-extended");
                    nav.classList.remove("nav-extended");
                } else {
                    nav.classList.add("nav-extended");
                    nav.classList.remove("nav-not-extended");
                }
            }
        });

        return () => {
            document.removeEventListener("scroll", () => { });
        }
    }, []);

    function scrollToTop() {
        window.__forceSmoothScrollPolyfill__ = true;
        smoothscroll.polyfill();
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    return (
        <div className="nav-flex-wrapper" id="nav">

            <Link className="nav-main-wrapper nav-remove-link-styling" onClick={() => scrollToTop()} to="/" exact={true}>
                <div>LOGO</div>
                <div>Hjem</div>
                <div>Priser</div>
                <div>Kontakt</div>
                <div>FAQ</div>
            </Link>

            <div className="nav-user-wrapper">
                <Link className="nav-user-button nav-remove-link-styling" onClick={() => scrollToTop()} to="/user">
                    <div>Kom i gang</div>
                </Link>
            </div>

        </div>
    )
}
