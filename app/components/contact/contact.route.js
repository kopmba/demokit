import { module } from 'angular';
import router from 'angular-ui-router';
import ContactController from './contact.controller';
import ContactService from './contact.service';
import ContactList from './list/list.route';
import ContactEdit from './edit/edit.route';
import ContactCreate from './create/create.route';

/** @ngInject */
const route = $stateProvider => {
  $stateProvider.state('contact', {
    url: '/contacts',
    parent: 'root',
    templateUrl: 'app/components/contact/contact.html',
    data: {
      css: 'app/components/contact/contact.css'
    },
    controller: 'ContactController',
    controllerAs: 'contact'
  });
};

const Contact = module('contact', [
  router,
  ContactList,
  ContactEdit,
  ContactCreate
])
.controller('ContactController', ContactController)
.service('ContactService', ContactService)
.config(route);

export default Contact.name;
