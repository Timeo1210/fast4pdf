import commander from "commander";
import { makePdfjpgCommand } from "./pdfjpg/pdfjpg";
import { makeCompressCommand } from "./compress/compress";
import { makeImagepdfCommand } from "./imagepdf/imagepdf";
import { makeUnlockCommand } from "./unlock/unlock";
import { makeOfficepdfCommand } from "./officepdf/officepdf";
import { makeRepairCommand } from "./repair/repair";
import { makeRotateCommand } from "./rotate/rotate";

export default function makeCommands(program: commander.Command) {
  program.addCommand(makePdfjpgCommand());
  program.addCommand(makeCompressCommand());
  program.addCommand(makeImagepdfCommand());
  program.addCommand(makeUnlockCommand());
  program.addCommand(makeOfficepdfCommand());
  program.addCommand(makeRepairCommand());
  program.addCommand(makeRotateCommand());
}
