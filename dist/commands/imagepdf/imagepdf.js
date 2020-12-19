"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeImagepdfCommand = void 0;
const commander_1 = __importDefault(require("commander"));
const defaultAction_1 = __importDefault(require("../../utils/defaultAction"));
function makeImagepdfCommand() {
    const imagepdf = new commander_1.default.Command("imagepdf");
    imagepdf
        .arguments("<outputFile> <inputFile>")
        .option("-p, --portrait", "Portrait orientation")
        .option("-l, --landscape", "Landscape orientation")
        .option("-s, --pagesize <size>", "Page size of the output PDF (fit|A4|letter)", "fit")
        .option("-m, --margin <number>", "Define margin in pixels for the image in the output PDF", "0")
        .description("Convert JPG images to PDF in seconds. Easily adjust orientation and margins.")
        .action((outputFile, inputFile, args) => {
        const orientation = args.portrait ? "portrait" : "landscape";
        const margin = args.margin || "0";
        const availableSize = ["fit", "A4", "letter"];
        const pagesize = availableSize.includes(args.pagesize)
            ? args.pagesize
            : "fit";
        const options = {
            orientation,
            margin,
            pagesize,
        };
        defaultAction_1.default("imagepdf", outputFile, inputFile, options);
    });
    return imagepdf;
}
exports.makeImagepdfCommand = makeImagepdfCommand;
//# sourceMappingURL=imagepdf.js.map