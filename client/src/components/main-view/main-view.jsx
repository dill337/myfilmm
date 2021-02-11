import React from 'react';
import axios from 'axios';


import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { RegistrationView } from '../registration-view/registration-view';
import { GenreView } from '../genre-view/genre-view';
import { DirectorView } from '../director-view/director-view';
import Mynavbar from '../navbar/navbar';

import './main-view.scss';

import { Container, Row, Col } from 'react-bootstrap';

export class MainView extends React.Component {
  constructor() {
    //call the superclass constructor so react can initialize it
    super();

    //initialize the stae to an empty object so we can destructure it laterr 
    this.state = {
      movies: null,
      selectedMovie: null,
      user: null,
      registered: null,
    };
  }

  //one fo the "hooks" availabe in a react component 
  componentDidMount() {
    axios.get('https://myfilmm.herokuapp.com/movies')
      .then(response => {
        //assign the result to the state
        this.setState({
          movies: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onMovieClick(movie) {
    this.setState({
      selectedMovie: movie
    });
  }

  onBackClick() {
    this.setState({
      selectedMovie: null
    });
  }

  onRegistered(registered) {
    this.setState({
      registered
    })
  }

  onLogOut(user) {
    this.setState({
      user: null
    })
  }

  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username
    });

    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token);
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



  render() {
    //if the state isnt initialized, it will throw on runtime before data is loaded
    const { movies, selectedMovie, user } = this.state;

    if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

    //before the moveis have been loaded 
    if (!movies) return <div className="main-view" />;

    return (
      <div>
        <Mynavbar
          onClick={() => this.onLogOut()}
        />
        <div className="movie-container">

          {selectedMovie
            ? (<MovieView
              movie={selectedMovie}
              onClick={() => this.onBackClick()}
            />)
            : (movies.map(movie => (
              <MovieCard
                key={movie._id}
                movie={movie}
                onClick={movie => this.onMovieClick(movie)} />
            ))
            )}
        </div>
      </div>
    );
  }
}




