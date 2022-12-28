import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import NavTab from '../NavTab/NavTab';

function Header({ loggedIn }) {
  const headerClassName = `header ${loggedIn ? "" : "header_theme_landing"}`;
  return (
    <header className={headerClassName}>
      <Logo />
      {
        loggedIn ? <Navigation /> : <NavTab />
      }
    </header>
  )
}

export default Header;