import {
  en,
  fr
} from '../i18n';

/** @ngInject */
export default $translateProvider => {
  $translateProvider
    .useSanitizeValueStrategy('escape')
    .translations('en', en)
    .translations('fr', fr)
    .preferredLanguage('en')
    .fallbackLanguage('en');
};
