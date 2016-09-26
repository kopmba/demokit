export default class EditController {
  /** @ngInject */
  constructor($mdDialog, $translate, ContactService, ToastService, contactId) {
    Object.assign(this, {
      $mdDialog, $translate, ContactService, ToastService
    });

    ContactService.getContactById(contactId).then(contact => (this.contact = contact));
  }

  cancel() {
    this.$mdDialog.cancel();
  }

  edit() {
    this.ContactService.updateContact(this.contact)
      .then(() => this.$translate('TOAST.EDIT_SUCCESS'))
      .then(successMessage => {
        this.$mdDialog.cancel();
        this.ToastService.show(successMessage);
      });
  }
}
