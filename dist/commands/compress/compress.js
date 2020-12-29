"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCompressCommand = void 0;
const commander_1 = __importDefault(require("commander"));
const defaultAction_1 = __importDefault(require("../../utils/defaultAction"));
function makeCompressCommand() {
    const compress = new commander_1.default.Command("compress");
    compress
        .arguments("<outputFile> <inputFile>")
        .option("-r, --recommended", "Recommended compression")
        .option("-e, --extreme", "Extreme compression")
        .option("-l, --low", "Low compression")
        .description("Reduce file size while optimizing for maximal PDF quality")
        .action((outputFile, inputFile, args) => {
        let compressionLevel = "recommended";
        if (!args.recommended) {
            if (args.extreme && !args.low) {
                compressionLevel = "extreme";
            }
            else if (args.low && !args.extreme) {
                compressionLevel = "low";
            }
        }
        const options = {
            compression_level: compressionLevel,
        };
        defaultAction_1.default("compress", outputFile, inputFile, options);
    });
    return compress;
}
exports.makeCompressCommand = makeCompressCommand;
//# sourceMappingURL=compress.js.map