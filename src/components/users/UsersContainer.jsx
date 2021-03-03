import { Component } from "react";
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/usersReducer";
import Users from './Users';

let mapStateToProps = (state) => {
    return {
        users: state.users
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
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);