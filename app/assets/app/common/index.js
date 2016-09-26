import material from 'angular-material';
import router from 'angular-ui-router';
import translate from 'angular-translate';
import { module } from 'angular';

const Common = module('app.common', [
  router,
  material,
  translate
]);

export default Common.name;
