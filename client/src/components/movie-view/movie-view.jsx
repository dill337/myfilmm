import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { Spring } from 'react-spring';

import { Link } from "react-router-dom";


import './movie-view.scss'

export class MovieView extends React.Component {
  constructor() {
    super();

    this.state = {
      genres: [],
      directors: []
    };
  }

  componentDidMount() {
    const token = localStorage.getItem('token')

    this.getGenres(token)
    this.getDirectors(token)
  }

  getGenres(token) {
    axios.get('https://myfilmm.herokuapp.com/genres', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        //assing the result to the state
        this.setState({
          genres: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  getDirectors(token) {
    axios.get('https://myfilmm.herokuapp.com/directors', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        //assing the result to the state
        this.setState({
          directors: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  filterGenres() {
    const movieId = this.props.movie._id;
    const genres = this.state.genres.filter((genre) => genre.GenreMovies.includes(movieId))

    return genres
  }

  filterDirectors() {
    const movieId = this.props.movie._id;
    const directors = this.state.directors.filter((director) => director.DirectedMovies.includes(movieId))

    return directors
  }



  render() {
    const { movie, onClick, genre, director } = this.props;
    console.log(this.state.genres)
    console.log(this.state.directors)

    if (!movie) return null;

    // return (

    //   render() {
    //     const { movie } = this.props;

    return (
      <Container>
        <div>
          <Card className="card_style" style={{ width: '25rem' }}>
            <Card.Img variant="top" src={movie.ImagePath} />
            <Card.Body className='text-center'>
              <Card.Title className="label retro_solid">{movie.Title}</Card.Title>
              <Card.Text>{movie.Description}</Card.Text>
              <br />
              <br />
              <div>
                <h5 className="retro_solid">Genre</h5>
                {
                  this.filterGenres().map((genre, index) => {
                    return <Link key={`${genre.Name}-${index}`} to={`/genres/${genre._id}`}>
                      <Button variant="link">{genre.Name}</Button>
                    </Link>
                  })
                }
              </div>
              <br />
              <br />
              <div>
                <h5 className="retro_solid">Director</h5>
                {
                  this.filterDirectors().map((director, index) => {
                    return <Link key={`${director.Name}-${index}`} to={`/directors/${director._id}`}>
                      <Button variant="link">{director.Name}</Button>
                    </Link>
                  })
                }
              </div>
              {/* <Link to={`/directors/_id`}>
              <Button variant="link">{director.name}</Button>
            </Link> */}
              <br></br>
              <br></br>
              <div className="centerbutton">
                <Link to={`/`}>
                  <Button className="homescreen_click" variant="link">Home Page</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>

      // <Spring
      //   from={{ opacity: 0 }}
      //   to={{ opacity: 1 }}>
      //   {props => (
      //     <div style={props}>

      // <div className="movie-view">
      //   <img className="movie-poster" src={movie.ImagePath} />
      //   <div className="movie-title">
      //     <span className="label">{movie.Title} </span>
      //     <br></br>
      //     <span className="value">{movie.Description}</span>
      //   </div>
      //   <div className="movie-genre">
      //     <span className="value">{movie.Genre.Name}</span>
      //   </div>
      //   <div className="movie-director">
      //     <span className="value">{movie.Actors}</span>
      //   </div>
      //   <button onClick={() => onClick()}>Go Back</button>
      // </div>
      //     </div>
      //   )}
      // </Spring>

    );
  }
}