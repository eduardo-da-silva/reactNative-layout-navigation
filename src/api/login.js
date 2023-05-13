import axios from 'axios';

export default class LoginApi {
  async login(username, password) {
    try {
      const { data } = await axios.post('http://127.0.0.1:19003/auth', {
        username,
        password,
      });
      return Promise.resolve(data);
    } catch (error) {
      return Promise.error(error);
    }
  }
}
