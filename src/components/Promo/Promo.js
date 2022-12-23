import './Promo.css';
import logo from '../../images/promo_logo.svg';

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <img src={logo} alt="Логотип" className="promo__image" />
    </section>
  )
}

export default Promo;