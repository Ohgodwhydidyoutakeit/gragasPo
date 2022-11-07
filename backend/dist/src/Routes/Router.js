"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MainRoute = (0, express_1.Router)();
MainRoute.get('/v1/getAll');
exports.default = MainRoute;
