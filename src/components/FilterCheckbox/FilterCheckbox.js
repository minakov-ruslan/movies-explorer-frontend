import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <label className="checkbox">
      <input type="checkbox" name="short-film" id="short-film" className="checkbox__input" />
      <div className="checkbox__switch-container">
        <div className="checkbox__switch"></div>
      </div>
      Короткометражки
    </label>
  )
}

export default FilterCheckbox;