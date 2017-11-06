const initialState = {
    component: 'App Component'
};
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEW_ACTION':
            state = action.payload
            state = {
                ...state
            }
            break;
    }
    return state;
};

export default appReducer;