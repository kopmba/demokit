import angular from 'angular';

import router from './route.config';
import translate from './i18n.config';

const Config = angular.module('app.config', [])
  .config(router)
  .config(translate)
  .constant('Config', {
    API_URL_CONTACTS: 'https://smkitapp.herokuapp.com/api/contacts/',
    API_URL_ARTISTS: 'https://smkitapp.herokuapp.com/api/artists/'
  });

export default Config.name;
