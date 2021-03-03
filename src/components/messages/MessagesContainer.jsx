
import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Message from './message/Message.jsx'
import Messages from './Messages.jsx';
import s from './Messages.module.css';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    const dialogs = state.users.map(u =>
        <div className={s.dialog}>
            <NavLink to={'/messages/' + u.id}
                activeClassName={s.activeClass}>
                {u.name}
            </NavLink>
        </div>
    );

    const ids = state.users.map(u =>
        <Route path={"/messages/" + u.id}
            render={() =>
                <Message personName={u.name}
                    messages={state.messages} />
            } />
    );
    return {
        dialogs: dialogs,
        ids: ids
    } 
}

const MessagesContainer = connect(mapStateToProps, null)(Messages);

export default MessagesContainer;