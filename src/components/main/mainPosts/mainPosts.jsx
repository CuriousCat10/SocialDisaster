import React from 'react';
import './mainPosts.css';

class MainPosts extends React.Component {

    render() {

        return (
            <div className="mainPosts">
                {this.props.postsView}
            </div>
        );
    }
}

export default MainPosts;