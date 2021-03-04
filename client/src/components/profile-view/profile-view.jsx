import React from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap'

import { MovieCard } from '../movie-card/movie-card';

import { Link } from "react-router-dom";

import './profile-view.scss'


import { BrowserRouter as Router, Route } from 'react-router-dom';

export class ProfileView extends React.Component {

  constructor() {
    super()
    this.state = {
      Username: null,
      Password: null,
      Birthday: null,
      Email: null,
      FavoriteMovies: [],
      movies: [],
    }
  }

  componentDidMount() {
    const token = localStorage.getItem('token')

    this.getUser()
    this.getMovies()
  }

  getMovies() {
    const token = localStorage.getItem('token')
    axios.get('https://myfilmm.herokuapp.com/movies', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        //passing the result to the state
        this.setState({
          movies: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  filterMovies() {
    const FavoriteMovieIds = this.state.FavoriteMovies;
    const movies = this.state.movies.filter((movie) => FavoriteMovieIds.includes(movie._id))

    return movies
  }

  getUser() {
    const token = localStorage.getItem('token')
    const username = localStorage.getItem('user')
    axios.get(`https://myfilmm.herokuapp.com/users/${username}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        console.log(response)
        this.setState({
          Username: response.data.Username,
          Password: response.data.Password,
          Email: response.data.Email,
          Birthday: response.data.Birthday,
          FavoriteMovies: response.data.FavoriteMovies,
        });
      })
      .catch(function (error) {
        console.log('no user')
      })
  }


  removeFromFavorites(MovieID) {
    const token = localStorage.getItem('token')
    const username = localStorage.getItem('user')
    const onClick = this.props
    console.log('movie removed');
    axios.delete(`https://myfilmm.herokuapp.com/users/${username}/Movies/${MovieID}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        window.location.reload(false);
        // this.props.reloadUser()
        alert('Removed from Favorites')
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { Username, Birthday, Email, FavoriteMovies } = this.state;

    if (!Username) {
      return <div>Loading</div>
    }
    return (
      <div className="profile-view">
        <div className="pv-username">
          <h2 className="retro_solid">{Username}</h2>
          <br />
          <br />
          {Email}
          <br />
          <br />
          DOB  {new Date(Birthday).toDateString()}
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <h2 className="retro_solid">Favorite Movies</h2>

        <div className="pv-fav-movies">
          <br />
          <br />
          {
            this.filterMovies().map((movie, index) => {
              return <div><MovieCard key={movie._id} movie={movie} />
                <Button className="fav-button retro_solid" onClick={() => this.removeFromFavorites(movie._id)}>Remove</Button>

              </div>


            })

          }


        </div>
        <div className="centerbutton">
          <Link to={`/`}>
            <Button className="homescreen_click" variant="link">Home Page</Button>
          </Link>
        </div>
      </div>
    )
  }
}