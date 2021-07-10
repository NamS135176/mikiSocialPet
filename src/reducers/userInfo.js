const initState = {
    account: '',
    displayName: '',
    typePet: '',
    birthDay:'',
    sex:'',
    owner:{}
};

const userInfo = (data = initState,action) => {
    switch(action.type){
        case 'SET_USER_INFO': {
            return{
                ...data,
                account: action.payload.account,
                displayName: action.payload.displayName,
                typePet: action.payload.typePet,
                birthDay:action.payload.birthDay,
                sex:action.payload.sex,
                owner:action.payload.owner
            }
        }
        default: return data
    }
}
export default userInfo