// == Base:
import * as axios from "axios"

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { "API-KEY": 'd6070ed5-dca9-4432-bab4-16c916490a2f' },
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    setUnfollow(userId) {
        return instance
            .delete(`follow/${userId}`)
            .then(response => response.data)
    },
    setFollow(userId) {
        return instance
            .post(`follow/${userId}`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfileUsers(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
    },
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe })
    },
    logout() {
        return instance.delete(`auth/login`)
    },
}