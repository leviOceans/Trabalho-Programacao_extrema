import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

  const api = axios.create({
    baseURL: baseURL,
    withCredentials: true,
  });

  class ApiService {
    constructor(apiUrl) {
      this.apiUrl = apiUrl;
    }

    static registrarToken(token) {
      if (token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      }
    }

    post(url, objeto) {
      const requestUrl = `${this.apiUrl}${url}`;
      return api.post(requestUrl, objeto);
    }

  }

export default ApiService;
