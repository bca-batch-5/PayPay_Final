import React from 'react'
import "../../styles/Card/card.css";
const Card6 = (props) => {
    const {cardTitle, cardSubtitle } = props;
    return (
      <div className="card-box6">
        <div className="card-inside6">
            <p className="title-card6">{cardTitle}</p>
            <h4 className="subtitle-card6">{cardSubtitle}</h4>
        </div>
      </div>
    );
}

export default Card6