"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUnlockCommand = void 0;
const commander_1 = __importDefault(require("commander"));
const defaultAction_1 = __importDefault(require("../../utils/defaultAction"));
function makeUnlockCommand() {
    const unlock = new commander_1.default.Command("unlock");
    unlock
        .arguments("<outputFile> <inputFile>")
        .description("Remove PDF password security, giving you the freedom to use your PDFs as you want")
        .action((outputFile, inputFile) => {
        defaultAction_1.default("unlock", outputFile, inputFile, {});
    });
    return unlock;
}
exports.makeUnlockCommand = makeUnlockCommand;
//# sourceMappingURL=unlock.js.map