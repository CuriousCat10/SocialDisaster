import React from 'react';
import FullProfile from "./fullProfile";
import { setProfileThunkCreator } from "../../../redux/profileReducer";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Preloader from "../../common/preloader/Preloader";

class FullProfileContainer extends React.Component {
    
    componentDidMount() {     
        this.props.setUsersProfile(this.props.match.params.whichProfile);
    }

    render() {

        if (this.props.isFetching) { 
            return <Preloader />
        } else {
            return (
                <FullProfile {...this.props} profile={this.props.profile} />
            )
        }
    }
}

let mapStateToProps = (state) => ({
    profile: state.profile.currentProfile,
    isFetching: state.profile.isFetching
});

let WithDataProfileContainer = withRouter(FullProfileContainer);

export default connect(mapStateToProps, { setUsersProfile: setProfileThunkCreator })(WithDataProfileContainer);