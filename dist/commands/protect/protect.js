"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeProtectCommand = void 0;
const commander_1 = __importDefault(require("commander"));
const defaultAction_1 = __importDefault(require("../../utils/defaultAction"));
function makeProtectCommand() {
    const protect = new commander_1.default.Command("protect");
    protect
        .arguments("<outputFile> <inputFile>")
        .option("-p, --password <password>", "The password which the PDF will be encrypted with", "ilovepdf")
        .description("Protect PDF files with a password. Encrypt PDF documents to prevent unauthorized access")
        .action((outputFile, inputFile, args) => {
        const options = {
            password: args.password,
        };
        defaultAction_1.default("protect", outputFile, inputFile, options);
    });
    return protect;
}
exports.makeProtectCommand = makeProtectCommand;
//# sourceMappingURL=protect.js.map