const CHANGE_TEXT = "CHANGE-TEXT";

const textFixedReducer = (state = '', action) => {
    
    switch (action.type) {

        case (CHANGE_TEXT): {
  
            return action.newText;

        }

        default: {
            return state;
        }

    }
};

export const changeTextActionCreator = (text) => {
    return {
        type: CHANGE_TEXT, newText: text
    }
};

export default textFixedReducer;