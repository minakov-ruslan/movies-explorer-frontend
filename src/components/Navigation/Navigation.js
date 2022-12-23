import './Navigation.css'
import { Link, NavLink } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Navigation() {
  return (
    <>
      <nav className="nav">
        <ul className="nav__list">
          <li>
            <NavLink to="/movies" className="nav__tab" activeClassName="nav__tab_active">Фильмы</NavLink>
          </li>
          <li>
            <NavLink to="/saved-movies" className="nav__tab" activeClassName="nav__tab_active">Сохранённые фильмы</NavLink>
          </li>
        </ul>
        <Link to="/profile" className="nav__tab nav__account-tab">Аккаунт</Link>
      </nav>
      <BurgerMenu />
    </>
  )
}

export default Navigation;