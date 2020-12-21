import commander from "commander";
import defaultAction from "../../utils/defaultAction";

export function makeUnlockCommand(): commander.Command {
  const unlock = new commander.Command("unlock");
  unlock
    .arguments("<outputFile> <inputFile>")
    .description(
      "Remove PDF password security, giving you the freedom to use your PDFs as you want"
    )
    .action((outputFile: string, inputFile: string) => {
      defaultAction("unlock", outputFile, inputFile, {});
    });

  return unlock;
}
