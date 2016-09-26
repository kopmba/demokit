'use strict';
describe("controllers", function() {
	beforeEach(module("app"));
	describe("ViewCtrl", function() {
		return it("should make scope testable", inject(function($rootScope, $controller) {
			var view = $controller("ViewCtrl");
			return expect(view.content).toEqual("This is the partial for view.");
		}));
	});
});

'use strict';
describe("directives", function() {
	beforeEach(module("app"));
	return describe("app-version", function() {
		return it("should print current version", function() {
			module(function($provide) {
				$provide.constant("VERSION", "TEST_VER"); // mock the constant
			});
			return inject(function($compile, $rootScope) {
				var element = $compile("<app-version></app-version>")($rootScope);
				// fire all the watches, for the scope expression '{{ "%VERSION%" | interpolate  }}' to be will be evaluated
				$rootScope.$digest();
				return expect(element.text()).toEqual("TEST_VER");
			});
		});
	});
});

'use strict';
describe("filter", function() {
	beforeEach(module("app"));
	return describe("interpolate", function() {
		beforeEach(module(function($provide) {
			$provide.constant("VERSION", "TEST_VER"); // mock the service
		}));
		return it("should replace VERSION", inject(function(interpolateFilter) {
			return expect(interpolateFilter("before %VERSION% after")).toEqual("before TEST_VER after");
		}));
	});
});

'use strict';
describe("service", function() {
	beforeEach(module("app"));
	return describe("$version", function() {
		return it("should return current version", inject(function($version) {
			return expect($version).toEqual("0.7.0");
		}));
	});
});