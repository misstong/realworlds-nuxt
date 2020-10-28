import {request} from '@/plugins/request'

export const getArticles = params => {
    return request({
        url: 'articles',
        params
    })
}

export const getFeedArticles = params => {
    return request({
        url: 'articles/feed',
        // headers: {
        //     Authorization: 'Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTIxNTYyLCJ1c2VybmFtZSI6ImFhYTExMTAwNyIsImV4cCI6MTYwODk2MTM3Nn0.FIDE6LK5x1KegyPdBDXR-BjTJNPUxRFafiiL0wehVoI'
        // },
        params
    })
}

export const addFavorite = slug => {
    return request({
        method: 'POST',
        url: `articles/${slug}/favorite`,
    })
}

export const deleteFavorite = slug => {
    return request({
        method: 'delete',
        url: `articles/${slug}/favorite`,
    })
}

export const getArticle = slug => {
    return request({
        url: `articles/${slug}`,
    })
}

export const getComments = slug => {
    return request({
        url: `articles/${slug}/comments`,
    })
}

export const createArticle = data => {
    return request({
        method: 'post',
        url: 'articles',
        data
    })
}