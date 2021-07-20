import superAgent from 'superagent';

const methods = ["get", "post", "del", "update", "patch"];

export default class ApiHandler {
  constructor() {
    methods.forEach((reqMethod) => {
      this[reqMethod] = (endpoint, { params, data } = {}) => new Promise((resolve, reject) => {
        const Request = superAgent[reqMethod](endpoint);

        if (params) {
          Request.query(params);
        }

        if (data) {
          Request.send(data);
        }

        Request.end((error, { body } = {}) => error ? reject(body || error) : resolve(body));
      });
    });
  }
}