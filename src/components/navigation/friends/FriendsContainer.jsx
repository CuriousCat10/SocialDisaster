import React from 'react';
import s from './Friends.module.css';
import { connect } from 'react-redux';
import Friends from './Friends';

let mapStateToProps = (state) => {
    const friendsView = state.users.map(user =>
        user.status ? (
            <div className={s.friendActive}>
                {user.name}
            </div>) : (
                <div className={s.friendInactive}>
                    {user.name}
                </div>)
    );
    return {
        friendsView: friendsView
    } 
}

const FriendsContainer = connect(mapStateToProps, null)(Friends);

export default FriendsContainer;