const initState = {
    loading: false,
    currentPost: {}
};

const currentPostReducer = (data = initState, action) => {
    switch (action.type) {
        case 'GET_POST_SUCCESS': {
            return {
                ...data,
                loading: false,
                currentPost: action.payload.post
            }
        }
        case "GET_POST": {
            return {
                ...data,
                loading: true
            }
        }
        case "UPDATE_LIKE":{
            return {
                ...data,
                loading: false,
                currentPost: action.payload.post
            }
        }
        default: return data
    }
}
export default currentPostReducer