"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GragasController_1 = __importDefault(require("../Controller/GragasController/GragasController"));
const MainRoute = (0, express_1.Router)();
MainRoute.get('/v1/getAll', GragasController_1.default.getAll);
exports.default = MainRoute;
