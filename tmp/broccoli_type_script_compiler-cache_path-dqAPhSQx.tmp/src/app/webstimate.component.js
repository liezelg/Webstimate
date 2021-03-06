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
var left_nav_component_1 = require('./left-nav/left-nav.component');
var content_component_1 = require('./content/content.component');
var WebstimateAppComponent = (function () {
    function WebstimateAppComponent() {
        this.title = 'webstimate works!';
    }
    WebstimateAppComponent.prototype.onLeftNavClicked = function ($event) {
        console.log("Left Nav Clicked: " + $event.currentlyShowing);
        this.isShowing = $event.currentlyShowing === "Scissors";
    };
    WebstimateAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'webstimate-app',
            templateUrl: 'webstimate.component.html',
            styleUrls: ['webstimate.component.css'],
            directives: [left_nav_component_1.LeftNavComponent, content_component_1.ContentComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], WebstimateAppComponent);
    return WebstimateAppComponent;
}());
exports.WebstimateAppComponent = WebstimateAppComponent;
//# sourceMappingURL=../webstimate.component.js.map