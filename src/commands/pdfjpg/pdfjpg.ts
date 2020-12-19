import commander from "commander";
import { processPdfjpg } from "src/types";
import defaultAction from "../../utils/defaultAction";

export function makePdfjpgCommand(): commander.Command {
  const pdfjpg = new commander.Command("pdfjpg");
  pdfjpg
    .arguments("<outputFile> <inputFile>")
    .option("-p, --pages", "Convert every PDF page to a JPG image (DEFAULT)")
    .option(
      "-e, --extract",
      "extract all PDF's embed images to separate JPG images"
    )
    .description("Convert a PDF to JPG image")
    .action((outputFile: string, inputFile: string, args: any) => {
      const options = {
        pdfjpg_mode: args.extract === undefined ? "pages" : "extract",
      } as processPdfjpg;

      defaultAction("pdfjpg", outputFile, inputFile, options);
    });

  return pdfjpg;
}
