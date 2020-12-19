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
exports.uploadFileOrLink = void 0;
const axios_1 = __importDefault(require("axios"));
const fs_1 = __importDefault(require("fs"));
const form_data_1 = __importDefault(require("form-data"));
function uploadFileOrLink(defaultParams, filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { token, task, server } = defaultParams;
            const fileOptions = yield buildFileOption(filePath);
            const queryData = new form_data_1.default();
            queryData.append(fileOptions.key, fileOptions.value);
            queryData.append("task", task);
            const options = {
                method: "POST",
                url: `https://${server}/v1/upload`,
                headers: Object.assign({ Authorization: `Bearer ${token}` }, queryData.getHeaders()),
                maxBodyLength: Infinity,
                maxContentLength: Infinity,
                data: queryData,
            };
            const data = yield axios_1.default(options);
            return data.data;
        }
        catch (e) {
            throw e;
        }
    });
}
exports.uploadFileOrLink = uploadFileOrLink;
function buildFileOption(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        if (fs_1.default.existsSync(filePath)) {
            return { key: "file", value: fs_1.default.createReadStream(filePath) };
        }
        const protocol = filePath.split(":")[0];
        if (protocol === "http" || protocol === "https") {
            return { key: "cloud_file", value: filePath };
        }
        else {
            throw `${filePath} -> this file doesn't exist`;
        }
    });
}
//# sourceMappingURL=upload.js.map