import angular from 'angular';
import router from 'angular-ui-router';
import <%= name %>Component from './<%= name %>.component';

let <%= name %>Module = angular.module('<%= name %>', [
  router
])

.component('<%= name %>', <%= name %>Component)

.name;

export default <%= name %>Module;
