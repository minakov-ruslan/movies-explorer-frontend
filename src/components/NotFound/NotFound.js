import './NotFound.css';
import { useHistory } from 'react-router';


function NotFound() {
  const histoty = useHistory();
  const handleClickGoBack = () => {
    histoty.goBack();
  }

  return (
    <section className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">Страница не найдена</p>
      <button type="button" className="not-found__button" onClick={handleClickGoBack}>Назад</button>
    </section>
  )
}

export default NotFound;