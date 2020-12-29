import path from "path";
import fs from "fs";
import API from "../../API/API";
import getTokenTaskServer from "../../utils/getTokenTaskServer";
import changeExtension from "../../utils/changeExtension";

export default async function action(
  tool: "merge",
  outputFile: string,
  inputFiles: Array<string>
): Promise<void> {
  try {
    const defaultParams = await getTokenTaskServer(tool);

    const processFiles = await Promise.all(
      inputFiles.map(async (inputFile) => {
        const filename = path.basename(inputFile);
        const { server_filename } = await API.uploadFileOrLink(
          defaultParams,
          inputFile
        );

        return { filename, server_filename };
      })
    );

    const { download_filename } = await API.processTask(
      defaultParams,
      tool,
      processFiles,
      {}
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
