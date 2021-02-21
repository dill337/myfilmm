import React from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Route } from 'react-router-dom';

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
      movies: [],
      selectedMovie: null,
      user: null,
      registered: null,
      genres: [],
      genreMovies: [],
      directorMovies: [],
    };
  }

  //one fo the "hooks" availabe in a react component 
  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user')
      });
      this.getMovies(accessToken);
      this.getGenres(accessToken);
      this.getDirectors(accessToken);
    }

    // axios.get('https://myfilmm.herokuapp.com/movies')
    //   .then(response => {
    //     //assign the result to the state
    //     this.setState({
    //       movies: response.data
    //     });
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }

  // onMovieClick(movie) {
  //   this.setState({
  //     selectedMovie: movie
  //   });
  // }

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

  onLogOut() {
    this.props.user({})
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username
    });

    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token);
    this.getDirectors(authData.token);
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



  render() {
    //if the state isnt initialized, it will throw on runtime before data is loaded
    const { movies, selectedMovie, user, genres, directors } = this.state;

    if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

    //before the moveis have been loaded 
    if (!movies) return <div className="main-view" />;

    return (
      <div className="movie-container">
        <Container>
          <Row>
            <h1 className="main_header">MyFilmm</h1>
          </Row>
          <Router>
            <div className='main-view'>
              <Route exact path="/" render={() => {
                if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;
                return <div className="card-view"> {movies.map(m => <MovieCard key={m._id} movie={m} />)} </div>
              }} />
              <Route path="/register" render={() => <RegistrationView />} />
              <Route exact path="/movies/:_id" render={({ match }) => <MovieView movie={movies.find(movie => movie._id === match.params._id)} />} />
              <Route exact path="/genres/:genreId" render={({ match }) => <GenreView genre={genres.find(genre => genre._id === match.params.genreId)} />} />
              <Route exact path="/directors/:directorId" render={({ match }) => <DirectorView director={directors.find(director => director._id === match.params.directorId)} />} />
            </div>
          </Router>
        </Container>
      </div>

      // <div>
      //   <Mynavbar
      //     onClick={() => this.onLogOut()}
      //   />
      //   <div className="movie-container">

      //     {selectedMovie
      //       ? (<MovieView
      //         movie={selectedMovie}
      //         onClick={() => this.onBackClick()}
      //       />)
      //       : (movies.map(movie => (
      //         <MovieCard
      //           key={movie._id}
      //           movie={movie}
      //           onClick={movie => this.onMovieClick(movie)} />
      //       ))
      //       )}
      //   </div>
      // </div>
    );
  }
}




