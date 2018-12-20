export default {
    name: 'collapsed',
    initialState: false,
    reducers: {
        toggle: (state) => {
            return !state;
        },
        show: () => {
            return true;
        },
        hide: () => {
            return false;
        }
    }
};