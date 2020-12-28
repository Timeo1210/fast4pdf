"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const API_1 = __importDefault(require("../API/API"));
async function getTokenTaskServer(tool) {
    const token = await API_1.default.getToken();
    const { task, server } = await API_1.default.getServerAndTask(token, tool);
    return {
        token,
        task,
        server,
    };
}
exports.default = getTokenTaskServer;
//# sourceMappingURL=getTokenTaskServer.js.map