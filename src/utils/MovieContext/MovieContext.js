import React,{createContext} from 'react'

const MovieContext= createContext({
    title: '',
    handleInputChange:()=>{},
    handleFormSubmit: ()=>{},
    poster:'',
    date: '',
    director:'',
    rating: '',
    synopsis:'',
    movieTitle:'',
})

export default MovieContext