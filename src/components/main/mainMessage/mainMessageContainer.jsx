import { addMessageActionCreator } from '../../../redux/messagesReducer';
import { addPostActionCreator } from '../../../redux/postsReducer';
import { createUserActionCreator } from '../../../redux/usersReducer';
import { changeTextActionCreator } from '../../../redux/textFixedReducer';
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
            dispatch(createUserActionCreator(name));
            dispatch(addPostActionCreator(name, text));
            dispatch(changeTextActionCreator(''));
        },
        addMessage: (text, name) => {
            dispatch(createUserActionCreator(name))
            dispatch(addMessageActionCreator(name, text));
            dispatch(changeTextActionCreator(''));
        },
        changeText: (text) => {
            dispatch(changeTextActionCreator(text));
        } 
    } 
}


const MainSMSContainer = connect(mapStateToProps, mapDispatchToProps)(MainSMS);

export default MainSMSContainer;