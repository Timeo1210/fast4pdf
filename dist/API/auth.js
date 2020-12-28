"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToken = void 0;
const axios_1 = __importDefault(require("axios"));
async function getToken() {
    try {
        const data = await axios_1.default({
            method: "POST",
            url: "https://api.ilovepdf.com/v1/auth",
            data: {
                public_key: process.env.PUBLIC_KEY,
            },
        });
        return data.data.token;
    }
    catch (e) {
        throw e;
    }
}
exports.getToken = getToken;
//# sourceMappingURL=auth.js.map