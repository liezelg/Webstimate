"use strict";
var testing_1 = require('@angular/core/testing');
var webstimate_component_1 = require('../app/webstimate.component');
testing_1.beforeEachProviders(function () { return [webstimate_component_1.WebstimateAppComponent]; });
testing_1.describe('App: Webstimate', function () {
    testing_1.it('should create the app', testing_1.inject([webstimate_component_1.WebstimateAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'webstimate works!\'', testing_1.inject([webstimate_component_1.WebstimateAppComponent], function (app) {
        testing_1.expect(app.title).toEqual('webstimate works!');
    }));
});
//# sourceMappingURL=../webstimate.component.spec.js.map