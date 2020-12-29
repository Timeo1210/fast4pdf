import commander from "commander";
import { processProtect } from "src/types";
import defaultAction from "../../utils/defaultAction";

export function makeProtectCommand(): commander.Command {
  const protect = new commander.Command("protect");
  protect
    .arguments("<outputFile> <inputFile>")
    .option(
      "-p, --password <password>",
      "The password which the PDF will be encrypted with",
      "ilovepdf"
    )
    .description(
      "Protect PDF files with a password. Encrypt PDF documents to prevent unauthorized access"
    )
    .action((outputFile: string, inputFile: string, args: any) => {
      const options = {
        password: args.password,
      } as processProtect;

      defaultAction("protect", outputFile, inputFile, options);
    });

  return protect;
}
