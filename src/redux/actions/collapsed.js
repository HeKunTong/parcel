const COLLAPSED_TOGGLE = 'COLLAPSED_TOGGLE';
const COLLAPSED_SHOW = 'COLLAPSED_SHOW';
const COLLAPSED_HIDE = 'COLLAPSED_HIDE';

const toggle = () => (dispatch) => {
    return dispatch({
        type: COLLAPSED_TOGGLE
    });
};

const show = () => (dispatch) => {
    return dispatch({
        type: COLLAPSED_SHOW
    });
};

const hide = () => (dispatch) => {
    return dispatch({
        type: COLLAPSED_HIDE
    });
};

export default {
    toggle,
    show,
    hide
};

export const handlers = {
    [COLLAPSED_TOGGLE]: (collapsed) => {
        return !collapsed;
    },
    [COLLAPSED_SHOW]: (collapsed) => {
        return true;
    },
    [COLLAPSED_HIDE]: (collapsed) => {
        return false;
    },
};