class ArtistService {

    /** @ngInject */
  constructor($http, Config) {
    this.$http = $http;
    this.API_URL = Config.API_URL_ARTISTS;
    this.artists = [];
  }

  getArtists() {
    return this.$http
        .get(this.API_URL)
        .then(res => this.artists = res.data);
  }

  getArtistById(id) {
    return this.$http
        .get(this.API_URL + id)
        .then(res => res.data);
  }

  updateArtist(artist) {
    return this.$http
        .put(this.API_URL + artist.id, artist)
        .then(res => this.artists = this.contacts.map(
          artist => (artist.id === res.data.id) ? res.data : artist
        ));
  }

  deleteArtist(id) {
    return this.$http
      .delete(this.API_URL + id)
      .then(() => this.artists = this.artists.filter(
        artist => artist.id !== id
      ));
  }

  createContact(artist) {
    return this.$http
      .post(this.API_URL, artist)
      .then(res => this.artists.push(res.data));
  }

}

export default ArtistService;
