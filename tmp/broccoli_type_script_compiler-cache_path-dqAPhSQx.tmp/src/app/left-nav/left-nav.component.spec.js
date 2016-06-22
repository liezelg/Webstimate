/* tslint:disable:no-unused-variable */
"use strict";
var navigation_service_1 = require('../navigation.service');
var testing_1 = require('@angular/core/testing');
var left_nav_component_1 = require('./left-nav.component');
testing_1.describe('Component: LeftNav', function () {
    testing_1.it('should create an instance', function () {
        var service = new navigation_service_1.NavigationService();
        var component = new left_nav_component_1.LeftNavComponent(service);
        testing_1.expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=../../left-nav.component.spec.js.map