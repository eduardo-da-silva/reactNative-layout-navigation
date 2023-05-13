import axios from 'axios';

export default class MoviesApi {
  async getMovies() {
    try {
      const { data } = await axios.get('http://127.0.0.1:19003/movies');
      return Promise.resolve(data);
    } catch (error) {
      return Promise.error(error);
    }
  }
}
