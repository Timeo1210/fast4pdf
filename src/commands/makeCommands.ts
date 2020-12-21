import commander from "commander";
import { makePdfjpgCommand } from "./pdfjpg/pdfjpg";
import { makeCompressCommand } from "./compress/compress";
import { makeImagepdfCommand } from "./imagepdf/imagepdf";
import { makeUnlockCommand } from "./unlock/unlock";

export default function makeCommands(program: commander.Command) {
  program.addCommand(makePdfjpgCommand());
  program.addCommand(makeCompressCommand());
  program.addCommand(makeImagepdfCommand());
  program.addCommand(makeUnlockCommand());
}
