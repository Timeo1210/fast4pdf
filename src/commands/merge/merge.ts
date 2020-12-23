import commander from "commander";
import action from "./action";

export function makeMergeCommand(): commander.Command {
  const merge = new commander.Command("merge");
  merge
    .arguments("<outputFile> <inputFile...>")
    .description("Combine PDFs")
    .action((outputFile: string, inputFile: Array<string>) => {
      action("merge", outputFile, inputFile);
    });

  return merge;
}
