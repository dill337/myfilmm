import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { MovieCard } from '../movie-card/movie-card';

import { Link } from "react-router-dom";

import './genre-view.scss'


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
    const { genre } = this.props;
    console.log(genre)



    // return (
    //   <Card className="card_style" style={{ width: '16rem' }}>
    //     <Card.Img variant="top" src={movie.ImagePath} />
    //     <Card.Body className='text-center'>
    //       {/* <Card.Title>{movie.Title}</Card.Title> */}
    //       {/* <Card.Text>{movie.Description}</Card.Text> */}
    //       <Link to={`/movies/${movie._id}`}>
    //         <Button className="title_click" variant="link">{movie.Title}</Button>
    //       </Link>
    //     </Card.Body>
    //   </Card>
    // )



    return (
      <div className="genre-view">
        <div className="centerbutton">
          <Link to={`/`}>
            <Button className="homescreen_click" variant="link">Home Page</Button>
          </Link>
        </div>
        <div className="genre-name">
          <span className="label">{genre.Name} </span>
        </div>
        <div className="genre-description">
          <span className="bio_font ">{genre.Description}</span>
        </div>
        <br />
        <br />
        <div className="render_movies">
          {
            this.filterMovies().map((movie, index) => {
              return <Link key={`${movie.Title}-${index}`} to={`/movies/${movie._id}`}>
                <MovieCard key={movie._id} movie={movie} />
              </Link>
            })
          }
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="centerbutton">
          <Link to={`/`}>
            <Button className="homescreen_click" variant="link">Home Page</Button>
          </Link>
        </div>
      </div >
    )
  }
}
