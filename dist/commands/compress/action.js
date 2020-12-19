"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const API_1 = __importDefault(require("../../API/API"));
const getTokenTaskServer_1 = __importDefault(require("../../utils/getTokenTaskServer"));
function commandAction(outputFile, inputFile, options = { compression_level: "recommended" }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const tool = "compress";
            const filename = path_1.default.basename(inputFile);
            const defaultParams = yield getTokenTaskServer_1.default(tool);
            const { server_filename } = yield API_1.default.uploadFileOrLink(defaultParams, inputFile);
            yield API_1.default.processTask(defaultParams, tool, [
                {
                    filename,
                    server_filename,
                },
            ], options);
            const responseStream = yield API_1.default.downloadFromTask(defaultParams);
            responseStream.pipe(fs_1.default.createWriteStream(outputFile));
        }
        catch (e) {
            throw e;
        }
    });
}
exports.default = commandAction;
//# sourceMappingURL=action.js.map