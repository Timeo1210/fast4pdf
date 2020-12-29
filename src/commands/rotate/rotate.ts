import commander from "commander";
import { processRotate } from "src/types";
import defaultAction from "../../utils/defaultAction";

export function makeRotateCommand(): commander.Command {
  const rotate = new commander.Command("rotate");
  rotate
    .arguments("<outputFile> <inputFile>")
    .option("-a, --angle <degres>", "Angle of the rotate in degres", "90")
    .description("Rotate your PDF")
    .action((outputFile: string, inputFile: string, args: any) => {
      const options = {
        rotate: args.angle,
      } as processRotate;
      defaultAction("rotate", outputFile, inputFile, options);
    });

  return rotate;
}
