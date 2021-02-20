import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';


import { Link } from "react-router-dom";


export class GenreView extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    const token = localStorage.getItem('token')

    this.getMovies(token)
  }

  getMovies(token) {
    axios.get('https://myfilmm.herokuapp.com/movies', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        //assing the result to the state
        this.setState({
          movies: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  filterMovies() {
    const genreId = this.props.genre._id;
    const movies = this.state.movies.filter((movie) => movie.Genre.includes(genreId))

    return movies
  }


  render() {
    const { genre, onClick } = this.props;
    console.log(genre)






    return (
      <div className="genre-view">
        <div className="genre-name">
          <span className="label">{genre.Name} </span>
        </div>
        <div className="genre-description">
          <span className="value">{genre.Description}</span>
        </div>
        <div className="genre-movies">
          <span className="value">{genre.Movies}</span>
        </div>
        <div className="movies-array">
          {
            this.filterMovies().map((movie, index) => {
              return <Link key={`${movie.Title}-${index}`} to={`/movies/${movie._id}`}>
                <Button variant="link">{movie.Title}</Button>
              </Link>
            })
          }
        </div>
        <Link to={`/`}>
          <Button variant="link">Home Screen</Button>
        </Link>
      </div>


    )
  }
}
