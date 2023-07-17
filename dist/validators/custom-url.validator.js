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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlIsCorrect = exports.UrlCheckConstraint = void 0;
const class_validator_1 = require("class-validator");
const common_1 = require("@nestjs/common");
const link_service_1 = require("../link/link.service");
const is_url_regex_1 = require("../lib/is-url-regex");
let UrlCheckConstraint = class UrlCheckConstraint {
    constructor(linkService) {
        this.linkService = linkService;
    }
    validate(url, _validationArguments) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, is_url_regex_1.urlRegexValidator)(url);
        });
    }
    defaultMessage(_validationArguments) {
        return 'Link must contain http, https or www';
    }
};
UrlCheckConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'urlIsCorrect', async: true }),
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [link_service_1.LinkService])
], UrlCheckConstraint);
exports.UrlCheckConstraint = UrlCheckConstraint;
function UrlIsCorrect(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [],
            validator: UrlCheckConstraint,
        });
    };
}
exports.UrlIsCorrect = UrlIsCorrect;
