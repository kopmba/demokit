export default class ArtistListController {
  /** @ngInject **/
  constructor($scope, $mdDialog, $translate, ArtistService, ToastService) {
    Object.assign(this, {
      $mdDialog, $translate, ArtistService, ToastService
    });

    this.artists = ArtistService.artists;
    $scope.$watch(() => ArtistService.artists, newVal => (this.artists = newVal));
    ArtistService.getArtists();
  }
}
