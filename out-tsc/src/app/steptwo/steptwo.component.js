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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var User_1 = require("../User");
var SteptwoComponent = /** @class */ (function () {
    function SteptwoComponent() {
        this._step = 'two';
    }
    Object.defineProperty(SteptwoComponent.prototype, "step", {
        get: function () {
            return this._step;
        },
        set: function (value) {
            this._step = value;
        },
        enumerable: true,
        configurable: true
    });
    SteptwoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", User_1.User)
    ], SteptwoComponent.prototype, "user", void 0);
    SteptwoComponent = __decorate([
        core_1.Component({
            selector: 'app-steptwo',
            templateUrl: './steptwo.component.html',
            styleUrls: ['./steptwo.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], SteptwoComponent);
    return SteptwoComponent;
}());
exports.SteptwoComponent = SteptwoComponent;
//# sourceMappingURL=steptwo.component.js.map