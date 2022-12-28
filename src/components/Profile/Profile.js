import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import './Profile.css';

function Profile() {
  return (
    <>
      <Header loggedIn={true} />
      <section className="profile">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <div className="profile__info-container">
          <div className="profile__name-container">
            <p className="profile__text">Имя</p>
            <p className="profile__text">Виталий</p>
          </div>
          <div className="profile__email-container">
            <p className="profile__text">E-mail</p>
            <p className="profile__text">pochta@yandex.ru</p>
          </div>
        </div>
        <div className="profile__bottom-container">
          <button type="button" className="profile__edit-button">Редактировать</button>
          <Link to="/signin" className="profile__link">Выйти из аккаунта</Link>
        </div>
      </section>
    </>
  )
}

export default Profile;