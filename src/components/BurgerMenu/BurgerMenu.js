import './BurgerMenu.css';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

function BurgerMenu() {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleOpenMenuClick = () => {
    setMenuOpen(true);
  }

  const handleCloseMenuClick = () => {
    setMenuOpen(false);
  }

  return (
    <nav className="menu">
      <button type="button" className="menu__burger-button" onClick={handleOpenMenuClick}></button>
      <div className={`menu__container ${isMenuOpen ? "menu__container_open" : ""}`}>
        <button type="button" className="menu__close-button" onClick={handleCloseMenuClick}></button>
        <ul className="menu__list">
          <li className="menu__item">
            <NavLink exact to="/" className="menu__tab" activeClassName="menu__tab_active">Главная</NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="/movies" className="menu__tab" activeClassName="menu__tab_active">Фильмы</NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="/saved-movies" className="menu__tab" activeClassName="menu__tab_active">Сохранённые фильмы</NavLink>
          </li>
        </ul>
        <Link to="/profile" className=" menu__tab menu__account-tab">Аккаунт</Link>
      </div>
    </nav>
  )
}

export default BurgerMenu;