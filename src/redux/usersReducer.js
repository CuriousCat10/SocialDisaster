const CREATE_USER = "CREATE-USER";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

const initialState = {
  users: [
    {
      name: 'Жена',
      id: 1,
      followed: true,
      status: true,
      photo: 'https://www.meme-arsenal.com/memes/c7f60293797b4b7ccb50e26ba28f67b2.jpg',
      location: { city: 'Москва', country: 'Россия' }
    },
    {
      name: 'Алексей',
      id: 2,
      followed: false,
      status: false,
      photo: 'https://whatsism.com/uploads/posts/2018-05/thumbs/1525373898_avatar-eskimo-girl.png',
      location: { city: 'Москва', country: 'Россия' }
    },
    {
      name: 'Мама',
      id: 3,
      followed: false,
      status: true,
      photo: 'https://ava-24.com/_ph/146/615677258.jpg',
      location: { city: 'Москва', country: 'Россия' }
    },
    {
      name: 'Папа',
      id: 4,
      followed: true,
      status: true,
      photo: 'https://klike.net/uploads/posts/2019-03/1551596754_23.jpg',
      location: { city: 'Москва', country: 'Россия' }
    },
    {
      name: 'Стёпа',
      id: 5,
      followed: true,
      status: false,
      photo: 'https://pp.userapi.com/c624229/v624229630/1d0bd/kH5Nb2vXL_8.jpg',
      location: { city: 'Москва', country: 'Россия' }
    }
  ],
  pageSize: 5,
  totalUsersCount: 19,
  currentPage: 1
}

const usersReducer = (state = initialState, action) => {

  switch (action.type) {

    case (CREATE_USER): {

      if (!state.users.find((user) => user.name == action.name)) {

        let photo = prompt(
          'Выберите фотографию для профиля:',
          ''
        );

        if (!photo) {
          photo = 'https://akket.com/wp-content/uploads/2017/11/VKontakte-Rossiya-Anonimnost-6.jpg';
        }

        return {
            ...state,
            users: [
              ...state.users, 
              {
                name: action.name,
                id: state.users.length + 1,
                followed: false,
                status: true,
                photo: photo,
                location: { city: '-', country: '-' }
              }
            ],

        }
      }

      return state;

    }

    case (SET_USERS): {

      if (!state.users.find( user => user.name === (action.users[0].name))) {
        return {
          ...state,
          users: [
            ...state.users, 
            ...action.users
          ]
        }
      }
      return state;
    }

    case (FOLLOW): {

      return {
          ...state, 
          users: state.users.map( (user) => {
          if (user.id == action.id) {
            return {
              ...user, 
              followed: true
            };
          };
          return user;
        })
      }
    }

    case (UNFOLLOW): {

      return {
          ...state, 
          users: state.users.map( (user) => {
          if (user.id == action.id) {
            return {
              ...user, 
              followed: false
            };
          };
          return user;
        })
      }
    }

    case (SET_CURRENT_PAGE): {
      return {...state, currentPage: action.page};
    }

    case (SET_TOTAL_USERS_COUNT): {
      return {...state, totalUsersCount: action.count};
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

export const setCurrentPageAC = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    page: page
  }
};

export const setTotalUsersCountAC = (count) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    count: count
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