import Storage from './storage';

const HOST = 'https://kado-22526.botics.co/';
class Api {
  static async headers() {
    let token = '';
    await Storage.retrieveData('access_token').then(resp => {
      token = resp;
    });
    return {
      'Content-Type': 'application/json',
      Authorization: `Token ${token.key}`,
    };
  }

  static async headersMultiForm() {
    let token = '';
    await Storage.retrieveData('access_token').then(resp => {
      token = resp;
    });
    return {
      'Content-Type': 'multipart/form-data',
      Authorization: `Token ${token}`,
    };
  }

  static setAuth(resp) {
    Storage.storeData('isAuthenticated', true);
  }

  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT');
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST');
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE');
  }

  static putMultiForm(route, parama) {
    return this.xhrMultiForm(route, parama, 'PUT');
  }

  static postMultiForm(route, parama) {
    return this.xhrMultiForm(route, parama, 'POST');
  }

  static async xhrMultiForm(route, params, verb) {
    const url = `${HOST}${route}`;
    let options = Object.assign({method: verb}, params ? {body: params} : null);
    options.headers = await Api.headersMultiForm();
    console.log(url, options);
    return fetch(url, options)
      .then(resp => {
        let json = resp.json();
        if (resp.ok) {
          if (route === 'login') {
            this.setStorage(resp);
          }
          return json;
        }
        return json.then(err => {
          throw err;
        });
      })
      .then(json => {
        if (route === 'login') {
          this.setAuth(json);
        }
        return json;
      });
  }

  static async xhr(route, params, verb) {
    const url = `${HOST}${route}`;
    let options = Object.assign(
      {method: verb},
      params ? {body: JSON.stringify(params)} : null,
    );
    options.headers = await Api.headers();
    console.log(url, options);
    return fetch(url, options)
      .then(resp => {
        // console.log("test", getToken())
        // console.log("access", Storage.retrieveData('access_token'))
        let json = resp.json();
        if (resp.ok) {
          if (route === 'login') {
            this.setStorage(resp);
          }
          return json;
        }
        return json.then(err => {
          throw err;
        });
      })
      .then(json => {
        if (route === 'login') {
          this.setAuth(json);
        }
        return json;
      });
  }
}
export default Api;
