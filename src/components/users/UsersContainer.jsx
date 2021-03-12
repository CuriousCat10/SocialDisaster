import { connect } from 'react-redux';
import { followThunkCreator, getUsersThunkCreator, unfollowThunkCreator } from '../../redux/usersReducer';
import Users from "./Users";
import { Component } from "react";
import Preloader from '../common/preloader/Preloader';

class UsersContainer extends Component {

    // componentDidMount() {
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage -1}&count=${this.props.pageSize}`)
    //         .then(response => {
    //             this.setUsers(response.data.items);
    //             // this.props.setTotalUsersCount(response.data.totalCount);
    //     });
    // }

    onPageChanged = (number) => {
        this.props.getUsers(number, this.props.pageSize, this.props.totalUsersCount);
    }

    render() { 
        return <>
                    { this.props.isFetching ?<Preloader /> :  
                        <Users onPageChanged={this.onPageChanged} 
                            totalUsersCount={this.props.totalUsersCount}
                            currentPage={this.props.currentPage} 
                            pageSize={this.props.pageSize} 
                            unfollow={this.props.unfollow}
                            follow={this.props.follow}
                            users={this.props.users}
                            isFollowing={this.props.isFollowing}
                        />
                    }
                </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersInfo.users,
        pageSize: state.usersInfo.pageSize,
        totalUsersCount: state.usersInfo.totalUsersCount,
        currentPage: state.usersInfo.currentPage,
        isFetching: state.usersInfo.isFetching,
        isFollowing: state.usersInfo.isFollowing
    };
}

export default connect(mapStateToProps, { follow: followThunkCreator, getUsers: getUsersThunkCreator, 
    unfollow: unfollowThunkCreator })(UsersContainer);