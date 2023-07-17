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
exports.LinkNameExists = exports.LinkNameExistsConstraint = void 0;
const class_validator_1 = require("class-validator");
const common_1 = require("@nestjs/common");
const link_service_1 = require("../link/link.service");
let LinkNameExistsConstraint = class LinkNameExistsConstraint {
    constructor(linkService) {
        this.linkService = linkService;
    }
    validate(name, _validationArguments) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingLink = yield this.linkService.findOneByName(name);
            if (existingLink !== null)
                return false;
            return true;
        });
    }
    defaultMessage(_validationArguments) {
        return 'Link with this name already exists!';
    }
};
LinkNameExistsConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'linkNameExists', async: true }),
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [link_service_1.LinkService])
], LinkNameExistsConstraint);
exports.LinkNameExistsConstraint = LinkNameExistsConstraint;
function LinkNameExists(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [],
            validator: LinkNameExistsConstraint,
        });
    };
}
exports.LinkNameExists = LinkNameExists;
