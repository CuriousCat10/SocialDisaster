import React from 'react';

import './mainMessage.css';

class MainSMS extends React.Component {

    render() {

        let textFinal = React.createRef();
        
        let addPost = () => {
            let text = textFinal.current.value;
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

        let addMessage = () => {
            let text = textFinal.current.value;
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

        let changeText = () => {
            let text = textFinal.current.value;
            this.props.changeText(text);
        }

        return (
            <div className="mainText">
                <textarea className="writeSMS"
                    onChange={changeText}
                    ref={textFinal}
                    placeholder="Напишите сообщение"
                    value={this.props.textFixed}>
                </textarea>
                <button className="sendSMS"
                    onClick={addMessage}>
                    Отправить
                </button>
                <button className="sendPost"
                    onClick={addPost}>
                    Прикрепить пост
                </button>
            </div>
        );
    }
}

export default MainSMS;