"use strict";

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe("my app", function() {
	beforeEach(function() {
		return browser.get("/");
	});

	describe("view", function() {
		beforeEach(function() {
			return browser.get("/view");
		});
		return it("should render view when user navigates to /view", function() {
			return expect($("[ui-view] p:first-child").getText()).toMatch(/partial for view/);
		});
	});
})
