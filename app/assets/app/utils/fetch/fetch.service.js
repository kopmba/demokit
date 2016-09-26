export default class FetchService {

  /** @ngInject */
  constructor($http, Config, entry) {
    this.$http = $http;
    this.API_URL = '';
    this.set(entry, Config);
  }

  set(entry, Config) {
    switch (entry) {
      case 'contact':
        this.API_URL = Config.API_URL_CONTACTS;
        break;
      case 'artist':
        this.API_URL = Config.API_URL_ARTISTS;
        break;
    }
  }

  get(entry) {
    return this.$http.get(`${this.API_URL}${entry}`);
  }

  post(entry, callback) {
    return this.$http.post(`${this.API_URL}${entry}`, callback);
  }

  put(entry, callback) {
    return this.$http.put(`${this.API_URL}${entry}`, callback);
  }

  delete(entry, callback) {
    return this.$http.delete(`${this.API_URL}${entry}`, callback);
  }
}
