import messagesReducer from "./messagesReducer";
import postsReducer from "./postsReducer";
import textFixedReducer from "./textFixedReducer";
import usersReducer from "./usersReducer";

export const createPost = (text) => {
  return {
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

export const store = {

  _state: {

    users: [

      {
        name: 'Жена',
        id: 1,
        status: true,
        photo: 'https://w-hatsapp.ru/wp-content/uploads/2017/05/screenshot-2017-05-19-001-3-300x238.png'
      },
      {
        name: 'Алексей',
        id: 2,
        status: false,
        photo: 'https://whatsism.com/uploads/posts/2018-05/thumbs/1525373898_avatar-eskimo-girl.png'
      },
      {
        name: 'Мама',
        id: 3,
        status: true,
        photo: 'https://ava-24.com/_ph/146/615677258.jpg'
      },
      {
        name: 'Папа',
        id: 4,
        status: true,
        photo: 'https://klike.net/uploads/posts/2019-03/1551596754_23.jpg'
      },
      {
        name: 'Стёпа',
        id: 5,
        status: false,
        photo: 'https://pp.userapi.com/c624229/v624229630/1d0bd/kH5Nb2vXL_8.jpg'
      }
    ],

    posts: new Map([
      ['Жена', [createPost('Привет, это первый пост')]],
      ['Алексей', [createPost('А это второй пост')]],
      ['Мама', [createPost('И третий пост к нам присоединился')]],
      ['Папа', [createPost('Чуть не забыли про четвёртый)')]],
      ['Стёпа', [createPost('И тут... пятый')]]
    ]),
    
    messages: new Map([
      ['Жена', ["Привет", "Как твои дела?", "Сколько выучил?"]],
      ['Алексей', ["Привет", "Сколько по менеджменту получил, м?"]]
    ]),
    
    textFixed: '',

  },

  _callSubscriber() {
    console.log('Сделано');
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    
    this._state.users = usersReducer(this._state.users, action);
    this._state.messages = messagesReducer(this._state.messages, this._state.textFixed, action);
    this._state.posts = postsReducer(this._state.posts, this._state.textFixed, action);
    this._state.textFixed = textFixedReducer(this._state.textFixed, action);

    this._callSubscriber(this._state);
  }
};