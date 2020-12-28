"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSplitCommand = void 0;
const commander_1 = __importDefault(require("commander"));
const defaultAction_1 = __importDefault(require("../../utils/defaultAction"));
function makeSplitCommand() {
    const split = new commander_1.default.Command("split");
    split
        .arguments("<outputFile> <inputFile>")
        .option("-m, --mode <splitMode>", "Choose split mode: \n - ranges: define different ranges of pages --ranges param is required \n - fixed_range: define a fixed range of pages to split the PDF. --fixed-range is required \n", "fixed_range")
        .option("-r, --ranges <splitFormat>", "Page ranges to split the files. Every range will be saved as different PDF file Example format: 1,5,10-14")
        .option("-fr, --fixed-range <number>", "Split the PDF file in chunks by every defined number", "1")
        .option("-mr, --merge-after <boolean>", "Merge all ranges after being split. This param takes offect only when --mode is range", "false")
        .description("Separate one page or a whole set for easy conversion into independent PDF files")
        .action((outputFile, inputFile, args) => {
        if ((args.mode !== "fixed_range" && args.mode !== "ranges") ||
            (args.mode === "ranges" && args.ranges === undefined)) {
            return console.log("Invalid options");
        }
        const options = {
            split_mode: args.mode,
            ranges: args.ranges,
            fixed_range: args.fixedRange,
            merge_after: args.mergeAfter,
        };
        defaultAction_1.default("split", outputFile, inputFile, options);
    });
    return split;
}
exports.makeSplitCommand = makeSplitCommand;
//# sourceMappingURL=split.js.map