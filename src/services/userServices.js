import api from "../api/index";

export const loginService = async (account, pass) => {
  const res = api.post(
    "signin",
    {
      account: account,
      password: pass,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res;
};

export const signUpService = async (email, account, pass) => {
  const res = api.post(
    "signup",
    {
      email: email,
      account: account,
      password: pass,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res;
};

export const updateService = async (token, account, displayName, typePet, birthDay, sex, owner,avatar, coverImg) => {
    const res = api.patch(
      "update-account",
      {
        account: account,
        displayName: displayName,
        typePet: petType,
        birthDay: birthDay,
        sex:sex,
        owner: {
          name: owner.name,
          hobby: owner.hobby,
          description: owner.des,
          birthDay: new XDate(owner.dob).toString('dd/MM/yyyy'),
        },
        avatar:
          'https://i.pinimg.com/564x/24/b8/b1/24b8b148bccd7180e851bbb1889423aa.jpg',
        coverImage:
          'https://i.pinimg.com/564x/42/52/d6/4252d67ce24473045f2a20a2e81e710f.jpg',
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization":`Bearer ${token}`
        },
      }
    );
    return res;
  };
