import MainPosts from './mainPosts';
import Post from './post/Post';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    
    let postsView = [];
    let ourUser;

    for (let value of state.posts.keys()) {

        try {
            ourUser = state.users.find(user => user.name == value);
        } catch {
            continue;
        };

        if (state.posts.get(value).length > 0) {
            for (let post of state.posts.get(value)) {
                
                postsView.push(
                    <Post text={post.text}
                        id={post.id}
                        name={ourUser.name}
                        photo={ourUser.photo}
                        positive={post.positiveRating}
                        negative={post.negativeRating} 
                        giveLike={post.giveLike.bind(post)}
                        giveDislike={post.giveDislike.bind(post)}  
                        />
                );
            }
        }
    }
    
    return {
        postsView: postsView
    } 
};

const MainPostsContainer = connect(mapStateToProps)(MainPosts);

export default MainPostsContainer;