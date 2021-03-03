import React from 'react';
import s from './Header.module.css';

class Header extends React.Component {

    render() {
        return (
            <header className={s.header}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Facebook_New_Logo_%282015%29.svg"></img>
            </header>
        );
    }
}

export default Header;