import request from 'superagent';

import { GET, CREATE, UPDATE, REMOVE } from './types';

const fetch = (url, type, link, params = {}, headers = {}) => {
    switch (type) {
        case GET:
            return request.get(`${url}/${link}`).set(headers).query(params);
        case CREATE:
            return request.post(`${url}/${link}`).set(headers).send(params);
        case UPDATE:
            return request.put(`${url}/${link}/${params.id}`).set(headers).send(params.data);
        case REMOVE:
            return request.delete(`${url}/${model}/${params.id}`).set(headers);
        default:
            throw new Error(`Unsupported fetch type ${type}`);
    }
};


const formatResponse = (response) => {
    const { body } = response;
    return {
        data: body,
    };
};

export default (url, getHeaders = () => ({})) => {
    return (type, link, params = {}) => {
        const headers = getHeaders(type, link, params);
        return fetch(url, type, link, params, headers).then(response => formatResponse(response));
    };
};