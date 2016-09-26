import material from 'angular-material';
import router from 'angular-ui-router';
import translate from 'angular-translate';
import angular from 'angular';
import 'angular-animate';
import 'angular-sanitize';

const Common = angular.module('app.common', [
  router,
  material,
  translate
]);

export default Common.name;
