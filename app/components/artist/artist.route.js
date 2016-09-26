import {module} from 'angular';
import router from 'angular-ui-router';
import ArtistController from './artist.controller';
import ArtistService from './artist.service';
import ArtistList from './list/list.route';

/** @ngInject */
const route = $stateProvider => {
  $stateProvider.state('artist', {
    url: '/artists',
    parent: 'root',
    //abstract: true, // commented because of the ionic managing state which allows only a singleton abstract
    templateUrl: 'app/components/artist/artist.html',
    data: {
      css: 'app/components/artist/artist.css'
    },
    controller: 'ArtistController',
    controllerAs: 'artist'
  });
};

const Artist = module('artist', [
  router,
  ArtistList
])
.controller('ArtistController', ArtistController)
.service('ArtistService', ArtistService)
.config(route);

export default Artist.name;
