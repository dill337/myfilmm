import React from 'react';

export class MovieCard extends React.Component {
  render() {
    //this is given to moviecard comonent by the outerworld 
    //which in this case is mainview as mainview is whats connected
    //to the database via the movies endpoint in the api 
    const { movie, onClick } = this.props;

    return (
      <div onClick={() => onClick(movie)} className="movie-card">{movie.Title}</div>
    );
  }
}