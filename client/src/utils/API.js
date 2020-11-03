import axios from axios;

const url = 'http://localhost:5000/api/projects';

export default {
    getProjects: function () {
      return axios.get(url);
    }
  };