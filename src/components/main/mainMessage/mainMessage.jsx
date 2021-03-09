import React from 'react';

import './mainMessage.css';

class MainSMS extends React.Component {

    textFinal = React.createRef();

    addPost = () => {
        let text = this.textFinal.current.value;
        if (!text) {
            alert ('Нельзя прикреплять пустой пост.');
            return;
        };
        let name = prompt(
            'Введите имя, от которого хотите отправить пост:',
            `Аноним${Math.floor(Math.random() * 100000)}`
        );           
        this.props.addPost(text, name);
    };

    addMessage = () => {
        let text = this.textFinal.current.value;
        if (!text) {
            alert ('Нельзя отправлять пустое сообщение.');
            return;
        }; 
        let name = prompt(
            'Введите имя, от которого хотите отправить сообщение:',
            `Аноним${Math.floor(Math.random() * 100000)}`
        );
        this.props.addMessage(text, name);
    };

    changeText = () => {
        let text = this.textFinal.current.value;
        this.props.changeText(text);
    }

    render() {

        return (
            <div className="mainText">
                <textarea className="writeSMS"
                    onChange={this.changeText}
                    ref={this.textFinal}
                    placeholder="Напишите сообщение"
                    value={this.props.textFixed}>
                </textarea>
                <button className="sendSMS"
                    onClick={this.addMessage}>
                    Отправить
                </button>
                <button className="sendPost"
                    onClick={this.addPost}>
                    Прикрепить пост
                </button>
            </div>
        );
    }
}

export default MainSMS;