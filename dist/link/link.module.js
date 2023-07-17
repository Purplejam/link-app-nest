"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const link_entity_1 = require("./link.entity");
const link_controller_1 = require("./link.controller");
const custom_name_validator_1 = require("../validators/custom-name.validator");
const link_service_1 = require("./link.service");
const custom_url_validator_1 = require("../validators/custom-url.validator");
const existing_id_validator_1 = require("../validators/existing-id.validator");
let LinkModule = class LinkModule {
};
LinkModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([link_entity_1.Link])],
        providers: [link_service_1.LinkService, custom_name_validator_1.LinkNameExistsConstraint, custom_url_validator_1.UrlCheckConstraint, existing_id_validator_1.IsIdExistsConstraint],
        controllers: [link_controller_1.LinkController],
    })
], LinkModule);
exports.LinkModule = LinkModule;
