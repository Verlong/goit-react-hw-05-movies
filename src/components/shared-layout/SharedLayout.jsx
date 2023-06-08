import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
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
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer>Footer</footer>
    </div>
  );
};
export default SharedLayout;
