import './AboutProject.css';
import SectionTitle from '../SectionTitle/SectionTitle';

function AboutProject() {
  return (
    <section className="about-project">
      <SectionTitle title="О проекте" />
      <ul className="about-project__list">
        <li className="about-project__item">
          <h3 className="about-project__title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__text">Составление плана, работу над бэкендом,
            вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="about-project__item">
          <h3 className="about-project__title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн,
            которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <div className="about-project__timeline">
        <div className="about-project__timeline-part">
          <p className="about-project__timeline-period about-project__timeline-period_theme_green">1 неделя</p>
          <p className="about-project__timeline-capture">Back-end</p>
        </div>
        <div className="about-project__timeline-part">
          <p className="about-project__timeline-period">4 недели</p>
          <p className="about-project__timeline-capture">Front-end</p>
        </div>
      </div>
    </section>
  )
}

export default AboutProject;