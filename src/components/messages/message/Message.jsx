
import React from 'react';
import s from './Message.module.css';

class Message extends React.Component {
    render() {

        let currentMessages = this.props.messages.get(this.props.personName);
        let messagesOnView = currentMessages ?
            currentMessages.map(m =>
                <div className={s.message}>
                    {m}
                </div>
            ) : <div className={s.messageNo}>
                У вас нет сообщений
                </div>;

        return (
            <div className={s.messages}>
                {messagesOnView}
            </div>
        );
    }
}

export default Message;