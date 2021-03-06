import EditModule from './edit';
import EditController from './edit.controller';
import EditComponent from './edit.component';
import EditTemplate from './edit.html';

describe('Edit', () => {
  let $rootScope, makeController;

  beforeEach(window.module(EditModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new EditController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(EditTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = EditComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(EditTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(EditController);
      });
  });
});
