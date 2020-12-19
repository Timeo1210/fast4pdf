import commander from "commander";
import { makePdfjpgCommand } from "./pdfjpg/pdfjpg";
import { makeCompressCommand } from "./compress/compress";

export default function makeCommands(program: commander.Command) {
  program.addCommand(makePdfjpgCommand());
  program.addCommand(makeCompressCommand());
}
