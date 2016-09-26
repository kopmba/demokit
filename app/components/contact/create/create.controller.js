export default class CreateController {
  /** @ngInject */
  constructor($mdDialog, $translate, ContactService, ToastService) {
    Object.assign(this, {
      $mdDialog, $translate, ContactService, ToastService
    });
  }

  cancel() {
    this.$mdDialog.cancel();
  }

  create() {
    this.ContactService.createContact(this.contact)
      .then(() => this.$translate('TOAST.CREATE_SUCCESS'))
      .then(successMessage => {
        this.$mdDialog.cancel();
        this.ToastService.show(successMessage);
      });
  }
}
