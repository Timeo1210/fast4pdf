"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pdfjpg_1 = require("./pdfjpg/pdfjpg");
function makeCommands(program) {
    program.addCommand(pdfjpg_1.makePdfjpgCommand());
}
exports.default = makeCommands;
//# sourceMappingURL=makeCommands.js.map