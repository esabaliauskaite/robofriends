import React, { Fragment } from "react";
import './Card.scss';

const Card = ({ name, email, id }) => {
    return (
        <div className="background dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
            <Fragment>
                <h2>{name}</h2>
                <p>{email}</p>
            </Fragment>
        </div>
    );
}

export default Card;