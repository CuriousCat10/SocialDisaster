import React from 'react';
import s from './Friends.module.css';

class Friends extends React.Component {

    render() {
        return (
        <div className={s.friends}>
            Друзья:
            <div className={s.friendList}>
                {this.props.friendsView}
            </div>
        </div>
        );
    }
}

export default Friends;