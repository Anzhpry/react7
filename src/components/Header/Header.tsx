import { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import style from './Header.module.scss';

const navigate = [
  {
    name: 'Main',
    path: '/',
  },
  {
    name: 'Chats',
    path: '/chats',
  },
  {
    name: 'Profile',
    path: '/profile',
  },
];

export const Header: FC = () => {
  return (
    <>
      <header className={style.header}>
        <ul className={style.ul}>
          {navigate.map((item, idx) => (
            <li key={idx}>
              <NavLink className={style.li}
                to={item.path}
                style={({ isActive }) => ({
                  color: isActive ? 'white' : 'black',
                })}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
