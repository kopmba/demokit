import { module } from 'angular';
import router from 'angular-ui-router';
import ContactCreateController from './create.controller';

const ContactCreate = module('contact.create', [
  router
])
.controller('ContactCreateController', ContactCreateController);

export default ContactCreate.name;
