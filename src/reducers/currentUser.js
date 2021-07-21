const initState = {
    loading: false,
    currentUser: {}
};

const currentUserReducer = (data = initState, action) => {
    switch (action.type) {
        case 'GET_CURRENT_USER_SUCCESS': {
            return {
                ...data,
                loading: false,
                currentUser: action.payload.user
            }
        }
        case "GET_CURRENT_USER": {
            return {
                ...data,
                loading: true
            }
        }
        default: return data
    }
}
export default currentUserReducer