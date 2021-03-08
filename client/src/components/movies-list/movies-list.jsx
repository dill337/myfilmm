import React from 'react';
import { connect } from 'react-redux';

import './movies-list.scss';

import VisibilityFilterInput from '../visibility-filter-input/visibility-filter-input'
import { MovieCard } from '../movie-card/movie-card';
import { DirectorView } from '../director-view/director-view';
import { GenreView } from '../genre-view/genre-view';

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  return { visibilityFilter };
};

function MoviesList(props) {
  const { movies, directors, genres, visibilityFilter } = props;
  let filteredMovies = movies;
  let filteredGenres = genres;
  let filteredDirectors = directors;
  console.log(props)

  if (visibilityFilter !== '') {
    const filterGenres = genres.filter(g => g.Name.toLowerCase().includes(visibilityFilter.toLowerCase()))
    const filterDirectors = directors.filter(d => d.Name.toLowerCase().includes(visibilityFilter.toLowerCase()))
    const genreMovieIds = []
    const directorMovieIds = []
    filterGenres.forEach((genre) => {
      genre.GenreMovies.forEach((id) => {
        genreMovieIds.push(id)
      })
    })
    filterDirectors.forEach((director) => {
      director.DirectedMovies.forEach((id) => {
        directorMovieIds.push(id)
      })
    })
    filteredMovies = movies.filter(m => {

      return m.Title.toLowerCase().includes(visibilityFilter.toLowerCase())
        || genreMovieIds.includes(m._id)
        || directorMovieIds.includes(m._id)
      // || m.Director.Name.toLowerCase().includes(visibilityFilter.toLowerCase())
    });
    // filteredGenres = movies.filter(m => );
    // filteredDirectors = directors.filter(m => );
  }

  if (!movies) return <div className="main-view" />

  return <div>
    <VisibilityFilterInput visibilityFilter={visibilityFilter} />
    <div className="movies-list">
      {filteredMovies.map(m => <MovieCard key={m._id} movie={m} />)};
     </div>
    {/* {filteredGenres.map(m => <MovieCard key={m._id} genre={m} />)}; */}
    {/* {filteredDirectors.map(m => <DirectorView key={m._id} director={m} />)}; */}
  </div>
}

export default connect(mapStateToProps)(MoviesList)