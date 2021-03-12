import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';
import FriendsContainer from './friends/FriendsContainer';

class Nav extends React.Component {

    render() {

        return (
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to="/profile/my"
                        activeClassName={s.activeClass}>
                        Мой профиль
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/messages"
                        activeClassName={s.activeClass}>
                        Сообщения
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/groups"
                        activeClassName={s.activeClass}>
                        Группы
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/users"
                        activeClassName={s.activeClass}>
                        Люди
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/contacts"
                        activeClassName={s.activeClass}>
                        Контакты
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/help"
                        activeClassName={s.activeClass}>
                        Помощь
                    </NavLink>
                </div>
                <FriendsContainer />
            </nav>
        );
    }
}

export default Nav;