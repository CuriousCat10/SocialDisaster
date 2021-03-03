import React from 'react';
import './mainProfile.css';

class mainProfile extends React.Component {

    render() {
        return (
            <div className="mainProfile">
                <img src='https://lh3.googleusercontent.com/a-/AOh14GhEGJspOraTuvxG72W9N4367bposdAbMAaIQTB8WQ=s96-c-rg-br100' />
                <ul>Список интересов:
                    <li>Программирование</li>
                    <li>Книги</li>
                    <li>Фильмы</li>
                </ul>
            </div>
        );
    }
}

export default mainProfile;