"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRotateCommand = void 0;
const commander_1 = __importDefault(require("commander"));
const defaultAction_1 = __importDefault(require("../../utils/defaultAction"));
function makeRotateCommand() {
    const rotate = new commander_1.default.Command("rotate");
    rotate
        .arguments("<outputFile> <inputFile>")
        .option("-a, --angle <degres>", "Angle of the rotate in degres", "90")
        .description("Roate your PDF to the ")
        .action((outputFile, inputFile, args) => {
        const options = {
            rotate: args.angle,
        };
        defaultAction_1.default("rotate", outputFile, inputFile, options);
    });
    return rotate;
}
exports.makeRotateCommand = makeRotateCommand;
//# sourceMappingURL=rotate.js.map