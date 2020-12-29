import commander from "commander";
import { processImgPdf } from "src/types";
import defaultAction from "../../utils/defaultAction";

export function makeImagepdfCommand(): commander.Command {
  const imagepdf = new commander.Command("imagepdf");
  imagepdf
    .arguments("<outputFile> <inputFile>")
    .option("-p, --portrait", "Portrait orientation")
    .option("-l, --landscape", "Landscape orientation")
    .option(
      "-s, --pagesize <size>",
      "Page size of the output PDF (fit|A4|letter)",
      "fit"
    )
    .option(
      "-m, --margin <number>",
      "Define margin in pixels for the image in the output PDF",
      "0"
    )
    .description(
      "Convert JPG images to PDF in seconds. Easily adjust orientation and margins."
    )
    .action((outputFile: string, inputFile: string, args: any) => {
      const orientation = args.portrait ? "portrait" : "landscape";
      const margin = args.margin || "0";
      const availableSize = ["fit", "A4", "letter"];
      const pagesize = availableSize.includes(args.pagesize)
        ? args.pagesize
        : "fit";

      const options = {
        orientation,
        margin,
        pagesize,
      } as processImgPdf;

      defaultAction("imagepdf", outputFile, inputFile, options);
    });

  return imagepdf;
}
