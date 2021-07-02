import React from 'react'
import MovieContext from '../../utils/MovieContext'

const MovieDisplay = _ => {
    return (
        <MovieContext.Consumer>
            {
             ({movieTitle,poster,date,rating,synopsis,director}) =>(
             <div>
            <p>{movieTitle}</p>
            
              <img src={poster} alt={movieTitle} />
            
            <p>Director: {director}</p>
            <p>Rating: {rating}</p>
            <p>Date: {date}</p>
            <p>Synopsis: {synopsis}</p>
             </div>
            )
             }
        </MovieContext.Consumer>  
    )
}
export default MovieDisplay
