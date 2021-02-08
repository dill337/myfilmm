import React from 'react';
import axios from 'axios';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {
  constructor() {
    //call the superclass constructor so react can initialize it
    super();

    //initialize the stae to an empty object so we can destructure it laterr 
    this.state = {
      movies: null,
      selectedMovie: null
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

  onBackClick(movie) {
    this.setState({
      selectedMovie: null
    });
  }

  render() {
    //if the state isnt initialized, it will throw on runtime before data is loaded
    const { movies, selectedMovie } = this.state;

    //before the moveis have been loaded 
    if (!movies) return <div className="main-view" />;

    return (
      <div className="main-view">
        {selectedMovie
          ? (<MovieView
            movie={selectedMovie}
            onClick={button => this.onBackClick()}
          />)
          : (movies.map(movie => (
            <MovieCard
              key={movie._id}
              movie={movie}
              onClick={movie => this.onMovieClick(movie)} />
          ))
          )}
      </div>
    );
  }
}




