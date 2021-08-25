import {create} from 'apisauce';

export const api = create({
  baseURL: `http://obnd.me/`,
});

api.axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    console.log('DA VAO INTERCEPTOR');
    const {config: oldRequest} = error.response;
    if (error.response.status == 401) {
      const token= await AsyncStorage.getItem('dataToken');
      const data = await api.post('/refresh_token', {
        refresh_token: JSON.parse(token).refresh_token,
      });
      oldRequest.headers['Authorization'] = 'Bearer ' + data.data.access_token;
      await AsyncStorage.setItem('dataToken', JSON.stringify(data.data));
      const newData = await api.axiosInstance.request(oldRequest);
      return newData;
    }
    else {
      return error.response
    }
  },
);