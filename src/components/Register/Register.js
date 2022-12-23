import Greetings from '../Greetings/Greetings';
import Form from '../Form/Form';
import './Register.css';

function Register() {
  return (
    <section className="register">
      <Greetings title="Добро пожаловать!" />
      <Form
        submitButtonText="Зарегистрироваться"
        bottomText="Уже зарегистрированы?"
        bottomLink="/signin"
        bottomLinkText="Войти"
      >
        <label htmlFor="register-name" className="form__label">Имя</label>
        <input id="register-name" type="text" className="form__input" />
        <span className="form__error-caption form__error-caption_active">Что-то пошло не так...</span>

        <label htmlFor="register-email" className="form__label">E-mail</label>
        <input id="register-email" type="email" className="form__input" />
        <span className="form__error-caption form__error-caption_active">Что-то пошло не так...</span>

        <label htmlFor="register-password" className="form__label">Пароль</label>
        <input id="register-password" type="password" className="form__input" />
        <span className="form__error-caption form__error-caption_active">Что-то пошло не так...</span>
      </Form>
    </section>
  )
}

export default Register;