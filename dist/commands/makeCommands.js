"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pdfjpg_1 = require("./pdfjpg/pdfjpg");
const compress_1 = require("./compress/compress");
const imagepdf_1 = require("./imagepdf/imagepdf");
const unlock_1 = require("./unlock/unlock");
function makeCommands(program) {
    program.addCommand(pdfjpg_1.makePdfjpgCommand());
    program.addCommand(compress_1.makeCompressCommand());
    program.addCommand(imagepdf_1.makeImagepdfCommand());
    program.addCommand(unlock_1.makeUnlockCommand());
}
exports.default = makeCommands;
//# sourceMappingURL=makeCommands.js.map