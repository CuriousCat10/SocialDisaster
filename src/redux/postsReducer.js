const ADD_POST = "ADD-POST";
const GIVE_LIKE = "GIVE-LIKE";
const GIVE_DISLIKE = "GIVE-DISLIKE";

const createPost = (text, id) => {
  return {
    id: id,
    text: text,
    positiveRating: 0,
    negativeRating: 0,
    giveLike() {
      ++this.positiveRating;
    },
    giveDislike() {
      ++this.negativeRating;
    }
  }
};

const initialState = new Map([
    ['Жена', [createPost('Привет, это первый пост', 1)]],
    ['Алексей', [createPost('А это второй пост', 2)]],
    ['Мама', [createPost('И третий пост к нам присоединился', 3)]],
    ['Папа', [createPost('Чуть не забыли про четвёртый)', 4)]],
    ['Стёпа', [createPost('И тут... пятый', 5)]]
  ]);

const postsReducer = (state = initialState, action) => {
  
  switch (action.type) {

    case (ADD_POST): { 
      
      let counter = 0;

      for (let value of state.values()) {
        counter+=value.length;
      };

      if (state.has(action.name)) {
        
        return new Map([
          ...state,
          [action.name, [...state.get(action.name), createPost(action.text, counter + 1)]]
        ]);
      
      } else {
        
        return new Map([
          ...state,
          [action.name, [createPost(action.text, counter + 1)]]
        ]);

      }
      
    }

    case (GIVE_LIKE): {
      let stateCopy = new Map(state);
      
      for (let value of stateCopy.values()) {
        for (let post of value) {
          if (post.id == action.id) {
            post.positiveRating++;
          }
        }
      }

      return stateCopy;
    }

    case (GIVE_DISLIKE): {
      let stateCopy = new Map(state);
      
      for (let value of stateCopy.values()) {
        for (let post of value) {
          if (post.id == action.id) {
            post.negativeRating++;
          }
        }
      }

      return stateCopy;
    }

    default: {
      return state;
    }
  }
};

export const addPostActionCreator = (name, text) => {
  return {
    type: ADD_POST,
    name: name,
    text: text
  }
};

export const giveLikeActionCreator = (id) => {
  return {
    type: GIVE_LIKE,
    id: id
  }
};

export const giveDislikeActionCreator = (id) => {
  return {
    type: GIVE_DISLIKE,
    id: id
  }
};
  
export default postsReducer;