const ADD_MESSAGE = "ADD-MESSAGE";

const initialState = new Map([
    ['Жена', ["Привет", "Как твои дела?", "Сколько выучил?"]],
    ['Алексей', ["Привет", "Сколько по менеджменту получил, м?"]]
  ]);

const messagesReducer = (state = initialState, action) => {
  
    switch (action.type) {

      case (ADD_MESSAGE): {
        
        if (state.has(action.name)) {
        
          return new Map([
            ...state,
            [action.name, [...state.get(action.name), action.text]]
          ]);
        
        } else {
          
          return new Map([
            ...state,
            [action.name, [action.text]]
          ]);

        }
      }
    
      default: {
        return state;
      }
  }
};

export const addMessageActionCreator = (name, text) => {
  return {
    type: ADD_MESSAGE,
    name: name,
    text: text
  }
};

export default messagesReducer;