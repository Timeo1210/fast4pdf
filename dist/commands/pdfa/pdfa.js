"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePdfaCommand = void 0;
const commander_1 = __importDefault(require("commander"));
const defaultAction_1 = __importDefault(require("../../utils/defaultAction"));
function makePdfaCommand() {
    const pdfa = new commander_1.default.Command("pdfa");
    pdfa
        .arguments("<outputFile> <inputFile>")
        .option("-c, --conformance <conformance>", "Set the PDF/A conformance level", "pdfa-2b")
        .description("Transform your PDF to PDF/A, the ISO-standardized version of PDF for long-term archiving. Your PDF will preserve formatting when accessed in the future")
        .action((outputFile, inputFile, args) => {
        const options = {
            conformance: args.conformance,
        };
        defaultAction_1.default("pdfa", outputFile, inputFile, options);
    });
    return pdfa;
}
exports.makePdfaCommand = makePdfaCommand;
//# sourceMappingURL=pdfa.js.map