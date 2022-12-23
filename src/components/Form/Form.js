import { Link } from 'react-router-dom';
import './Form.css';

function Form({ children, submitButtonText, bottomText, bottomLink, bottomLinkText }) {
  return (
    <section className="form-container">
      <form className="form">
        {children}
        <button type="submit" className="form__submit-button">{submitButtonText}</button>
      </form>
      <div className="form-container__bottom">
        <p className="form-container__text">{bottomText}</p>
        <Link to={bottomLink} className="form-container__link">{bottomLinkText}</Link>
      </div>
    </section>
  )
}

export default Form;