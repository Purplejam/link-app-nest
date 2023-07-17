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
exports.UpdateLinkBodyDto = exports.UpdateLinkParamsDto = exports.CreateLinkDto = void 0;
const class_validator_1 = require("class-validator");
const custom_name_validator_1 = require("../../validators/custom-name.validator");
const custom_url_validator_1 = require("../../validators/custom-url.validator");
const existing_id_validator_1 = require("../../validators/existing-id.validator");
class CreateLinkDto {
}
__decorate([
    (0, custom_name_validator_1.LinkNameExists)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(3, 25),
    __metadata("design:type", String)
], CreateLinkDto.prototype, "name", void 0);
__decorate([
    (0, custom_url_validator_1.UrlIsCorrect)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(8, 50),
    __metadata("design:type", String)
], CreateLinkDto.prototype, "url", void 0);
exports.CreateLinkDto = CreateLinkDto;
class UpdateLinkParamsDto {
}
__decorate([
    (0, existing_id_validator_1.CheckIfIdExists)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateLinkParamsDto.prototype, "id", void 0);
exports.UpdateLinkParamsDto = UpdateLinkParamsDto;
class UpdateLinkBodyDto {
}
__decorate([
    (0, custom_name_validator_1.LinkNameExists)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(3, 25),
    __metadata("design:type", String)
], UpdateLinkBodyDto.prototype, "name", void 0);
__decorate([
    (0, custom_url_validator_1.UrlIsCorrect)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(8, 50),
    __metadata("design:type", String)
], UpdateLinkBodyDto.prototype, "url", void 0);
exports.UpdateLinkBodyDto = UpdateLinkBodyDto;
