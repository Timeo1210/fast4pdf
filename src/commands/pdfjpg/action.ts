import path from "path";
import fs from "fs";
import API from "../../API/API";
import { AvailableTools, processPdfjpg } from "src/types";
import getTokenTaskServer from "../../utils/getTokenTaskServer";

export default async function commandAction(
  outputFile: string,
  inputFile: string,
  options: processPdfjpg = { pdfjpg_mode: "pages" }
): Promise<void> {
  try {
    const tool = "pdfjpg" as AvailableTools;
    const filename = path.basename(inputFile);

    const defaultParams = await getTokenTaskServer(tool);
    const { server_filename } = await API.uploadFileOrLink(
      defaultParams,
      inputFile
    );
    await API.processTask(
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

    const responseStream = await API.downloadFromTask(defaultParams);
    responseStream.pipe(fs.createWriteStream(outputFile));
  } catch (e) {
    throw e;
  }
}
