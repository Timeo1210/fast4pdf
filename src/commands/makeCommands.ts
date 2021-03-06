import commander from "commander";
import { make_ChangeAPIKeysCommand } from "./_changeAPIKeys/_changeAPIKeys";
import { makeMergeCommand } from "./merge/merge";
import { makeSplitCommand } from "./split/split";
import { makePdfjpgCommand } from "./pdfjpg/pdfjpg";
import { makeCompressCommand } from "./compress/compress";
import { makeImagepdfCommand } from "./imagepdf/imagepdf";
import { makeUnlockCommand } from "./unlock/unlock";
import { makeOfficepdfCommand } from "./officepdf/officepdf";
import { makeRepairCommand } from "./repair/repair";
import { makeRotateCommand } from "./rotate/rotate";
import { makeProtectCommand } from "./protect/protect";
import { makePdfaCommand } from "./pdfa/pdfa";

export default function makeCommands(program: commander.Command) {
  program.addCommand(make_ChangeAPIKeysCommand());
  program.addCommand(makeMergeCommand());
  program.addCommand(makeSplitCommand());
  program.addCommand(makePdfjpgCommand());
  program.addCommand(makeCompressCommand());
  program.addCommand(makeImagepdfCommand());
  program.addCommand(makeUnlockCommand());
  program.addCommand(makeOfficepdfCommand());
  program.addCommand(makeRepairCommand());
  program.addCommand(makeRotateCommand());
  program.addCommand(makeProtectCommand());
  program.addCommand(makePdfaCommand());
}
