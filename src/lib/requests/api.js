import Storage from './storage';

class Api {

  static async headers() {
    let token = ''
    await Storage.retrieveData('access_token').then(resp => {
      token = resp
    })
    // console.log("token", token)
    return {
      'Content-Type': 'application/json',
      // Authorization: await Storage.retrieveData('access_token'),
      Authorization: `Bearer ${token}`

    };
  }

  static async headersMultiForm() {
    let token = ''
    await Storage.retrieveData('access_token').then(resp => {
      token = resp
    })
    return {
      'Content-Type': 'multipart/form-data',
      //Authorization: await Storage.retrieveData('access_token'),
      //authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhaGlsYWhtYWQxMjU4QGdtYWlsLmNvbSIsImlhdCI6MTU5ODk1MjA3NH0.9U-UGXHVfyzUIpaECyRDJlfPadBy_ykM0sUc_UA_aM4'
      Authorization: `Bearer ${token}`
    };
  }

  // static setStorage(resp) {
  //   console.log(resp)
  //   Storage.storeData('access_token', `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhaGlsYWhtYWQxMjU4QGdtYWlsLmNvbSIsImlhdCI6MTU5OTA0MjI0N30.di2AchDXzbAHfROD5U2e1o6ogcVawPOTEPUT39BmOlM`);
  // }

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
    // const host = 'https://fast-savannah-09511.herokuapp.com/api/v1/';
    // const host = 'https://9fe191ccdd0a.ngrok.io/api/v1/';
    //const host = 'https://sheltered-inlet-30058.herokuapp.com/api/v1/'
    //const host = 'https://localhost:3000/api/v1/'
    // const host = 'https://mobile-cartzy-backend.herokuapp.com/'
    const host = 'https://api.mobilecartzy.com/'
    const url = `${host}${route}`;
    let options = Object.assign({ method: verb }, params ? { body: params } : null);
    options.headers = await Api.headersMultiForm();
    console.log(url, options);
    return fetch(url, options)
      .then((resp) => {
        let json = resp.json();
        if (resp.ok) {
          if (route === 'login') {
            this.setStorage(resp);
          }
          return json;
        }
        return json.then((err) => {
          throw err;
        });
      })
      .then((json) => {
        if (route === 'login') {
          this.setAuth(json);
        }
        return json;
      });
  }

  static async xhr(route, params, verb) {
    //const host = 'https://fast-savannah-09511.herokuapp.com/api/v1/';
    // const host = 'https://9fe191ccdd0a.ngrok.io/api/v1/';
    //const host = 'https://sheltered-inlet-30058.herokuapp.com/api/v1/';
    //const host = 'https://localhost:3000/api/v1/'
    // const host = 'https://mobile-cartzy-backend.herokuapp.com/'
    const host = 'https://api.mobilecartzy.com/'
    const url = `${host}${route}`;
    let options = Object.assign(
      { method: verb },
      params ? { body: JSON.stringify(params) } : null,
    );
    options.headers = await Api.headers();
    console.log(url, options);
    return fetch(url, options)
      .then((resp) => {
        // console.log("test", getToken())
        // console.log("access", Storage.retrieveData('access_token'))
        let json = resp.json();
        if (resp.ok) {
          if (route === 'login') {
            this.setStorage(resp);
          }
          return json;
        }
        return json.then((err) => {
          throw err;
        });
      })
      .then((json) => {
        if (route === 'login') {
          this.setAuth(json);
        }
        return json;
      });
  }
}
export default Api;
