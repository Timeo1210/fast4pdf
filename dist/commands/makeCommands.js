"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pdfjpg_1 = require("./pdfjpg/pdfjpg");
const compress_1 = require("./compress/compress");
function makeCommands(program) {
    program.addCommand(pdfjpg_1.makePdfjpgCommand());
    program.addCommand(compress_1.makeCompressCommand());
}
exports.default = makeCommands;
//# sourceMappingURL=makeCommands.js.map