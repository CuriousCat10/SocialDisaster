import React from 'react';
import MainSMSContainer from '../mainMessage/mainMessageContainer';
import MainPostsContainer from '../mainPosts/mainPostsContainer';
import MainProfile from '../mainProfile/mainProfile';
import Preloader from "../../common/preloader/Preloader";
import './fullProfile.css';

class FullProfile extends React.Component {

    render() {
        if (!this.props.profile) {
            return <Preloader />;
        }

        return (     
            <div className="profile">
                <MainProfile profile={this.props.profile}/>
                <MainSMSContainer />
                <MainPostsContainer />
            </div>
        );
    }
}

export default FullProfile;