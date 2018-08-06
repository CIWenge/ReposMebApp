"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var stepone_component_1 = require("./stepone/stepone.component");
var wizardstepone_component_1 = require("./wizardstepone/wizardstepone.component");
var wizardsteptwo_component_1 = require("./wizardsteptwo/wizardsteptwo.component");
var wizardstepthree_component_1 = require("./wizardstepthree/wizardstepthree.component");
var routes = [
    { path: 'step1', component: stepone_component_1.SteponeComponent },
    { path: '', component: wizardstepone_component_1.WizardsteponeComponent },
    { path: 'steptwo', component: wizardsteptwo_component_1.WizardsteptwoComponent },
    { path: 'stepthree', component: wizardstepthree_component_1.WizardstepthreeComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map