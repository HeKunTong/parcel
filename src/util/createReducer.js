export const createReducer = (initState, handlers) => {
    return (state = initState, action) => {
        const handler = handlers[action.type];
        return handler ? handler(state, action) : state;
    };
};