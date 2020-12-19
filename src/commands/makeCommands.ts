import commander from "commander";
import { makePdfjpgCommand } from "./pdfjpg/pdfjpg";

export default function makeCommands(program: commander.Command) {
  program.addCommand(makePdfjpgCommand());
}
