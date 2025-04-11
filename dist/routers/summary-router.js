"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var summary_controller_1 = require("../controllers/summary-controller");
var summaryRouter = (0, express_1.Router)();
summaryRouter.get("/summary/:document", summary_controller_1.getSummary);
exports.default = summaryRouter;
