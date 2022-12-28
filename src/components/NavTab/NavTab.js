import { Link } from 'react-router-dom';
import './NavTab.css';

function NavTab() {
  return (
    <div className="nav-links">
      <Link className="nav-links__link nav-links__link_signup" to="signup">Регистрация</Link>
      <Link className="nav-links__link nav-links__link_signin" to="signin">Войти</Link>
    </div>
  )
}

export default NavTab;