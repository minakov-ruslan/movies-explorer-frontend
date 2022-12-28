import './AboutMe.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import Avatar from '../../images/avatar.jpg'

function AboutMe() {
  return (
    <section className="about-me">
      <SectionTitle title="Студент" />
      <div className="about-me__container">
        <div className="about-me__info">
          <h3 className="about-me__title">Руслан</h3>
          <p className="about-me__brief">Фронтенд-разработчик, 33 года</p>
          <p className="about-me__description">Я живу в Протвино, закончил электро-механический факультет ИГЭУ.
            У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь фотошопом. Недавно начал кодить на JS.
            С 2011 года работаю инженером-электронщиком. В дальнейшем планирую стать востребованным специалистом в области веб-разработки.</p>
          <a href="https://github.com/minakov-ruslan" className="about-me__link-github" target="blank">Github</a>
        </div>
        <img src={Avatar} alt="Фото студента" className="about-me__avatar" />
      </div>
    </section>
  )
}

export default AboutMe;