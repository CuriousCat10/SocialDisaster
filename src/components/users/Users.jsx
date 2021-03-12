import { NavLink } from "react-router-dom";
import s from "./Users.module.css"
import { followAPI, unfollowAPI } from "../../api/api";
import { follow } from "../../redux/usersReducer";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let number = 1; number <= pagesCount; number++) {
        pages.push(<div
            className={props.currentPage == number ? s.activePageNum : s.pageNum}
            onClick={() => props.onPageChanged(number)}>
            {number}
        </div>)
    };

    let checkPage = (props.pageSize * props.currentPage) > props.totalUsersCount ? props.totalUsersCount : (props.pageSize * props.currentPage);

    return (
        <div className={s.users}>
            {
                props.users.slice(props.pageSize * (props.currentPage - 1), checkPage)
                    .map((u) => <div key={u.id} className={s.user}>
                        <div className={s.userAvatar}>
                            {u.id < 15000 ? <img src={u.photo} /> : <NavLink to={`/profile/${u.id}`}>
                                <img src={u.photo} />
                            </NavLink>}
                            <div>
                                {u.followed
                                    ? <button className={s.unfollowButton}
                                        onClick={() => {
                                            props.unfollow(u.id);
                                        }}
                                        disabled={props.isFollowing.some( id => id === u.id)}>Отписаться</button>
                                    : <button className={s.followButton}
                                        onClick={() => {
                                           props.follow(u.id);
                                        }}
                                        disabled={props.isFollowing.some( id => id === u.id)}>Подписаться</button>}
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
            <div className={s.pageNums}>
                {pages}
            </div>
        </div>
    );
}

export default Users;