import { module } from 'angular';
import router from 'angular-ui-router';

/** @ngInject */
const route = $stateProvider => {
  $stateProvider.state('home', {
    url: '/',
    parent: 'root',
    templateUrl: 'app/components/home/home.html'
  });
};

const Home = module('home', [
  router
])
.config(route);

export default Home.name;
