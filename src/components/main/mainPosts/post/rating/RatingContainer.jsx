import Rating from './Rating';
import { giveLikeActionCreator, giveDislikeActionCreator } from '../../../../../redux/postsReducer';
import { connect } from 'react-redux';

let mapDispatchToProps = (dispatch) => {
    return {
        giveLike: (id) => {
            dispatch(giveLikeActionCreator(id));
        },
        giveDislike: (id) => {
            dispatch(giveDislikeActionCreator(id));
        }
    } 
}

const RatingContainer = connect(null, mapDispatchToProps)(Rating);

export default RatingContainer;