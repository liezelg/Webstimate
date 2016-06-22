/* tslint:disable:no-unused-variable */
"use strict";
var testing_1 = require('@angular/core/testing');
var nav_item_component_1 = require('./nav-item.component');
testing_1.describe('Component: NavItem', function () {
    testing_1.describe('Initialization', function () {
        testing_1.it('should create an instance', function () {
            var component = new nav_item_component_1.NavItemComponent();
            testing_1.expect(component).toBeTruthy();
        });
        testing_1.it('has a valid navLabel', function () {
            var component = new nav_item_component_1.NavItemComponent();
            testing_1.expect(component.navLabel).not.toBeNull();
        });
    });
});
//# sourceMappingURL=../../nav-item.component.spec.js.map