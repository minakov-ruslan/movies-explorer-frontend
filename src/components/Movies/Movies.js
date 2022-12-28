import { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });

  return (
    <>
      <Header loggedIn={true} />
      <main>
        <SearchForm />
        {isLoading ? <Preloader /> : <MoviesCardList isSavedMoviesPage={false} />}
      </main>
      <Footer />
    </>
  )
}

export default Movies;