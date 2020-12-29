"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServerAndTask = void 0;
const axios_1 = __importDefault(require("axios"));
async function getServerAndTask(token, tool) {
    try {
        const data = await axios_1.default({
            method: "GET",
            url: `https://api.ilovepdf.com/v1/start/${tool}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return data.data;
    }
    catch (e) {
        throw e;
    }
}
exports.getServerAndTask = getServerAndTask;
//# sourceMappingURL=start.js.map