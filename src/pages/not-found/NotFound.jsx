import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <>
      <h1>404</h1>
      <h2>Page missing</h2>
      <Link to="/">Go HOME page</Link>
    </>
  );
};
export default NotFound;