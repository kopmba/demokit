import template from './<%= name %>.html';
import controller from './<%= name %>.controller';

let <%= name %>Component = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default <%= name %>Component;
