import './MoviesCard.css';
import { useState } from 'react';
import cover from '../../images/movie_image_1.jpg';

function MoviesCard({ isSavedMoviesPage }) {

  const [savedMovie, setSavedMovie] = useState(false);

  const handleSaveMovieClick = () => {
    setSavedMovie(true);
  }

  return (
    <li className="movie">
      <div className="movie__cover-container">
        {isSavedMoviesPage ?
          <button type="button" className="movie__delete-button"></button>
          :
          <button
            type="button"
            className={`movie__save-button ${savedMovie ? "movie__save-button_active" : ""}`}
            onClick={handleSaveMovieClick}>
            Сохранить
          </button>
        }
        <img src={cover} alt="Обложка фильма" className="movie__image" />
      </div>
      <div className="movie__about-container">
        <h3 className="movie__title">Gimme Danger: История Игги и The Stooges</h3>
        <p className="movie__duration">1ч 17м</p>
      </div>
    </li>
  )
}

export default MoviesCard;