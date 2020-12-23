"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("./merge/merge");
const pdfjpg_1 = require("./pdfjpg/pdfjpg");
const compress_1 = require("./compress/compress");
const imagepdf_1 = require("./imagepdf/imagepdf");
const unlock_1 = require("./unlock/unlock");
const officepdf_1 = require("./officepdf/officepdf");
const repair_1 = require("./repair/repair");
const rotate_1 = require("./rotate/rotate");
const protect_1 = require("./protect/protect");
const pdfa_1 = require("./pdfa/pdfa");
function makeCommands(program) {
    program.addCommand(merge_1.makeMergeCommand());
    program.addCommand(pdfjpg_1.makePdfjpgCommand());
    program.addCommand(compress_1.makeCompressCommand());
    program.addCommand(imagepdf_1.makeImagepdfCommand());
    program.addCommand(unlock_1.makeUnlockCommand());
    program.addCommand(officepdf_1.makeOfficepdfCommand());
    program.addCommand(repair_1.makeRepairCommand());
    program.addCommand(rotate_1.makeRotateCommand());
    program.addCommand(protect_1.makeProtectCommand());
    program.addCommand(pdfa_1.makePdfaCommand());
}
exports.default = makeCommands;
//# sourceMappingURL=makeCommands.js.map