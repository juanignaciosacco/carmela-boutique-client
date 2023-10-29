export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case 'login':
            return {
                ...action.payload,
                isLogged: true,
            };
        case 'logout':
            return {
                isLogged: false,
            };
        default:
            return state;
    }
}
