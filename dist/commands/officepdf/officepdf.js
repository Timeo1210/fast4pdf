"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeOfficepdfCommand = void 0;
const commander_1 = __importDefault(require("commander"));
const defaultAction_1 = __importDefault(require("../../utils/defaultAction"));
function makeOfficepdfCommand() {
    const officepdf = new commander_1.default.Command("officepdf");
    officepdf
        .arguments("<outputFile> <inputFile>")
        .description("Convert Word, Powerpoint and Excel to PDF")
        .action((outputFile, inputFile) => {
        defaultAction_1.default("officepdf", outputFile, inputFile, {});
    });
    return officepdf;
}
exports.makeOfficepdfCommand = makeOfficepdfCommand;
//# sourceMappingURL=officepdf.js.map