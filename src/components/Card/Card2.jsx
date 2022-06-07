import React from 'react'
import '../../styles/Card/card.css'

const Card2 = (props) => {
    const {cardTitle2, cardSubtitle2, number} = props;
    
  return (
    <div className='card-box2'>
        <div className='card-inside2'>
            <h4 className='title-card2'><span style={{color:"#6379F4"}}>{number}</span>{cardTitle2}</h4>
            <p className='subtitle-card2'>{cardSubtitle2}</p>
        </div>
    </div>
  )
}

export default Card2