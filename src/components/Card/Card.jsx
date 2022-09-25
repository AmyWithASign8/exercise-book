import React from 'react'
import './Card.scss'
import noPhoto from '../../assets/img/noPhoto.jpg'

function Card({imageCard, descriptionCard, namingCard}) {
  return (
    <div className='Card'>
        {imageCard 
         ? <img src={imageCard} width="520px"/>
         :<img src={noPhoto} width="520px"/>
        }
        <h1>{namingCard}</h1>
        <p>{descriptionCard}</p>
        <button>Открыть</button>
    </div>
  )
}

export default Card