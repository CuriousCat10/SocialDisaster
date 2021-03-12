import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "5690adb6-37cb-465b-bd99-31874a8ae6fe"
    }
})

export const usersAPI = {
    getUsersAPI: (number, pageSize) => {
        return instance.get(`users?page=${number}&count=${pageSize}`).then( response => response.data)
    },
    unfollowAPI: (id) => {
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
    followAPI: (id) => {
        return instance.post(`follow/${id}`).then(response => response.data)
    }
}

export const profileAPI = {
    getProfileAPI: (whichProfile) => {
        return instance.get(`profile/${whichProfile}`).then( response => response.data)
    }
}

export const authAPI = {
    authMeAPI: () => {
        return instance.get(`auth/me`).then( response => response.data)
    }
}
