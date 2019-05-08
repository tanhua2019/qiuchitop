import request from '../config/axios'

export function login(data) {
    return request({
        url: '/api/login',
        method: 'post',
        data: data,
    })
}

export function register(data) {
    return request({
        url: '/api/register',
        method: 'post',
        data: data,
    })
}

export function artical(query) {
    return request({
        url: `/api/getarticle?category=${query}`,
        method: 'get',
    })
}

export function addarticle(data) {
    return request({
        url: `/api/addarticle`,
        method: 'post',
        data: data
    })
}

//获取全部文章
export function getAll() {
    return request({
        url: '/api/getallarticle',
        method: 'get',
    })
}


export function getarticle(query) {
    return request({
        url: `/api/getallarticle?c=${query}`,
        method: 'get',
    })
}

// /getarticle?c=android




export function delarticle(query) {
    return request({
        url: `/api/delarticle?id=${query}`,
        method: 'get',
    })
}


// /delarticle?id = 12
