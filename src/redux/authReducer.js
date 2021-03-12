import { authAPI } from "../api/api";

const SET_USERS_DATA = "SET-USERS-DATA";

 // userId: 15427,
  // login: "CuriousCat",
  // email: "gavril-artem@yandex.ru",

const initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  isFetching: false
}

const authReducer = (state = initialState, action) => {

  switch (action.type) {

    case (SET_USERS_DATA): {
      return {
        ...state, 
        ...action.data,
        isAuth: true
      };
    }

    default: {
      return state;
    }

  }

};

export const authMeThunkCreator = () => {
  return (dispatch) => {
    authAPI.authMeAPI().then(data => {
      if (data.resultCode === 0) {
          let {id, login, email} = data.data; 
          dispatch(setUsersData(id, login, email));
      }
  });
  }
}

export const setUsersData = (id, login, email) => ({
      type: SET_USERS_DATA,
      data: {id, login, email}
});

export default authReducer;