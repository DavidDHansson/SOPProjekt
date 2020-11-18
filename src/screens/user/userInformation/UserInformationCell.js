import React from 'react'

export default function UserInformationCell(props) {


    if (props.viewModel.alignment === "left") {
        return (
            <div className="user-info-cell-wrapper">
                <Cell viewModel={props.viewModel} />
                <div></div>
            </div>
        )
    } else if (props.viewModel.alignment === "right") {
        return (
            <div className="user-info-cell-wrapper">
                <div></div>
                <Cell viewModel={props.viewModel} />
            </div>
        )
    } else {
        return <></>;
    }
}

function Cell(props) {
    const { name, img, email, id, phoneNumber, emailVerified, type, isLoggedIn } = props.viewModel;

    return (
        isLoggedIn
            ? (<div className="user-info-cell-active">
                <h1>{type}</h1>
                <img src={img} />
                <div><span>Nickname: </span><span>{name}</span></div>
                <div><span>Email: </span><span>{email}</span></div>
                <div><span>Id: </span><span>{id}</span></div>
                {phoneNumber && (<div><span>Id: </span><span>{phoneNumber}</span></div>)}
                <div><span>Is Email Verifed: </span><span>{emailVerified ? "Yes" : "No"}</span></div>
            </div>)
            : (<div className="user-info-cell-active">
                <h1>{type}</h1>
                <div><span>{`${type} is not configured yet, check it out at the top of the page`}</span></div>
            </div>)
    );
}