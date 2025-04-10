"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.schemaValidate = void 0;
var http_status_1 = __importDefault(require("http-status"));
function schemaValidate(schema) {
    return function (req, res, next) {
        var body = req.body;
        var validation = schema.validate(body);
        if (validation.error) {
            res.status(http_status_1["default"].UNPROCESSABLE_ENTITY)
                .send(validation.error.details.map(function (detail) { return detail.message; }));
            return;
        }
        next();
    };
}
exports.schemaValidate = schemaValidate;
