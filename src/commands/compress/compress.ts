import commander from "commander";
import { processCompress } from "src/types";
import defaultAction from "../../utils/defaultAction";

export function makeCompressCommand(): commander.Command {
  const compress = new commander.Command("compress");
  compress
    .arguments("<outputFile> <inputFile>")
    .option("-r, --recommended", "Recommended compression")
    .option("-e, --extreme", "Extreme compression")
    .option("-l, --low", "Low compression")
    .description("Reduce file size while optimizing for maximal PDF quality")
    .action((outputFile: string, inputFile: string, args: any) => {
      let compressionLevel = "recommended";
      if (!args.recommended) {
        if (args.extreme && !args.low) {
          compressionLevel = "extreme";
        } else if (args.low && !args.extreme) {
          compressionLevel = "low";
        }
      }

      const options = {
        compression_level: compressionLevel,
      } as processCompress;

      defaultAction("compress", outputFile, inputFile, options);
    });

  return compress;
}
