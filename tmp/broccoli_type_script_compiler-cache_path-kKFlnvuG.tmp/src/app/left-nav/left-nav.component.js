"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var nav_item_component_1 = require('../nav-item/nav-item.component');
var navigation_service_1 = require('../navigation.service');
var LeftNavComponent = (function () {
    function LeftNavComponent(ns) {
        this.navItems = ns.getNavItems();
    }
    LeftNavComponent.prototype.ngOnInit = function () {
    };
    LeftNavComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-left-nav',
            templateUrl: 'left-nav.component.html',
            styleUrls: ['left-nav.component.css'],
            directives: [nav_item_component_1.NavItemComponent],
            providers: [navigation_service_1.NavigationService]
        }), 
        __metadata('design:paramtypes', [navigation_service_1.NavigationService])
    ], LeftNavComponent);
    return LeftNavComponent;
}());
exports.LeftNavComponent = LeftNavComponent;
//# sourceMappingURL=../../left-nav.component.js.map