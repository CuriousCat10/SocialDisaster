import { addMessage } from '../../../redux/messagesReducer';
import { addPost } from '../../../redux/postsReducer';
import { createUser } from '../../../redux/usersReducer';
import { changeText } from '../../../redux/textFixedReducer';
import MainSMS from './mainMessage';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        textFixed: state.textFixed
    } 
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text, name) => {
            dispatch(createUser(name));
            dispatch(addPost(name, text));
            dispatch(changeText(''));
        },
        addMessage: (text, name) => {
            dispatch(createUser(name))
            dispatch(addMessage(name, text));
            dispatch(changeText(''));
        },
        changeText: (text) => {
            dispatch(changeText(text));
        } 
    } 
}


const MainSMSContainer = connect(mapStateToProps, mapDispatchToProps)(MainSMS);

export default MainSMSContainer;