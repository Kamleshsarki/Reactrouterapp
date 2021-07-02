import React, { Component , } from 'react'
import MovieForm from '../../components/MovieForm'
import MovieDisplay from '../../components/MovieDisplay'
import MovieContext from '../../utils/MovieContext'
import axios from 'axios'

class Movie extends Component {
    state = {
        title: '',
        
        handleInputChange: event=>{
        this.setState({[event.target.name]:event.target.value})
        },
        handleFormSubmit:event=>{
            event.preventDefault()
          axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${this.state.title}`)
          .then(({data})=>{
              console.log(data)
              this.setState({
                  poster:data.Poster,
                  date:data.Released,
                  director: data.Director,
                  rating:data.Rated,
                  synopsis: data.plot,
                  movieTitle:data.Title,
                  title:''
              })
          })
          .catch(e=>console.log(e))
        },
        
    }

    render() {
        return (
            <MovieContext.Provider value= {this.state}>
                <MovieForm />
                <MovieDisplay/>
            </MovieContext.Provider>
                
           
        );
    }
}
export default Movie
