import React from 'react'
import "./User.css";

import * as Reveal from 'react-reveal/Fade';
import * as RevealButton from 'react-reveal/Jump';

export default function LoginOptionTicket(props) {

    const { viewModel, index } = props;

    return (
        <Reveal duration={1500}>
            <div className="user-ticket-wrapper">
                <div className="user-ticket-title">
                    {viewModel?.title ?? ""}
                </div>
                <div className="user-ticket-desc">
                    {viewModel?.message ?? ""}
                </div>
                <Bottom index={index}/>
            </div>
        </Reveal>
    )
}

function Bottom(props) {
    return (
        <div style={{ marginTop: "auto" }} className="user-ticket-bottom-wrapper">
            <RevealButton delay={props.index * 400}>
                <div className="user-ticket-button">
                    {"Start"}
                </div>
            </RevealButton>
            <span className="user-ticket-logout">
                {"Log ud"}
            </span>
        </div>
    );
}