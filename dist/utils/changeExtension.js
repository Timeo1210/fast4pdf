"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
function changeExtension(filePath, extension) {
    return path_1.default.join(path_1.default.dirname(filePath), path_1.default.basename(filePath, path_1.default.extname(filePath)) + extension);
}
exports.default = changeExtension;
//# sourceMappingURL=changeExtension.js.map