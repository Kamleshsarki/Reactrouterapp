import React from 'react'
import MovieContext from '../../utils/MovieContext'

const MovieForm = _ => {
    return (
        <MovieContext.Consumer>
            {
                ({title,handleInputChange,handleFormSubmit})=>(
                    <form>
                    <p>
                    <label htmlFor="title">title</label>
                    <input type="text" name= "title" id ="title" value ={title}
                    onChange={handleInputChange}/>
                    </p>
                    <p>
                    <button onClick={handleFormSubmit}>Add movie</button>
                    </p>
                    </form>   
                )
            }
        </MovieContext.Consumer>     
    )
}
export default MovieForm
