import axios from 'axios';

export default {
  randomEmployees: function (query) {
    return axios.get('https://randomuser.me/api/?results=100&nat=us');
  }
};
