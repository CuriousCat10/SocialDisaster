import { usersAPI } from "../api/api";
import userImage from "../assets/images/user.png";

const CREATE_USER = "CREATE-USER";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING_USERS = "TOGGLE-IS-FETCHING-USERS";
const TOGGLE_IS_FOLLOWING_USER = "TOGGLE-IS-FOLLOWING-USER";
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
  currentPage: 1,
  isFetching: false,
  isFollowing: [],
  currentFreeID: 6
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
              id: state.currentFreeID,
              followed: false,
              status: true,
              photo: photo,
              location: { city: '-', country: '-' }
            }
          ],
          currentFreeID: state.currentFreeID++

        }
      }

      return state;

    }

    case (SET_USERS): {

      if (!state.users.find(user => user.name === (action.users[0].name))) {
        return {
          ...state,
          users: [
            ...state.users,
            ...action.users.map((u) => {
              return {
                name: u.name,
                id: u.id,
                followed: u.followed,
                status: false,
                photo: u.photos.small ? u.photos.small : userImage,
                location: {
                  city: 'Москва',
                  country: 'Россия'
                }
              }
            })
          ]
        }
      }
      return state;
    }

    case (TOGGLE_IS_FETCHING_USERS): {
      return {
        ...state,
        isFetching: action.value
      }
    }

    case (TOGGLE_IS_FOLLOWING_USER): {
      return {
        ...state,
        isFollowing: action.value ? [...state.isFollowing, action.id] : [...state.isFollowing.filter(id => id != action.id)]
      }
    }


    case (FOLLOW): {

      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id == action.id) {
            return {
              ...user,
              followed: true
            };
          } else {
            return user;
          }
        })
      }
    }

    case (UNFOLLOW): {

      return {
        ...state,
        users: state.users.map((user) => {
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
      return { ...state, currentPage: action.page };
    }

    case (SET_TOTAL_USERS_COUNT): {
      return { ...state, totalUsersCount: action.count };
    }

    default: {
      return state;
    }

  }

};

export const getUsersThunkCreator = (number, pageSize, totalUsersCount) => {
  return (dispatch) => {
    dispatch(setCurrentPage(number));
    if (number != 1) {
      dispatch(toggleIsFetchingUsers(true));
    }
    for (let i = 1; i < number; i++) {
      usersAPI.getUsersAPI(i, pageSize).then(data => {
        if (i === number - 1) {
          dispatch(toggleIsFetchingUsers(false));
        };
        if (i === Math.ceil(totalUsersCount / pageSize)) {
          dispatch(setUsers(data.items.slice(0, Math.ceil(totalUsersCount / pageSize))));
        } else {
          dispatch(setUsers(data.items));
        }
      })
    }

  };
}

export const unfollowThunkCreator = (userId) => {
  return (dispatch) => {
    if (userId > 15000) {
      dispatch(toggleIsFollowingUser(true, userId));
      usersAPI.unfollowAPI(userId).then(data => {
        if (data.resultCode == 0) {
          dispatch(unfollow(userId));
          dispatch(toggleIsFollowingUser(false, userId));
        }
      }).catch(() => {
        alert("Слишком много запросов. Повторите позже");
        dispatch(toggleIsFollowingUser(false, userId));
      }
      );
    } else {
      dispatch(unfollow(userId));
    }
  }
}

export const followThunkCreator = (userId) => {
  return (dispatch) => {
    if (userId > 15000) {
      dispatch(toggleIsFollowingUser(true, userId));
      usersAPI.followAPI(userId).then(data => {
        if (data.resultCode == 0) {
          dispatch(follow(userId));
          dispatch(toggleIsFollowingUser(false, userId));
        }
      }).catch(() => {
        alert("Слишком много запросов. Повторите позже");
        dispatch(toggleIsFollowingUser(false, userId));
      }
      );
    } else {
      dispatch(follow(userId));
    }
  }
}

export const createUser = (name) => {
  return {
    type: CREATE_USER,
    name
  }
};

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users
  }
};

export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    page
  }
};

export const setTotalUsersCount = (count) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    count
  }
};

export const toggleIsFetchingUsers = (value) => {
  return {
    type: TOGGLE_IS_FETCHING_USERS,
    value
  }
};

export const toggleIsFollowingUser = (value, id) => {
  return {
    type: TOGGLE_IS_FOLLOWING_USER,
    value,
    id
  }
};


export const follow = (id) => {
  return {
    type: FOLLOW,
    id
  }
};

export const unfollow = (id) => {
  return {
    type: UNFOLLOW,
    id
  }
};

export default usersReducer;