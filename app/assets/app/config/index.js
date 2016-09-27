import { module } from 'angular';

import router from './route.config';
import translate from './i18n.config';

const Config = module('app.config', [])
  .config(router)
  .config(translate)
  .constant('Config', {
    API_URL_CONTACTS: 'smkitapp.herokuapp.com/api/contacts/',
    API_URL_ARTISTS: 'smkitapp.herokuapp.com/api/artists//'
  });

export default Config.name;
