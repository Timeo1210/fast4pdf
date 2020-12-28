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
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
function default_1(envObject) {
    return __awaiter(this, void 0, void 0, function* () {
        const inputKey = Object.keys(envObject)[0];
        const inputValue = envObject[inputKey];
        const envFile = path_1.default.resolve(path_1.default.dirname(path_1.default.dirname(__dirname)), "./.env.prod");
        const envFileData = (yield promises_1.default.readFile(envFile)).toString();
        if (envFileData.includes("PUBLIC_KEY") &&
            envFileData.includes("PRIVATE_KEY")) {
            const envData = envFileData.split("\n");
            for (let i = 0; i < envData.length; i++) {
                const [envDataKey] = envData[i].split("=");
                if (envDataKey === inputKey) {
                    const finalEnv = [envDataKey, inputValue].join("=");
                    envData[i] = finalEnv;
                    break;
                }
            }
            const finalEnvData = envData.join("\n");
            yield promises_1.default.writeFile(envFile, finalEnvData);
        }
        else {
            const finalEnvData = `${inputKey}=${inputValue}\n`;
            yield promises_1.default.appendFile(envFile, finalEnvData);
        }
    });
}
exports.default = default_1;
function checkIfEnvKeyIsAlreadyWritten(inputKey) {
    return __awaiter(this, void 0, void 0, function* () {
        const envFile = path_1.default.resolve(path_1.default.dirname(path_1.default.dirname(__dirname)), "./.env.dev");
        const envFileData = (yield promises_1.default.readFile(envFile)).toString();
        const envData = envFileData.split("\n");
        for (let i = 0; i < envData.length; i++) {
            const [envDataKey, envDataValue] = envData[i].split("=");
            if (envDataKey === inputKey) {
                return;
            }
        }
    });
}
//# sourceMappingURL=writeKeyToEnv.js.map