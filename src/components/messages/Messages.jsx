
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import s from './Messages.module.css';

class Messages extends React.Component {

    render() {

        return (
            <BrowserRouter>
                <div className={s.messagesForm}>
                <div className={s.dialogs}>
                    {this.props.dialogs}
                </div>
                {this.props.ids}
                </div>
            </BrowserRouter>
        );
    }
}

export default Messages;