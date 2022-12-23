import './MoviesCardList.css';
import { movies, moviesSaved } from '../../utils/constants';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ isSavedMoviesPage }) {
  return (
    <section className="movies__container">
      {isSavedMoviesPage ?
        <>
          <ul className="movies__list">
            {
              moviesSaved.map((movie) => (
                <MoviesCard key={movie.id} isSavedMoviesPage={true} />))
            }
          </ul>
          <div className="movies__expander"></div>
        </>
        :
        <>
          <ul className="movies__list">
            {
              movies.map((movie) => (
                <MoviesCard key={movie.id} isSavedMoviesPage={false} />))
            }
          </ul>
          <button type="button" className="movies__more-button">Ещё</button>
        </>
      }
    </section>
  )
}

export default MoviesCardList;