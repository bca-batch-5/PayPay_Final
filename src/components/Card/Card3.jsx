import React from 'react'
import '../../styles/Card/card.css'

const Card3 = (props) => {
    const{image,cardTitle,cardSubtitle}= props;
  return (
    <div className='card-box'>
        <div className='card-inside'>
            <img className='image' src={image} alt="gambar" />
            <h4 className='title-card'>{cardTitle}</h4>
            <p className='subtitle-card'>{cardSubtitle}</p>
        </div>
    </div>
  )
}

export default Card3