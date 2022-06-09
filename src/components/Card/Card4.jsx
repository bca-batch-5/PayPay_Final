import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Card/card.css";
const Card4 = (props) => {
  const { image, cardTitle, cardSubtitle,link } = props;
  return (
    <div className="card-box4">
        <Link to={link} style={{textDecoration:'none', color:"black", cursor:'pointer'}} >
      <div className="card-inside4">
        <img className="image4" src={image} alt="gambar" />
        <div style={{marginLeft:'20px'}}>
          <h4 className="title-card4">{cardTitle}</h4>
          <p className="subtitle-card4">{cardSubtitle}</p>
        </div>
      </div>
        </Link>
    </div>
  );
};

export default Card4;
