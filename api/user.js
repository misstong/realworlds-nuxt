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