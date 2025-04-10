"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importStar(require("express"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var phones_router_1 = __importDefault(require("./routers/phones-router"));
var recharges_router_1 = __importDefault(require("./routers/recharges-router"));
var summary_router_1 = __importDefault(require("./routers/summary-router"));
var errorHandler_middleware_1 = __importDefault(require("./middlewares/errorHandler-middleware"));
dotenv_1["default"].config();
var app = (0, express_1["default"])();
app.use((0, cors_1["default"])());
app.use((0, express_1.json)());
app.use(phones_router_1["default"]);
app.use(recharges_router_1["default"]);
app.use(summary_router_1["default"]);
app.use(errorHandler_middleware_1["default"]);
app.get("/health", function (req, res) {
    res.sendStatus(200);
});
var port = process.env.PORT || 5000;
app.listen(port, function () { return console.log("Server is up and running ".concat(port, "!")); });
