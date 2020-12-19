"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePdfjpgCommand = void 0;
const commander_1 = __importDefault(require("commander"));
const action_1 = __importDefault(require("./action"));
function makePdfjpgCommand() {
    const pdfjpg = new commander_1.default.Command("pdfjpg");
    pdfjpg
        .arguments("<outputFile> <inputFile>")
        .option("-p, --pages", "Convert every PDF page to a JPG image (DEFAULT)")
        .option("-e, --extract", "extract all PDF's embed images to separate JPG images")
        .description("Convert a PDF to JPG image")
        .action((outputFile, inputFile, args) => {
        console.log("inputFile:", inputFile);
        console.log("outputFile:", outputFile);
        const options = {
            pdfjpg_mode: args.pages === true ? "pages" : "extract",
        };
        action_1.default(outputFile, inputFile, options);
    });
    return pdfjpg;
}
exports.makePdfjpgCommand = makePdfjpgCommand;
//# sourceMappingURL=pdfjpg.js.map