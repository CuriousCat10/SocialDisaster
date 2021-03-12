import Rating from './Rating';
import { giveLike, giveDislike } from '../../../../../redux/postsReducer';
import { connect } from 'react-redux';

const RatingContainer = connect(null, { giveLike, giveDislike })(Rating);

export default RatingContainer;