import { Link } from 'react-router-dom';
import css from './NotFound.module.css';
const NotFound = () => {
  return (
    <div className={css.notFoundContainer}>
      <h1 className={css.mainTitle}>Movie Land</h1>
      <h2 className={css.title}>For true movies searcher</h2>
      <Link className={css.enter} to="/">
        Enter
      </Link>
    </div>
  );
};
export default NotFound;
