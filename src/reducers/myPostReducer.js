const initState = {
    loading:false,
  listMyPost:[]
};

const myPostReducer = ( data = initState,action) => {
    console.log(action.coverImage);
    switch(action.type){
        case 'GET_MY_POST_SUCCESS': {
            return{
                ...data,
                loading:false,
               listMyPost: action.payload.listMyPost
            }
        }
        case "GET_MY_POST" : {
            return{
                ...data,
                loading:true
            }
        }
        default: return data
    }
}
export default myPostReducer