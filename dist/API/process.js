"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processTask = void 0;
const axios_1 = __importDefault(require("axios"));
const buildFilesData_1 = __importDefault(require("../utils/buildFilesData"));
const form_data_1 = __importDefault(require("form-data"));
async function processTask(defaultParams, tool, files, other = {}) {
    try {
        const { token, task, server } = defaultParams;
        const queryData = new form_data_1.default();
        queryData.append("task", task);
        queryData.append("tool", tool);
        const { filesData, filesDataKeys } = buildFilesData_1.default(files);
        for (let i = 0; i < filesDataKeys.length; i++) {
            queryData.append(filesDataKeys[i], filesData[`${filesDataKeys[i]}`]);
        }
        const otherKeys = Object.keys(other);
        for (let i = 0; i < otherKeys.length; i++) {
            const otherValue = other[`${otherKeys[i]}`];
            if (!otherValue)
                continue;
            queryData.append(otherKeys[i], otherValue);
        }
        const options = {
            method: "POST",
            url: `https://${server}/v1/process`,
            headers: Object.assign({ Authorization: `Bearer ${token}` }, queryData.getHeaders()),
            data: queryData,
        };
        const { data } = await axios_1.default(options);
        return {
            status: data.status,
            download_filename: data.download_filename || "",
        };
    }
    catch (e) {
        throw e;
    }
}
exports.processTask = processTask;
//# sourceMappingURL=process.js.map