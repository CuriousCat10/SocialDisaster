import React from 'react';
import RatingContainer from './rating/RatingContainer';
import './Post.css';

class Post extends React.Component {

    render() {

        return (
            <div className="post">
                <div className="postId">
                    #{this.props.id}
                </div>
                <div className="postAvatar">
                    <img src={this.props.photo} />
                    <div>{this.props.name}</div>
                </div>
                <div className="textPost">
                    {this.props.text}
                </div>
                <RatingContainer positive={this.props.positive}
                    negative={this.props.negative}
                    giveLike={this.props.giveLike}
                    giveDislike={this.props.giveDislike}
                    id={this.props.id} 
                    />
            </div>
        );
    }
}

export default Post;