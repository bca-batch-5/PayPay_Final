import React from 'react'
import '../../styles/Card/card.css'
const Card = (props) => {
    const {image, cardTitle, cardSubtitle}= props;

  return (
    <div className='card-box'>
        <div className='card-inside'>
            <div className='circle-purple'>
            <img className='image' src={image} alt="gambar" />
            </div>
            <h4 className='title-card'>{cardTitle}</h4>
            <p className='subtitle-card'>{cardSubtitle}</p>
        </div>
    </div>
  )
}

export default Card