const CREATE_USER = "CREATE-USER";
const SET_USERS = "SET-USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

const initialState = [
  {
    name: 'Жена',
    id: 1,
    followed: true,
    status: true,
    photo: 'https://www.meme-arsenal.com/memes/c7f60293797b4b7ccb50e26ba28f67b2.jpg',
    location: { city: 'Moscow', country: 'Russia' }
  },
  {
    name: 'Алексей',
    id: 2,
    followed: false,
    status: false,
    photo: 'https://whatsism.com/uploads/posts/2018-05/thumbs/1525373898_avatar-eskimo-girl.png',
    location: { city: 'Moscow', country: 'Russia' }
  },
  {
    name: 'Мама',
    id: 3,
    followed: false,
    status: true,
    photo: 'https://ava-24.com/_ph/146/615677258.jpg',
    location: { city: 'Moscow', country: 'Russia' }
  },
  {
    name: 'Папа',
    id: 4,
    followed: true,
    status: true,
    photo: 'https://klike.net/uploads/posts/2019-03/1551596754_23.jpg',
    location: { city: 'Moscow', country: 'Russia' }
  },
  {
    name: 'Стёпа',
    id: 5,
    followed: true,
    status: false,
    photo: 'https://pp.userapi.com/c624229/v624229630/1d0bd/kH5Nb2vXL_8.jpg',
    location: { city: 'Moscow', country: 'Russia' }
  }
];

const usersReducer = (state = initialState, action) => {

  switch (action.type) {

    case (CREATE_USER): {

      if (!state.find((user) => user.name == action.name)) {

        let photo = prompt(
          'Выберите фотографию для профиля:',
          ''
        );

        if (!photo) {
          photo = 'https://akket.com/wp-content/uploads/2017/11/VKontakte-Rossiya-Anonimnost-6.jpg';
        }

        return [...state, {
          name: action.name,
          id: state.length + 1,
          followed: false,
          status: true,
          photo: photo,
          location: { city: '-', country: '-' }
        }];
      }

      return state;

    }

    case (SET_USERS): {

      return [...state, action.users];

    }

    case (FOLLOW): {

      return state.map( (user) => {
        if (user.id == action.id) {
          return {...user, followed: true};
        };
        return user;
      });

    }

    case (UNFOLLOW): {

      return state.map( (user) => {
        if (user.id == action.id) {
          return {...user, followed: false};
        };
        return user;
      });

    }

    default: {
      return state;
    }

  }

};

export const createUserActionCreator = (name) => {
  return {
    type: CREATE_USER,
    name: name
  }
};

export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users: users
  }
};

export const followAC = (userId) => {
  return {
    type: FOLLOW,
    id: userId
  }
};

export const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW,
    id: userId
  }
};

export default usersReducer;