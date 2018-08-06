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
var user_service_1 = require("../user.service");
var SteponeComponent = /** @class */ (function () {
    function SteponeComponent(userService) {
        this.userService = userService;
        this._step = '1';
    }
    Object.defineProperty(SteponeComponent.prototype, "step", {
        get: function () {
            return this._step;
        },
        set: function (value) {
            this._step = value;
        },
        enumerable: true,
        configurable: true
    });
    SteponeComponent.prototype.onSelect = function (user) {
        this.selectedUser = user;
    };
    SteponeComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (users) { return _this.users = users; });
    };
    SteponeComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    SteponeComponent = __decorate([
        core_1.Component({
            selector: 'app-stepone',
            templateUrl: './stepone.component.html',
            styleUrls: ['./stepone.component.css']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], SteponeComponent);
    return SteponeComponent;
}());
exports.SteponeComponent = SteponeComponent;
//# sourceMappingURL=stepone.component.js.map