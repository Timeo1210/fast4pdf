"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
async function default_1(envObject) {
    for (const inputKey in envObject) {
        const inputValue = envObject[inputKey];
        const envFile = path_1.default.resolve(path_1.default.dirname(path_1.default.dirname(__dirname)), "./.env.prod");
        const envFileData = (await promises_1.default.readFile(envFile)).toString();
        if (envFileData.includes("PUBLIC_KEY")) {
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
            await promises_1.default.writeFile(envFile, finalEnvData);
        }
        else {
            const finalEnvData = `${inputKey}=${inputValue}\n`;
            await promises_1.default.appendFile(envFile, finalEnvData);
        }
    }
}
exports.default = default_1;
//# sourceMappingURL=writeKeysToEnv.js.map