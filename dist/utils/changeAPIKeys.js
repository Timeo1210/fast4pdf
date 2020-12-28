"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const writeKeysToEnv_1 = __importDefault(require("./writeKeysToEnv"));
function default_1() {
    const rl = readline_1.default.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    console.log("Please inquire your API Keys: ");
    console.log(`
    - Go to https://developer.ilovepdf.com/ and create an developer account.
    - Naviguate to https://developer.ilovepdf.com/user/projects and create a project.
  `);
    rl.question("Enter your Project key (JTI Claim): ", (answer) => {
        const publicKey = answer.trim();
        writeKeysToEnv_1.default({
            PUBLIC_KEY: publicKey,
        });
        rl.question("Enter your Secret key: ", (answer) => {
            const privateKey = answer.trim();
            writeKeysToEnv_1.default({
                PRIVATE_KEY: privateKey,
            });
            rl.close();
        });
    });
}
exports.default = default_1;
//# sourceMappingURL=changeAPIKeys.js.map