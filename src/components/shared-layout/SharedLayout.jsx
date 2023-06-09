import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './SharedLayot.module.css';
const SharedLayout = () => {
  return (
    <div className={css.container}>
      <nav className={css.navContainer}>
        <ul className={css.navList}>
          <li>
            <NavLink to="/" className={css.navLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={css.navLink}>
              Movie
            </NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      {/* <footer className={css.footer}>Made by Maryna Bonko</footer> */}
    </div>
  );
};
export default SharedLayout;
