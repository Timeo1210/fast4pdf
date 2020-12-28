"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadFromTask = void 0;
const axios_1 = __importDefault(require("axios"));
async function downloadFromTask(defaultParams) {
    try {
        const { token, task, server } = defaultParams;
        const options = {
            method: "GET",
            url: `https://${server}/v1/download/${task}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
            responseType: "stream",
        };
        const response = await axios_1.default(options);
        return response.data;
    }
    catch (e) {
        throw e;
    }
}
exports.downloadFromTask = downloadFromTask;
//# sourceMappingURL=download.js.map