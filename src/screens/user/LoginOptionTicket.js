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
                <RevealButton delay={index * 400}>
                    <div className="user-ticket-start" style={{marginTop: "auto"}}>
                        {"Start"}
                    </div>
                </RevealButton>
            </div>
        </Reveal>
    )
}
