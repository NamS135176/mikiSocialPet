const initState = {
  account: '',
  displayName: '',
  typePet: '',
  birthDay: '',
  sex: '',
  owner: {},
  avatar: '',
  coverImage: '',
  followMe: [],
  followed: [],
  liked: [],
  roomChat: [],
  time: 0,
};

const userInfo = (data = initState, action) => {
  switch (action.type) {
    case 'SET_USER_INFO': {
      return {
        ...data,
        account: action.payload.account,
        displayName: action.payload.displayName,
        typePet: action.payload.typePet,
        birthDay: action.payload.birthDay,
        sex: action.payload.sex,
        owner: action.payload.owner,
        avatar: action.payload.avatar,
        coverImage: action.payload.coverImage,
        followMe: action.payload.followMe,
        followed: action.payload.followed,
        liked: action.payload.liked,
        time: action.payload.time,
        roomChat: action.payload.roomChat,
      };
    }
    default:
      return data;
  }
};
export default userInfo;
