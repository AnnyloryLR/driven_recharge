"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.rechargeDataSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.rechargeDataSchema = joi_1["default"].object({
    recharge: joi_1["default"].number().min(10).max(1000).required(),
    phone: joi_1["default"].string().length(11).required()
});
