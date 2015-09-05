export default class Server {
  constructor() {
    this.defaultOptions = {
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };

    this.request = this.request.bind(this);
  }

  buildURL(resource, id) {
    return `${API_HOSTNAME}/${API_VERSION}/${resource}/${id}`;
  }

  async request(path, options) {
    return await fetch(this.buildURL(url), options)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          return Promise.resolve(response);
        } else {
          return Promise.reject({
            error: new Error(response.statusText),
            json: response.json()
          });
        }
      })
      .then(response => response.json())
      .catch(error => Promise.reject(error));
  }

  post = (path, body, options = {}) => {
    return this.request(path, Object.assign(this.defaultOptions, {
      ...options,
      method: 'POST',
      body: JSON.stringify(body)
    }));
  }

  get = (path, options = {}) => {
    return this.request(path, Object.assign(this.defaultOptions, options));
  }
}
