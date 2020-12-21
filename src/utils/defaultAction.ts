import path from "path";
import fs from "fs";
import API from "../API/API";
import { AvailableTools, processAll } from "src/types";
import getTokenTaskServer from "./getTokenTaskServer";
import changeExtension from "./changeExtension";

export default async function defaultAction(
  tool: AvailableTools,
  outputFile: string,
  inputFile: string,
  options: processAll = {}
): Promise<void> {
  try {
    const filename = path.basename(inputFile);

    const defaultParams = await getTokenTaskServer(tool);
    const { server_filename } = await API.uploadFileOrLink(
      defaultParams,
      inputFile
    );
    const { download_filename } = await API.processTask(
      defaultParams,
      tool,
      [
        {
          filename,
          server_filename,
        },
      ],
      options
    );
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
