import commander from "commander";
import { processUnlock } from "src/types";
import action from "./action";

export function makeUnlockCommand(): commander.Command {
  const unlock = new commander.Command("unlock");
  unlock
    .arguments("<outputFile> <inputFile>")
    .option(
      "-p, --password <password>",
      "This options is required if the command fail"
    )
    .description(
      "Remove PDF password security, giving you the freedom to use your PDFs as you want"
    )
    .action((outputFile: string, inputFile: string, args: any) => {
      const options = {
        password: args.password,
      } as processUnlock;
      action("unlock", outputFile, inputFile, options);
    });

  return unlock;
}
