import { module } from 'angular';
import router from 'angular-ui-router';

/** @ngInject */
const route = $stateProvider => {
  $stateProvider.state('about', {
    url: '/about',
    parent: 'root',
    templateUrl: 'app/components/about/about.html',
    data: {
      css: 'app/components/about/about.css'
    }
  });
};

const About = module('about', [
  router
])
.config(route);

export default About.name;
