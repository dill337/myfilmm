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

  if (visibilityFilter !== '') {
    filteredMovies = movies.filter(m => m.Title.toLowerCase().includes(visibilityFilter.toLowerCase()));
    filteredGenres = genres.filter(m => m.Genre.Name.toLowerCase().includes(visibilityFilter.toLowerCase()));
    filteredDirectors = directors.filter(m => m.Name.toLowerCase().includes(visibilityFilter.toLowerCase()));
  }

  if (!movies) return <div className="main-view" />

  return <div className="movies-list">
    <VisibilityFilterInput visibilityFilter={visibilityFilter} />
    {filteredMovies.map(m => <MovieCard key={m._id} movie={m} />)};
    {filteredGenres.map(m => <GenreView key={m._id} genre={m} />)};
    {filteredDirectors.map(m => <DirectorView key={m._id} director={m} />)};
  </div>
}

export default connect(mapStateToProps)(MoviesList)