import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

class Header extends React.Component {

    render() {
        return (
            <header className={s.header}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Facebook_New_Logo_%282015%29.svg"></img>
                <div className={s.loginBlock}> 
                    { this.props.isAuth ? this.props.login :                
                        <NavLink to={'/login'}>
                            Войти
                        </NavLink>
                    }
                </div>
            </header>
        );
    }
}

export default Header;