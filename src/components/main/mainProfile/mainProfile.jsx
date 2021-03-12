import React from 'react';
import './mainProfile.css';

class mainProfile extends React.Component {

    render() {
        
        let contacts = [];

        for (let key in this.props.profile.contacts) {
            contacts.push( <div>{`${key}: ${this.props.profile.contacts[key]}`}</div> );              
        } 

        return (
            <div className="mainProfile">
                <div className="fullName">
                    {this.props.profile.fullName}
                </div>
                <img src={this.props.profile.photo} />
                <div className="profileDescription">
                    {this.props.profile.aboutMe}
                </div>
                <div className="contacts">
                    Контакты:
                    { contacts }
                </div>
            </div>
        );
    }
}

export default mainProfile;