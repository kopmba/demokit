class ContactSerivce {

  /** @ngInject */
  constructor($http, Config) {
    this.$http = $http;
    this.API_URL = Config.API_URL_CONTACTS;
    this.contacts = [];
  }

  getContacts() {
    return this.$http
      .get(this.API_URL)
      .then(res => this.contacts = res.data);
  }

  getContactById(id) {
    return this.$http
      .get(this.API_URL + id)
      .then(res => res.data);
  }

  updateContact(contact) {
    return this.$http
      .put(this.API_URL + contact.id, contact)
      .then(res => this.contacts = this.contacts.map(
        contact => (contact.id === res.data.id) ? res.data : contact
      ));
  }

  deleteContact(id) {
    return this.$http
      .delete(this.API_URL + id)
      .then(() => this.contacts = this.contacts.filter(
        contact => contact.id !== id
      ));
  }

  createContact(contact) {
    return this.$http
      .post(this.API_URL, contact)
      .then(res => this.contacts.push(res.data));
  }
}

export default ContactSerivce;
