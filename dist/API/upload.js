"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFileOrLink = void 0;
const axios_1 = __importDefault(require("axios"));
const fs_1 = __importDefault(require("fs"));
const form_data_1 = __importDefault(require("form-data"));
async function uploadFileOrLink(defaultParams, filePath) {
    try {
        const { token, task, server } = defaultParams;
        const fileOptions = await buildFileOption(filePath);
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
        const data = await axios_1.default(options);
        return data.data;
    }
    catch (e) {
        throw e;
    }
}
exports.uploadFileOrLink = uploadFileOrLink;
async function buildFileOption(filePath) {
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
}
//# sourceMappingURL=upload.js.map