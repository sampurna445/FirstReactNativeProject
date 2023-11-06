import {kApiUrlEndpoint, kApiUrlEndpoint3} from '../config/WebServices';
// import {fetch} from 'react-native-ssl-pinning';

class ApiHelper {
  async get(url, data, headers = {}) {
    // const completeUrl = kApiUrlEndpoint3 + url;

    // const response = await fetch(completeUrl, data).then(x => x.json());
    const response = await fetch(url, {
      method: 'GET',
      // sslPinning: {certs: ['mycert4']},
      headers: {
        Accept: 'application/json',
        ...headers,
      },
    }).then(x => x.json());

    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  }

  async post(url, data, headers = {}) {
    const completeUrl = kApiUrlEndpoint + url;

    const response = await fetch(completeUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(data),
    }).then(x => x.json());

    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  }

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
