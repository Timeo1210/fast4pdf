"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeMergeCommand = void 0;
const commander_1 = __importDefault(require("commander"));
const action_1 = __importDefault(require("./action"));
function makeMergeCommand() {
    const merge = new commander_1.default.Command("merge");
    merge
        .arguments("<outputFile> <inputFile...>")
        .description("Combine PDFs")
        .action((outputFile, inputFile) => {
        action_1.default("merge", outputFile, inputFile);
    });
    return merge;
}
exports.makeMergeCommand = makeMergeCommand;
//# sourceMappingURL=merge.js.map