import {kApiUrlEndpoint} from '../config/WebServices';

class ApiHelper {
  async get(url, data) {
    const completeUrl = kApiUrlEndpoint + url;

    const response = await fetch(completeUrl, data).then(x => x.json());

    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  }
  async post() {}

  handlePromise = (resolve, reject, response) => {
    if (response.error) {
      if (response.error.code === 'LOGIN_FAILED') {
        reject('any error string');
      } else if (response.error.code === 'NETWORK_ISSUE') {
        reject('any error string');
      }
    } else {
      resolve(response);
    }
  };
}
export default new ApiHelper();
