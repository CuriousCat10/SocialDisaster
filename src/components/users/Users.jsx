import * as axios from "axios";
import { Component } from "react";
import s from "./Users.module.css"

class Users extends Component {
    render() {
        
        // if (this.props.users.length === 0) {

        //     axios.get('https://social-network.samuraijs.com/api/1.0/users')
        //         .then( response => {  
        //             this.props.setUsers([
        //             {
        //               name: 'Жена',
        //               id: 1,
        //               followed: true,
        //               status: true,
        //               photo: 'https://www.meme-arsenal.com/memes/c7f60293797b4b7ccb50e26ba28f67b2.jpg',
        //               location: { city: 'Moscow', country: 'Russia' }
        //             },
        //             {
        //               name: 'Алексей',
        //               id: 2,
        //               followed: false,
        //               status: false,
        //               photo: 'https://whatsism.com/uploads/posts/2018-05/thumbs/1525373898_avatar-eskimo-girl.png',
        //               location: { city: 'Moscow', country: 'Russia' }
        //             },
        //             {
        //               name: 'Мама',
        //               id: 3,
        //               followed: false,
        //               status: true,
        //               photo: 'https://ava-24.com/_ph/146/615677258.jpg',
        //               location: { city: 'Moscow', country: 'Russia' }
        //             },
        //             {
        //               name: 'Папа',
        //               id: 4,
        //               followed: true,
        //               status: true,
        //               photo: 'https://klike.net/uploads/posts/2019-03/1551596754_23.jpg',
        //               location: { city: 'Moscow', country: 'Russia' }
        //             },
        //             {
        //               name: 'Стёпа',
        //               id: 5,
        //               followed: true,
        //               status: false,
        //               photo: 'https://pp.userapi.com/c624229/v624229630/1d0bd/kH5Nb2vXL_8.jpg',
        //               location: { city: 'Moscow', country: 'Russia' }
        //             }
        //           ])})
            
          
        // };
        
        return (
            <div className={s.users}>
                {
                    this.props.users.map((u) => <div key={u.id} className={s.user}>
                        <div className={s.userAvatar}>
                            <img src={u.photo} />
                            <div>
                                {u.followed
                                    ? <button onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>Отписаться</button>
                                    : <button onClick={() => {
                                        this.props.follow(u.id)
                                    }}>Подписаться</button>}
                            </div>
                        </div>
                            <div className={s.userName}>
                                {u.name} 
                                <div>
                                {u.status ? (
                                        <svg>
                                            <circle cx="10" cy="10" r="10" fill="green" />
                                        </svg>) : (
                                            <svg>
                                                <circle cx="10" cy="10" r="10" fill="red" />
                                            </svg>)}
                                </div>
                            </div>
                            <div className={s.userLocation}>
                                {u.location.country},
                                <div>{u.location.city}</div>
                            </div>
                        </div>)
                }
            </div>
        );
    }
}

export default Users;