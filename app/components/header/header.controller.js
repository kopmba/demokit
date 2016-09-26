export default class HeaderController {
  /** @ngInject */
  constructor($translate) {
    Object.assign(this, {
      $translate
    });

    this.languages = [
      { key: 'en', name: 'English' },
      { key: 'fr', name: 'Français' }
    ];
    this.selectedLanguage = 'en';
  }

  changeLanguage() {
    this.$translate.use(this.selectedLanguage);
  }
}
