import './Greetings.css';
import Logo from '../Logo/Logo';

function Greetings({ title }) {
  return (
    <div className="greetings">
      <Logo />
      <h1 className="greetings__title">{title}</h1>
    </div>
  )
}

export default Greetings;