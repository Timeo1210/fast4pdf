"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRepairCommand = void 0;
const commander_1 = __importDefault(require("commander"));
const defaultAction_1 = __importDefault(require("../../utils/defaultAction"));
function makeRepairCommand() {
    const repair = new commander_1.default.Command("repair");
    repair
        .arguments("<outputFile> <inputFile>")
        .description("Repair a damaged PDF and recover data from corrupt PDF. Fix PDF files with our Repair tool")
        .action((outputFile, inputFile) => {
        defaultAction_1.default("repair", outputFile, inputFile, {});
    });
    return repair;
}
exports.makeRepairCommand = makeRepairCommand;
//# sourceMappingURL=repair.js.map