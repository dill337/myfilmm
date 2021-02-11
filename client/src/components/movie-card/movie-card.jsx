import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Container } from 'react-bootstrap';
import { Spring } from 'react-spring'

import './movie-card.scss'


export class MovieCard extends React.Component {
  render() {
    //this is given to moviecard comonent by the outerworld 
    //which in this case is mainview as mainview is whats connected
    //to the database via the movies endpoint in the api 
    const { movie, onClick } = this.props;

    return (

      <Card className="card_style" style={{ width: '20rem' }} >

        <Card.Body className='text-center'>
          <Card.Img className='movie_poster' variant="top" src={movie.ImagePath} />
          {/* <Card.Body> */}
          <Button onClick={() => onClick(movie)} className="title_click" variant="link">{movie.Title}</Button>
          {/* <Card.Text>{movie.Description}</Card.Text> */}
          {/* <Button onClick={() => onClick(movie)} variant="link">{movie.Title}</Button> */}
          {/* </Card.Body> */}
          {/* </Card.Header> */}

          <br />

        </Card.Body>
      </Card>

    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
};