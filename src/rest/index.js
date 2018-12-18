import simpleRestClient from './simple';

export * from './types';

const rest = simpleRestClient(process.env.REACT_DOMAIN);

export {
    simpleRestClient,
    rest
};