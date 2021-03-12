import { profileAPI } from "../api/api";
import userImage from "../assets/images/user.png";

const TOGGLE_IS_FETCHING_PROFILE = "TOGGLE-IS-FETCHING-PROFILE";
const SET_USERS_PROFILE = "SET-USERS-PROFILE";
const SET_PROFILE_URL = "SET-PROFILE-URL";

const initialState = {
  currentProfile: null,
  profileUrl: null,
  isFetching: false,
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {

    case (TOGGLE_IS_FETCHING_PROFILE): {
      return {
        ...state, 
        isFetching: action.value
      }
    }

    case (SET_USERS_PROFILE): {
      return {
        ...state,
        currentProfile: action.profile
      }
    }

    case (SET_PROFILE_URL): {
      return {
        ...state,
        profileUrl: action.url
      }
    }

    default: {
      return state;
    }

  }

};

export const setProfileThunkCreator = (whichProfile) => {
  return (dispatch) => {
    dispatch(toggleIsFetchingProfile(true));
    if (isFinite(+whichProfile)) {
      profileAPI.getProfileAPI(+whichProfile).then(data => {
        dispatch(setUsersProfile({
          fullName: data.fullName,
          aboutMe: data.aboutMe ? data.aboutMe : "Нет описания",
          photo: data.photos.small ? data.photos.small : userImage,
          contacts: {...data.contacts}
        }));
      });
  } else if (whichProfile === "my"){
    dispatch(setUsersProfile(
        {
        fullName: "Артём Гаврилюк",
        aboutMe: <ul>Список интересов:
                    <li>Программирование</li>
                    <li>Книги</li>
                    <li>Фильмы</li>
                </ul>,
        photo: "https://lh3.googleusercontent.com/a-/AOh14GhEGJspOraTuvxG72W9N4367bposdAbMAaIQTB8WQ=s96-c-rg-br100",
        contacts: {
            phone: "8-999-999-99-99",
            email: "art@art.ru"
        }
        }
    ));
  }
  dispatch(toggleIsFetchingProfile(false));
}
}

export const toggleIsFetchingProfile = (value) => {
  return {
    type: TOGGLE_IS_FETCHING_PROFILE,
    value
  }
};

export const setUsersProfile = (profile) => {
  return {
    type: SET_USERS_PROFILE,
    profile
  }
}

export const setProfileUrl = (url) => {
  return {
    type: SET_PROFILE_URL,
    url
  }
}

export default profileReducer;