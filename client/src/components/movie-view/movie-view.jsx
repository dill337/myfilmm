import React from 'react';
import { Card } from 'react-bootstrap';
import { Spring } from 'react-spring';

import './movie-view.scss'

export class MovieView extends React.Component {
  constructor() {
    super();

    this.state = {};
  }


  render() {
    const { movie, onClick } = this.props;

    if (!movie) return null;

    return (
      // <Spring
      //   from={{ opacity: 0 }}
      //   to={{ opacity: 1 }}>
      //   {props => (
      //     <div style={props}>
      <div className="movie-view">
        <img className="movie-poster" src={movie.ImagePath} />
        <div className="movie-title">
          <span className="label">{movie.Title} </span>
          <br></br>
          <span className="value">{movie.Description}</span>
        </div>
        <div className="movie-genre">
          <span className="value">{movie.Genre.Name}</span>
        </div>
        <div className="movie-director">
          <span className="value">{movie.Actors}</span>
        </div>
        <button onClick={() => onClick()}>Go Back</button>
      </div>
      //     </div>
      //   )}
      // </Spring>

    );
  }
}