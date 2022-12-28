import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h3 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className="footer__container">
        <p className="footer__year">&#169; 2022</p>
        <div className="footer__links-container">
          <a href="https://practicum.yandex.ru/" className="footer__link" target="blank">Яндекс.Практикум</a>
          <a href="https://github.com/yandex-praktikum" className="footer__link" target="blank">Github</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;