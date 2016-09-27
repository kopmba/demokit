import angular from 'angular';

import Toast from './toast/toast';

const Utils = angular.module('app.utils', [
  Toast
]);

export default Utils.name;
