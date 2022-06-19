import React from 'react'
import "../../styles/Card/card.css";
const Card5 = (props) => {
    const { image, cardTitle, cardSubtitle } = props;
    return (
      <div className="card-box4">
        <div className="card-inside4">
          <img className="image4" src={image} alt="gambar" />
          <div style={{marginLeft:'20px'}}>
            <h4 className="title-car4">{cardTitle}</h4>
            <p className="subtitle-card4">{cardSubtitle}</p>
          </div>
        </div>
      </div>
    );
}

export default Card5