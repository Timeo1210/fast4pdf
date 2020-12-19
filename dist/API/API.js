"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("./auth");
const start_1 = require("./start");
const upload_1 = require("./upload");
const process_1 = require("./process");
const download_1 = require("./download");
exports.default = {
    getToken: auth_1.getToken,
    getServerAndTask: start_1.getServerAndTask,
    uploadFileOrLink: upload_1.uploadFileOrLink,
    processTask: process_1.processTask,
    downloadFromTask: download_1.downloadFromTask,
};
//# sourceMappingURL=API.js.map