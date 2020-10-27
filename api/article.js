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