import axios from 'axios';

const request = async (path, method) => {
  return axios({
    url: path,
    method,
  });
}

export default request;
