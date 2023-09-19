export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case 'login':
            return {
                isLogged: true,
                user: action.payload
            };
        case 'logout':
            return {
                isLogged: false,
            };
        default:
            return state;
    }
}
