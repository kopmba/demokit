import { module } from 'angular';
import router from 'angular-ui-router';
import ArtistListController from './list.controller';

/** @ngInject */
const route = $stateProvider => {
  $stateProvider
    .state('artist-list', {
      url: '/artist',
      parent: 'root',
      templateUrl: 'app/components/artist/list/list.html',
      controller: 'ArtistListController',
      controllerAs: 'list'
    });

};

const ArtistList = module('artist.list', [
  router
])
.controller('ArtistListController', ArtistListController)
.config(route);

export default ArtistList.name;
