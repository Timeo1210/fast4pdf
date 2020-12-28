import commander from "commander";
import { processSplit } from "src/types";
import defaultAction from "../../utils/defaultAction";

export function makeSplitCommand(): commander.Command {
  const split = new commander.Command("split");
  split
    .arguments("<outputFile> <inputFile>")
    .option(
      "-m, --mode <splitMode>",
      "Choose split mode: \n - ranges: define different ranges of pages --ranges param is required \n - fixed_range: define a fixed range of pages to split the PDF. --fixed-range is required \n",
      "fixed_range"
    )
    .option(
      "-r, --ranges <splitFormat>",
      "Page ranges to split the files. Every range will be saved as different PDF file Example format: 1,5,10-14"
    )
    .option(
      "-fr, --fixed-range <number>",
      "Split the PDF file in chunks by every defined number",
      "1"
    )
    .option(
      "-mr, --merge-after <boolean>",
      "Merge all ranges after being split. This param takes offect only when --mode is range",
      "false"
    )
    .description(
      "Separate one page or a whole set for easy conversion into independent PDF files"
    )
    .action((outputFile: string, inputFile: string, args: any) => {
      if (
        (args.mode !== "fixed_range" && args.mode !== "ranges") ||
        (args.mode === "ranges" && args.ranges === undefined)
      ) {
        return console.log("Invalid options");
      }

      const options = {
        split_mode: args.mode,
        ranges: args.ranges,
        fixed_range: args.fixedRange,
        merge_after: args.mergeAfter,
      } as processSplit;

      defaultAction("split", outputFile, inputFile, options);
    });

  return split;
}
