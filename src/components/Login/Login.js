import './Login.css';
import Greetings from '../Greetings/Greetings';
import Form from '../Form/Form';

function Login() {
  return (
    <section className="login">
      <Greetings title="Рады видеть!" />
      <Form
        submitButtonText="Войти"
        bottomText="Ещё не зарегистрированы?"
        bottomLink="/signup"
        bottomLinkText="Регистрация"
      >
        <label htmlFor="login-email" className="form__label">E-mail</label>
        <input
          id="login-email"
          type="email"
          placeholder="E-mail"
          className="form__input"
          required
        />
        <span className="form__error-caption form__error-caption_active">Что-то пошло не так...</span>

        <label htmlFor="login-password" className="form__label">Пароль</label>
        <input
          id="login-password"
          type="password"
          placeholder="Пароль"
          className="form__input"
          required
        />
        <span className="form__error-caption form__error-caption_active">Что-то пошло не так...</span>
      </Form>
    </section>
  )
}

export default Login;