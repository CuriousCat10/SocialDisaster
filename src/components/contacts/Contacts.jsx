import { Component } from "react";
import s from "./Contacts.module.css"

class Contacts extends Component {
    render() {
        return (
            <div className={s.contacts}>
                Контакты
            </div>
        );
    }
}

export default Contacts;