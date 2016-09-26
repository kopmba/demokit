import { module } from 'angular';
import router from 'angular-ui-router';
import ContactListController from './list.controller';

/** @ngInject */
const route = $stateProvider => {
  $stateProvider
    .state('contact-list', {
      url: '/contact',
      parent: 'root',
      templateUrl: 'app/components/contact/list/list.html',
      controller: 'ContactListController',
      controllerAs: 'list'
    });
};

const ContactList = module('contact-list', [
  router
])
.controller('ContactListController', ContactListController)
.config(route);

export default ContactList.name;
