"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.phoneSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.phoneSchema = joi_1.default.object({
    phone_number: joi_1.default.string().length(11).required(),
    carrier: joi_1.default.string().required(),
    name: joi_1.default.string().required(),
    cpf: joi_1.default.string().length(11).required(),
    description: joi_1.default.string().required()
});
