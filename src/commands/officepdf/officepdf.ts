import commander from "commander";
import defaultAction from "../../utils/defaultAction";

export function makeOfficepdfCommand(): commander.Command {
  const officepdf = new commander.Command("officepdf");
  officepdf
    .arguments("<outputFile> <inputFile>")
    .description("Convert Word, Powerpoint and Excel to PDF")
    .action((outputFile: string, inputFile: string) => {
      defaultAction("officepdf", outputFile, inputFile, {});
    });

  return officepdf;
}
