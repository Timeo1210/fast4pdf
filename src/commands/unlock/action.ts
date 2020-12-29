import path from "path";
import fs from "fs";
import API from "../../API/API";
import { processUnlock } from "src/types";
import getTokenTaskServer from "../../utils/getTokenTaskServer";
import changeExtension from "../../utils/changeExtension";

export default async function action(
  tool: "unlock",
  outputFile: string,
  inputFile: string,
  option: processUnlock
): Promise<void> {
  try {
    const filename = path.basename(inputFile);

    const defaultParams = await getTokenTaskServer(tool);
    const { server_filename } = await API.uploadFileOrLink(
      defaultParams,
      inputFile
    );

    let download_filename;
    if (option.password) {
      download_filename = (
        await API.processTask(
          defaultParams,
          tool,
          [
            {
              filename,
              server_filename,
              password: option.password,
            },
          ],
          {}
        )
      ).download_filename;
    } else {
      try {
        download_filename = (
          await API.processTask(
            defaultParams,
            tool,
            [
              {
                filename,
                server_filename,
              },
            ],
            {}
          )
        ).download_filename;
      } catch (e) {
        console.log("Command failed, need a password");
        return;
      }
    }

    const dlExtension = path.extname(download_filename);
    const outputExtension = path.basename(outputFile);
    if (dlExtension !== outputExtension) {
      outputFile = changeExtension(outputFile, dlExtension);
    }

    const responseStream = await API.downloadFromTask(defaultParams);
    responseStream.pipe(fs.createWriteStream(outputFile));
  } catch (e) {
    throw e;
  }
}
