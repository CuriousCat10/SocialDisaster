import React from 'react';
import MainSMSContainer from '../mainMessage/mainMessageContainer';
import MainPostsContainer from '../mainPosts/mainPostsContainer';
import MainProfile from '../mainProfile/mainProfile';
import './fullProfile.css';

class FullProfile extends React.Component {

    render() {
        return (
            <div className="profile">
                <MainProfile />
                <MainSMSContainer />
                <MainPostsContainer />
            </div>
        );
    }
}

export default FullProfile;