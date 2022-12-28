import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className="search">
      <div className="search__container">
        <form className="search-form">
          <label className="search-form__label">
            <input
              id="movie"
              type="text"
              placeholder="Фильм"
              className="search-form__input"
              required
            />
          </label>
          <div className="search-form__container">
            <div className="search-form__button-container">
              <button type="submit" className="search-form__sumbit-button"></button>
            </div>
          </div>
        </form>
        <FilterCheckbox />
      </div>
    </section>
  )
}
export default SearchForm;