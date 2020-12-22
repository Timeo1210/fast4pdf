import commander from "commander";
import { processPdfaConformance } from "src/types";
import defaultAction from "../../utils/defaultAction";

export function makePdfaCommand(): commander.Command {
  const pdfa = new commander.Command("pdfa");
  pdfa
    .arguments("<outputFile> <inputFile>")
    .option(
      "-c, --conformance <conformance>",
      "Set the PDF/A conformance level",
      "pdfa-2b"
    )
    .description(
      "Transform your PDF to PDF/A, the ISO-standardized version of PDF for long-term archiving. Your PDF will preserve formatting when accessed in the future"
    )
    .action((outputFile: string, inputFile: string, args: any) => {
      const options = {
        conformance: args.conformance,
      } as processPdfaConformance;

      defaultAction("pdfa", outputFile, inputFile, options);
    });

  return pdfa;
}
