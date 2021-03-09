import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from "../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";
import { Component } from "react";

class UsersContainer extends Component {

    setUsers(items) {
        this.props.setUsers(items.map( (u) => {
            return {
                name: u.name,
                id: u.id,
                followed: u.followed,
                status: false,
                photo: 'http://s1.iconbird.com/ico/2013/12/505/w450h4001385925286User.png',
                location: { 
                    city: 'Москва', 
                    country: 'Россия' 
                }
            }
        })
    );
    }

    // componentDidMount() {
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage -1}&count=${this.props.pageSize}`)
    //         .then(response => {
    //             this.setUsers(response.data.items);
    //             // this.props.setTotalUsersCount(response.data.totalCount);
    //     });
    // }

    onPageChanged = (number) => {
        this.props.setCurrentPage(number);
        for (let i = 0; i < number; i++) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${i}&count=${this.props.pageSize}`)
                .then(response => {
                    if (i === Math.ceil(this.props.totalUsersCount / this.props.pageSize)) {
                        this.setUsers(response.data.items.slice(0, Math.ceil(this.props.totalUsersCount / this.props.pageSize)));
                    } else { 
                        this.setUsers(response.data.items);
                    }
            })
        }
    }

    render() { 
        return <Users onPageChanged={this.onPageChanged} 
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage} 
                    pageSize={this.props.pageSize} 
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    users={this.props.users}
                    />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersInfo.users,
        pageSize: state.usersInfo.pageSize,
        totalUsersCount: state.usersInfo.totalUsersCount,
        currentPage: state.usersInfo.currentPage
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        unfollow: (id) => {
            dispatch(unfollowAC(id));
        },
        follow: (id) => {
            dispatch(followAC(id));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page));
        },
        setTotalUsersCount: (count) => {
            dispatch(setTotalUsersCountAC(count));
        }

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);