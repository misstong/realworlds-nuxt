import {request} from '@/plugins/request'

export const login = (data) => {
    return request({
        method: 'post',
        url: '/users/login',
        data
    })
}

export const register = (data) => {
    return request({
        method: 'post',
        url: '/users',
        data
    })
}

export const updateUser = (data) => {
    return request({
        method: 'put',
        url: 'user',
        data
    })
}

export const getUser = () => {
    return request({
        url: 'user'
    })
}

export const getProfile = (username) => {
    return request({
        url: `profiles/${username}`
    })
}

export const follow = (username) => {
    return request({
        method: 'post',
        url: `profiles/${username}/follow`
    })
}

export const unfollow = (username) => {
    return request({
        method: 'delete',
        url: `profiles/${username}/follow`
    })
}