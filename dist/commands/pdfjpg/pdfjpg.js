"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePdfjpgCommand = void 0;
const commander_1 = __importDefault(require("commander"));
const defaultAction_1 = __importDefault(require("../../utils/defaultAction"));
function makePdfjpgCommand() {
    const pdfjpg = new commander_1.default.Command("pdfjpg");
    pdfjpg
        .arguments("<outputFile> <inputFile>")
        .option("-p, --pages", "Convert every PDF page to a JPG image (DEFAULT)")
        .option("-e, --extract", "extract all PDF's embed images to separate JPG images")
        .description("Convert a PDF to JPG image")
        .action((outputFile, inputFile, args) => {
        const options = {
            pdfjpg_mode: args.extract === undefined ? "pages" : "extract",
        };
        defaultAction_1.default("pdfjpg", outputFile, inputFile, options);
    });
    return pdfjpg;
}
exports.makePdfjpgCommand = makePdfjpgCommand;
//# sourceMappingURL=pdfjpg.js.map