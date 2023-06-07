import { NavLink, Outlet } from 'react-router-dom';
const SharedLayout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">🏠Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">🎬Movie</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};
export default SharedLayout;
