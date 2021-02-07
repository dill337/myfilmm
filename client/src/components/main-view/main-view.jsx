import React from 'react';
import axios from 'axios';

export class MainView extends React.Component {
  constructor() {
    //call the superclass constructor so react can initialize it
    super();

    //initialize the stae to an empty object so we can destructure it laterr 
    this.state = {};
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


  render() {
    //if the state isnt initialized, it will throw on runtime before data is loaded
    const { movies } = this.state;

    //before the moveis have been loaded 
    if (!movies) return <div className="main-view" />;

    return (
      <div className="main-view">
        { movies.map(movie => (
          <div className="movie-card" key={movie._id}>{movie.Title}</div>
        ))}
      </div>
    );
  }
}