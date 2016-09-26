import { module } from 'angular';
import router from 'angular-ui-router';
import ErrorController from './error.controller';

/** @ngInject */
const route = $stateProvider => {
  $stateProvider.state('errorPage', {
    url: '/404',
    parent: 'root',
    templateUrl: 'app/components/error/error.html',
    controller: 'ErrorController',
    controllerAs: 'errorPage'
  });
};

const ErrorPage = module('errorPage', [
  router
])
.controller('ErrorController', ErrorController)
.config(route);

export default ErrorPage.name;
