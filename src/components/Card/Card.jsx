import React from 'react'
import './Card.scss'
import noPhoto from '../../assets/img/noPhoto.jpg';
import {Link} from 'react-router-dom'

function Card({imageCard, descriptionCard, namingCard, cardRoute}) {

  let imageCardUrl

  if (imageCard){
    imageCardUrl = `/static/media/${imageCard}`;
  }

  console.log(noPhoto)
  return (
    <div className='Card'>
        {imageCard 
         ? <img src={imageCardUrl} width="520px"/>
         :<img src={noPhoto} width="520px"/>
        }
        <h1>{namingCard}</h1>
        <p>{descriptionCard}</p>
        <Link to={cardRoute}>
          <button>Открыть</button>
        </Link>
    </div>
  )
}

export default Card