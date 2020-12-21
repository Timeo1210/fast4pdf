import commander from "commander";
import defaultAction from "../../utils/defaultAction";

export function makeRepairCommand(): commander.Command {
  const repair = new commander.Command("repair");
  repair
    .arguments("<outputFile> <inputFile>")
    .description(
      "Repair a damaged PDF and recover data from corrupt PDF. Fix PDF files with our Repair tool"
    )
    .action((outputFile: string, inputFile: string) => {
      defaultAction("repair", outputFile, inputFile, {});
    });

  return repair;
}
