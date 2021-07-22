const initState = {
    loading:false,
  listFollowPost:[]
};

const followPostReducer = ( data = initState,action) => {
  
    switch(action.type){
        case 'GET_FOLLOW_POST_SUCCESS': {
            return{
                ...data,
                loading:false,
                listFollowPost: action.payload.listFollowPost
            }
        }
        case "GET_FOLLOW_POST" : {
            return{
                ...data,
                loading:true
            }
        }
        case 'UPDATE_LIKE_VIEW_SUCCESS' : {
            return {
                ...data,
                loading:false,
                listFollowPost: action.payload.listFollowPost
            }
        }
        case 'UPDATE_LIKE_VIEW':{
            return {
                ...data,
                loading:true
            }
        }
        default: return data
    }
}
export default followPostReducer