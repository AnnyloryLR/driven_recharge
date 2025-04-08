"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
app.get("/health", function (req, res) {
    res.sendStatus(200);
});
app.listen(5000, function () { return console.log("Server is up and running!"); });
