import React, { useEffects } from 'react'
import "./Nav.css";

export default function Nav() {

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const top = window.scrollY > window.screen.height;
            const nav = document.getElementById("nav");
            if (nav) {
                if(!top) {
                    nav.classList.add("nav-extended");
                    nav.classList.remove("nav-not-extended");
                    console.log("open");
                } else {
                    nav.classList.add("nav-not-extended");
                    nav.classList.remove("nav-extended");
                    console.log("close");
                }
            }
        });

        return () => {
            document.removeEventListener("scroll", () => { });
        }
    }, []);

    return (
        <div className="nav-flex-wrapper" id="nav">

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
