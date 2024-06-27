import React from 'react'
import { IMG_LINK } from '../utils/constants'

const MoviesCard = ({posterpath}) => {
  return (
    <div className='w-36'>
        <img src={IMG_LINK+posterpath} alt="movie-card"/>
    </div>
  )
}

export default MoviesCard;
