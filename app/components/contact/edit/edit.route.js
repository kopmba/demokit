import { module } from 'angular';
import router from 'angular-ui-router';
import ContactEditController from './edit.controller';

const ContactEdit = module('contact.edit', [
  router
])
.controller('ContactEditController', ContactEditController);

export default ContactEdit.name;
