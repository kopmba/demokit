import CreateModule from './create';
import CreateController from './create.controller';
import CreateComponent from './create.component';
import CreateTemplate from './create.html';

describe('Create', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CreateModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CreateController();
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
      expect(CreateTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CreateComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CreateTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CreateController);
      });
  });
});
