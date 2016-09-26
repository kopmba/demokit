import { module } from 'angular';
import router from 'angular-ui-router';

/** @ngInject */
const route = $stateProvider => {
  $stateProvider.state('root', {
    abstract: true,
    url: '',
    views: {
      '': {
        templateUrl: 'app/components/layout/layout.html'
      },
      'header@root': {
        templateUrl: 'app/components/header/header.html',
        controller: 'HeaderController',
        controllerAs: 'header'
      }
    }
  });
};

const Layout = module('layout', [
  router
])
.config(route);

export default Layout.name;
