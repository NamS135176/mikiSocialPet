const initState = {
    loading: false,
    postTag: []
};

const postTagReducer = (data = initState, action) => {
    switch (action.type) {
        case 'GET_POST_TAG_SUCCESS': {
            return {
                ...data,
                loading: false,
                postTag: action.payload.postTag
            }
        }
        case "GET_POST_TAG": {
            return {
                ...data,
                loading: true
            }
        }
        case 'UPDATE_LIKE_VIEW_TAG_SUCCESS': {
            return {
                ...data,
                loading: false,
                postTag: action.payload.postTag
            }
        }
        case 'UPDATE_LIKE_VIEW_TAG': {
            return {
                ...data,
                loading: true
            }
        }
        default: return data
    }
}
export default postTagReducer