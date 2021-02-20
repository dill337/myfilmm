import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';


import { Link } from "react-router-dom";


export class DirectorView extends React.Component {

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
    const directorId = this.props.director._id;
    const movies = this.state.movies.filter((movie) => movie.Director.includes(directorId))

    return movies
  }


  render() {
    const { director } = this.props;
    console.log(director)
    return (
      <div className="director-view">
        <div className="director-name">
          <span className="label">{director.Name} </span>
        </div>
        <div className="director-description">
          <span className="value">{director.Description}</span>
        </div>
        <div className="director-movies">
          <span className="value">{director.Movies}</span>
        </div>
        <div className="movies-array">
          {
            this.filterMovies().map((movie, index) => {
              return <Link key={`${movie.Title}-${index}`} to={`/movies/${movie._id}`}>
                <Button variant="link">{movie.Title}</Button>
              </Link>
            })
          }
        </div>
        <Link to={`/`}>
          <Button variant="link">Home Page</Button>
        </Link>
      </div>
    )
  }
}






// import React, { Component } from 'react'
// import { Card } from 'react-bootstrap'

// export default class DirectorView extends Component {
//   render() {
//     return (
//       <div>
//         <Card className="card_style" style={{ width: '25rem' }}>
//           <Card.Body className='text-center'>
//             <Card.Title>{genre.Name}</Card.Title>
//             <Card.Text>{genre.Bio}</Card.Text>
//             <Card.Text>{genre.Birth}</Card.Text>
//             <Card.Text>{genre.Death}</Card.Text>
//             <Link to={`/genres/_id`}>
//               <Button variant="link">Genre</Button>
//             </Link>
//             <Link to={`/`}>
//               <Button variant="link">Go Back</Button>
//             </Link>
//           </Card.Body>
//         </Card>
//       </div>
//     )
//   }
// }
