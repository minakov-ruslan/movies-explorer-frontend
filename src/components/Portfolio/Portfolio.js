import './Portfolio.css'

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a href="https://minakov-ruslan.github.io/how-to-learn/index.html" className="portfolio__link" target="blank">Статичный сайт</a>
        </li>
        <li className="portfolio__item">
          <a href="https://minakov-ruslan.github.io/russian-travel/index.html" className="portfolio__link" target="blank">Адаптивный сайт</a>
        </li>
        <li className="portfolio__item">
          <a href="https://mesto.minakov.nomoredomains.icu/" className="portfolio__link" target="blank">Одностраничное приложение</a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;