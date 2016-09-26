import angular from 'angular';

export default class ContactListController {
  /** @ngInject */
  constructor($scope, $mdDialog, $translate, ContactService, ToastService) {
    Object.assign(this, {
      $mdDialog, $translate, ContactService, ToastService
    });

    this.contacts = ContactService.contacts;
    $scope.$watch(
      () => ContactService.contacts,
      newVal => (this.contacts = newVal)
    );

    ContactService.getContacts();
  }

  edit($event, contactId) {
    this.$mdDialog.show({
      controller: 'ContactEditController',
      controllerAs: 'edit',
      templateUrl: 'app/components/contact/edit/edit.html',
      locals: {
        contactId
      },
      parent: angular.element(document.body),
      targetEvent: $event,
      clickOutsideToClose: true
    });
  }

  create($event) {
    this.$mdDialog.show({
      controller: 'ContactCreateController',
      controllerAs: 'create',
      templateUrl: 'app/components/contact/create/create.html',
      parent: angular.element(document.body),
      targetEvent: $event,
      clickOutsideToClose: true
    });
  }

  delete($event, contact) {
    this.$translate(['CONTACT.CONFIRM_DELETE', 'CONTACT.CONTACT_NAME', 'CONTACT.YES', 'CONTACT.NO'])
      .then(translations => this.$mdDialog.show(this.$mdDialog.confirm()
        .title(translations['CONTACT.CONFIRM_DELETE'])
        .textContent(`${translations['CONTACT.CONTACT_NAME']}: ${contact.name}`)
        .ariaLabel('confirm remove contact')
        .targetEvent($event)
        .ok(translations['CONTACT.YES'])
        .cancel(translations['CONTACT.NO'])
      ))
      .then(() => this.ContactService.deleteContact(contact.id))
      .then(() => this.$translate('TOAST.DELETE_SUCCESS'))
      .then(successMessage => {
        this.ToastService.show(successMessage);
      });
  }
}
