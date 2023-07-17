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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.LinkController = void 0;
const common_1 = require("@nestjs/common");
const link_service_1 = require("./link.service");
const link_dto_1 = require("./dto/link.dto");
let LinkController = class LinkController {
    constructor(linkService) {
        this.linkService = linkService;
    }
    createLink(createLinkDto, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, url } = createLinkDto;
            const link = yield this.linkService.createLink(name, url);
            return res.status(201).json({
                statusCode: 201,
                link,
            });
        });
    }
    getLinks(res) {
        return __awaiter(this, void 0, void 0, function* () {
            const links = yield this.linkService.getLinks();
            if (!links) {
                throw new common_1.NotFoundException('Links not found, try again later');
            }
            return res.status(200).json({
                statusCode: 200,
                links,
            });
        });
    }
    findOneByName(name, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const link = yield this.linkService.findOneByName(name);
            if (!link) {
                throw new common_1.NotFoundException('Link not found with this id');
            }
            return res.status(200).json({
                statusCode: 200,
                link,
            });
        });
    }
    updateLink(params, body, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, url } = body;
            const id = Number(params.id);
            const link = yield this.linkService.updateLink(id, name, url);
            if (!link) {
                throw new common_1.NotFoundException('Link not found');
            }
            return res.status(201).json({
                statusCode: 201,
                link,
            });
        });
    }
    deleteLink(res, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = Number(params.id);
            const result = yield this.linkService.deleteLink(id);
            return res.status(202).json({
                statusCode: 202,
            });
        });
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [link_dto_1.CreateLinkDto, Object]),
    __metadata("design:returntype", Promise)
], LinkController.prototype, "createLink", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LinkController.prototype, "getLinks", null);
__decorate([
    (0, common_1.Get)(':name'),
    __param(0, (0, common_1.Param)('name')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], LinkController.prototype, "findOneByName", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [link_dto_1.UpdateLinkParamsDto,
        link_dto_1.UpdateLinkBodyDto, Object]),
    __metadata("design:returntype", Promise)
], LinkController.prototype, "updateLink", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, link_dto_1.UpdateLinkParamsDto]),
    __metadata("design:returntype", Promise)
], LinkController.prototype, "deleteLink", null);
LinkController = __decorate([
    (0, common_1.Controller)('links'),
    __metadata("design:paramtypes", [link_service_1.LinkService])
], LinkController);
exports.LinkController = LinkController;
